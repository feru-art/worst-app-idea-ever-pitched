// V4 — "Worst App Idea Ever Pitched": a deadpan founder pitch for an app
// built for an audience that cannot use it, sold with total confidence.
// One sentence, one app, one uselessness.
// Gate (RULES.txt): output 1-240 chars, single line, non-whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "BarkBank is the banking app for dogs, letting your pet check its balance, set savings goals, and approve its own treats with a single pawprint.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")), { recursive: true });
writeFileSync(out, PITCH, "utf8");
