import db from "../lib/prisma/db.server";
import { language } from "../config/app";

export async function getLanguageFromSession(session) {
  const dbSession = await db.session.findFirst({ where: { id: session.id }, select: { language: true }, });

 return dbSession?.language ?? language;
} 

export async function setLanguageInSession(session, lang) {
  const dbSession = await db.session.update({
    where: { id: session.id },
    data: { language: lang },
  });

  return dbSession.language;
}