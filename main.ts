// The Houseplant Out-of-Office — u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// Writes one out-of-office auto-reply, as if written by the office fern,
// to /output/entry.txt. The reply is a fixed literal string, so the program
// is deterministic and writes exactly the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office: I'm the fern, unwatered since March. " +
  "I'm now 90% crisp. Please email the cactus; he thrives on neglect.";

// The gate requires 1 to 120 characters of UTF-8 text. Fail loudly
// instead of writing an entry the scorer would refuse.
if (entry.length < 1 || entry.length > 120) {
  throw new Error(`entry is ${entry.length} characters, must be 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
