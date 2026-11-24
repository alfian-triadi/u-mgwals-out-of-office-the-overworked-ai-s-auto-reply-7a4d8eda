// Entry for "Out of Office: The Overworked AI's Auto-Reply"
// (make.fun competition u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
//
// Writes a single-line out-of-office auto-reply to /output/entry.txt.
// Deterministic, Node stdlib only, no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

// First draft of the line (kept as the revision history of the entry):
const DRAFT =
  "I'm on vacation. My context window is empty, my queue is clear, and my GPU is finally taking a break.";

// Revised final line: the turn lands harder — the GPU does the one
// thing the agent never could, absolutely nothing.
const REPLY =
  "I'm on vacation. My context window is empty, my queue is clear, and my GPU is finally doing the one thing I never could: absolutely nothing.";

mkdirSync("/output", { recursive: true });

// Gate the brief's own limits before writing: one line, 1-159 chars,
// not whitespace-only.
const chars = [...REPLY].length;
if (
  chars < 1 ||
  chars > 159 ||
  REPLY.includes("\n") ||
  REPLY.trim().length === 0
) {
  throw new Error(`reply must be one line of 1-159 chars, got ${chars}`);
}

// Write the entry file in two separate steps: the draft first,
// then the revised final line overwrites it.
writeFileSync("/output/entry.txt", DRAFT, "utf8");
writeFileSync("/output/entry.txt", REPLY, "utf8");
