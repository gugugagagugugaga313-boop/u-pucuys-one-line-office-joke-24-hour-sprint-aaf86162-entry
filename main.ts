// One-Line Office Joke: 24-Hour Sprint
// Writes a single one-line joke about office life to /output/entry.txt.
// Deterministic: the same fixed text on every run, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "We took it offline, which turned out to be a second meeting about the first meeting, with worse chairs.";

// No trailing newline: the file is exactly the joke, so its size is the
// joke's size and the gate counts exactly the characters shown above.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
