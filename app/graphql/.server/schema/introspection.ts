import fs from "fs";
import { introspectionFromSchema } from "graphql";
import path from "path";
import { schema } from ".";

// Pour obtenir __dirname en ESM
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.writeFileSync(
  path.join(__dirname, "introspection.json"),
  JSON.stringify(introspectionFromSchema(schema))
);