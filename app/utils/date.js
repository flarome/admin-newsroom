// utils/date.js

import { DateTime } from "luxon";

export const getYear = (date) =>
  date
    ? new Date(date).getFullYear().toString()
    : new Date().getFullYear().toString();

export const getMonth = (date) =>
  date
    ? String(new Date(date).getMonth() + 1).padStart(2, "0")
    : String(new Date(date).getMonth() + 1).padStart(2, "0");

export function isValidDate(value) {
  if (!value) return false; // null, undefined, '' → ❌
  const date = value instanceof Date ? value : new Date(value);
  return date instanceof Date && !isNaN(date.getTime());
}

export function dateToLocale(date, timeZone) {
  return DateTime.fromJSDate(date)
    .setZone(timeZone) 
    .toLocaleString(DateTime.DATETIME_HUGE);
}
export function getValidDate(date) {
  return isValidDate(date) ? new Date(date) : new Date();
}

export function getCompactTimestamp(date) {
  const now = date ? new Date(date) : new Date();

  const pad = (n) => n.toString().padStart(2, "0");

  const yyyy = now.getFullYear();
  const MM = pad(now.getMonth() + 1);
  const dd = pad(now.getDate());
  const HH = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  return `${yyyy}${MM}${dd}${HH}${mm}${ss}`;
}