import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import jwt from "jsonwebtoken";

export const loader: LoaderFunction = async () => {
  // Si tu veux autoriser GET aussi, sinon tu peux supprimer loader
  return json({ message: "Use POST to get token" });
};


export const action: ActionFunction = async () => {
  const secret = process.env.VITE_TIPTAP_COLLAB_TOKEN || "226bb773c6dee3a2523804b1fc3dcad5178e5350e8cf0985e9902926c7a501e4";
  const appId = process.env.VITE_TIPTAP_COLLAB_APP_ID || "yko83w79";

  if (!secret || !appId) {
    return json({ error: "Missing AI secret or app id" }, { status: 500 });
  }

  const userId = "user-123"; // récupère depuis ta session si possible

  const payload = {
    sub: userId,
    appId,
    // autres claims si besoin
  };

  const token = jwt.sign(payload, secret, { expiresIn: "1h" });

  return json({ token });
};