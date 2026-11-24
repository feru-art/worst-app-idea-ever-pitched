// V3 — "Worst App Idea Ever Pitched": a deadpan founder pitch for an app
// that automates something faster done by hand, pitched as progress.
// One sentence, one app, one uselessness.
// Gate (RULES.txt): output 1-240 chars, single line, non-whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "PourPerfect schedules, times, and logs every glass of water you pour, so you never have to make the difficult decision of drinking when you are thirsty.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")), { recursive: true });
writeFileSync(out, PITCH, "utf8");
