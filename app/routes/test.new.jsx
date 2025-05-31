import { json } from "@remix-run/node";
import {
  useFetcher,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { useEffect } from "react";

// 🔧 API factice
async function getHeaderInfo() {
  return {
    title: "1Création d’un nouvel article",
    subtitle: "Testez ici la soumission d’un article de blog fictif.",
  };
}

let FAKE_DB = globalThis.FAKE_DB ||= [];
let ID = globalThis.ID ||= 1;

async function createFakeArticle({ title, content }) {
  const article = {
    id: ID++,
    title,
    content,
    createdAt: new Date().toISOString(),
  };
  FAKE_DB.push(article);
  return article;
}

// 📤 Loader
export const loader = async () => {
  const header = await getHeaderInfo();
  return json({ header });
};

// 📥 Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  if (!title || !content) {
    return json({ error: "Tous les champs sont obligatoires." }, { status: 400 });
  }

  const article = await createFakeArticle({ title, content });
  return json({ redirectTo: `/test/${article.id}` });
};

// 🖼️ Composant
export default function NewArticlePage() {
  const { header } = useLoaderData();
  const fetcher = useFetcher();
  const navigate = useNavigate();

  useEffect(() => {
    if (fetcher.data?.redirectTo) {
      navigate(fetcher.data.redirectTo);
    }
  }, [fetcher.data, navigate]);

  const isSubmitting = fetcher.state === "submitting";

  return (
    <main style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <header style={{ marginBottom: 30 }}>
        <h1>{header.title}</h1>
        <p style={{ color: "#666" }}>{header.subtitle}</p>
      </header>

      {fetcher.data?.error && <p style={{ color: "red" }}>{fetcher.data.error}</p>}

      <fetcher.Form method="post">
        <p>
          <label>
            Titre<br />
            <input name="title" type="text" required />
          </label>
        </p>

        <p>
          <label>
            Contenu<br />
            <textarea name="content" rows={6} required />
          </label>
        </p>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Création…" : "Créer l’article"}
        </button>
      </fetcher.Form>
    </main>
  );
}