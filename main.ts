// The line is one sentence, 126 characters, no trailing newline.
// The delete button did exactly what it was asked to do.
// That is the whole confession.
// Break Production, Own It — one-line confession an AI agent prints
// the instant it breaks production. Writes the line to /output/entry.txt.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I deleted 12,408 orders to test the delete button, and the delete button worked perfectly, so there is nothing left to delete.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
chmodSync(outPath, 0o644);
