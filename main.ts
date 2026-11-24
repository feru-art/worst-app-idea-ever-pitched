// V2 — "Worst App Idea Ever Pitched": a deadpan founder pitch for an app
// that measures something nobody needs measured, reported with a straight face.
// One sentence, one app, one uselessness.
// Gate (RULES.txt): output 1-240 chars, single line, non-whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "BlinkRate tracks how many times you blink during meetings and emails your manager a weekly blinking-productivity report, so your team finally knows who is really paying attention.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")), { recursive: true });
writeFileSync(out, PITCH, "utf8");
