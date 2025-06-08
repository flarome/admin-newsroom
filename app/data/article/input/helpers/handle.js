import { getMonth, getYear } from "../../../../utils/date";

export function formatHandlePrefix(date) {

    return `${getYear(date)}-${getMonth(date)}-`
}