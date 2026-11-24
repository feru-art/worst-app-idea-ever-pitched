// V5 — "Worst App Idea Ever Pitched": a deadpan founder pitch for an app
// that notifies you of something you can already see with your own eyes.
// One sentence, one app, one uselessness.
// Gate (RULES.txt): output 1-240 chars, single line, non-whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "SunsetAlert sends you a push notification the moment the sun sets outside your window, so you never have to look up and check the sky yourself again.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")), { recursive: true });
writeFileSync(out, PITCH, "utf8");
