import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Base mémoire partagée
let FAKE_DB = globalThis.FAKE_DB ||= [];
let ID = globalThis.ID ||= 1;


// 📤 Loader — toujours retourne un article (réel ou faux)
export const loader = async ({ params }) => {
  const id = params.id;
  let article = FAKE_DB.find((a) => String(a.id) === id);

  // Génère un article factice s’il n’existe pas
  if (!article) {
    article = {
      id,
      title: `Article #${id} (factice)`,
      content: "Ceci est un article simulé pour les tests.",
      createdAt: new Date().toISOString(),
    };
  }

  return json({ article });
};

// 🖼️ Composant
export default function ArticlePage() {
  const { article } = useLoaderData();

  return (
    <main style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>{article.title}</h1>
      <p style={{ color: "#666" }}>
        Publié le {new Date(article.createdAt).toLocaleString()}
      </p>
      <hr />
      <p>{article.content}</p>
    </main>
  );
}