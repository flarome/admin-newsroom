// app/routes/api/lang.ts
import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticate } from "../lib/shopify/shopify.server";
import { setLanguageInSession } from "models/language.server";

export async function action({ request }: ActionFunctionArgs) {
  const { session } = await authenticate.admin(request);
  const body = await request.json();
  const newLang = body.lang;

  if (!newLang || typeof newLang !== "string") {
    return json({ error: "Invalid language" }, { status: 400 });
  }

  return await setLanguageInSession(session, newLang);
}
