// Fortune in a Pot — make.fun entry.
// One kind, funny fortune for a houseplant, written to /output/entry.txt.
// Node 22, standard library only; deterministic, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const FORTUNE =
  "Soon a stranger will admire you from the sidewalk, and your keeper will pretend they planned your glow all along.";

function outputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function writeEntry(): void {
  const path = outputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, FORTUNE, "utf8");
}

writeEntry();
