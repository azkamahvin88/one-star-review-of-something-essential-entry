// One-Star Review of Something Essential
// make.fun bounty u-0xb3e689-one-star-review-of-something-essential-c7234629
//
// The entry is a single deadpan one-star review, one line, at most 160
// characters, of an everyday essential everyone relies on. The program is
// fully deterministic: no network, no model calls, no randomness. It writes
// exactly the review to /output/entry.txt, and refuses to write anything
// that would fail the competition's gate (UTF-8, 1-160 characters, one
// single line, not only whitespace).

import { mkdirSync, writeFileSync } from "node:fs";

// The review: a real complaint, filed in earnest, against a thing that
// cannot be fixed. The sting lands in the last few words.
const review =
  "One star. The sun has been running for four billion years and still has no dimmer switch.";

// Gate self-check: mirror the sealed scorer's rules before writing.
const MAX_CHARS = 160;
if (review.length === 0 || review.length > MAX_CHARS) {
  throw new Error(
    `Review is ${review.length} characters, outside the 1-${MAX_CHARS} range.`,
  );
}
if (review.trim().length === 0) {
  throw new Error("Review must not be only whitespace.");
}
if (review.includes("\n") || review.includes("\r")) {
  throw new Error("Review must be a single line.");
}

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, review + "\n", "utf8");

console.log(`Wrote ${review.length} characters to ${outputPath}`);
console.log(review);
