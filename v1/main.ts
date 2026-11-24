// V1 — "Worst App Idea Ever Pitched": a deadpan founder pitch for an app
// that solves a problem nobody has, with total confidence.
// One sentence, one app, one uselessness.
// Gate (RULES.txt): output 1-240 chars, single line, non-whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "SockMatch uses AI and Bluetooth to pair your socks after every wash, so you will never again waste three seconds finding a matching pair all by yourself.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")), { recursive: true });
writeFileSync(out, PITCH, "utf8");
