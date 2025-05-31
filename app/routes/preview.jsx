import { fetch } from 'undici'; // Node 18+, sinon: import fetch from 'undici'
import { CookieJar } from 'tough-cookie';

export async function loader({ request }) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url) {
    return new Response("URL manquante", { status: 400 });
  }

  // Ajoute les autres searchParams (hors 'url') à la cible
  const targetUrl = new URL(url);
  searchParams.forEach((value, key) => {
    if (key !== "url") {
      targetUrl.searchParams.set(key, value);
    }
  });

  // Cookie Jar et logique de suivi manuel des redirections
  const jar = new CookieJar();
  let currentUrl = targetUrl.toString();
  let maxRedirects = 8;
  let response;

  for (let i = 0; i < maxRedirects; i++) {
    const cookieHeader = await jar.getCookieString(currentUrl);

    response = await fetch(currentUrl, {
      headers: cookieHeader ? { cookie: cookieHeader } : {},
      redirect: 'manual',
    });

    // Suivi des redirections (301, 302, 303, 307, 308)
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('location');
      const setCookie = response.headers.getSetCookie?.() || response.headers.raw?.()['set-cookie'];
      if (setCookie) {
        // undici: getSetCookie() dispo Node 20+ sinon headers.raw
        (Array.isArray(setCookie) ? setCookie : [setCookie]).forEach(cookieStr => {
          jar.setCookieSync(cookieStr, currentUrl);
        });
      }
      if (!location) break;
      currentUrl = new URL(location, currentUrl).toString();
      continue;
    }
    break; // Pas de redirection, on sort
  }

  let html = await response.text();

  html = html.replace(
    /<meta[^>]+http-equiv=['"]?(Content-Security-Policy|X-Frame-Options)['"]?[^>]*>/gi,
    ""
  );

  return new Response(html, {
    status: response.status,
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
}
export default null; // ou supprime l'export default