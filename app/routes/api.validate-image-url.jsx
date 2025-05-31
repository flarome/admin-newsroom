
import fetch from "node-fetch"; // si node <18 sinon global fetch

// app/routes/api.validate-image-url.js

export async function loader({ request }) {
  const urlObj = new URL(request.url);
  const remoteUrl = urlObj.searchParams.get("url");
  if (!remoteUrl) {
    return new Response(
      JSON.stringify({ ok: false, status: 400, error: "Missing URL" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const res = await fetch(remoteUrl, { method: "HEAD" });
    const contentType = res.headers.get("content-type") || null;
    if (!res.ok) {
      return new Response(
        JSON.stringify({
          ok: false,
          status: res.status,
          error: "Remote URL not accessible",
          contentType,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({
        ok: true,
        status: res.status,
        contentType,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ ok: false, status: 500, error: "Fetch error" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
}

export default null; // ou supprime l'export default