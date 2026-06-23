import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const verticals = JSON.parse(readFileSync(join(root, "verticals.json"), "utf8"));
const state = JSON.parse(readFileSync(join(root, "state.json"), "utf8"));

const nextIndex = (state.lastIndex + 1) % verticals.length;
const vertical = verticals[nextIndex];

console.log(JSON.stringify({ index: nextIndex, vertical }, null, 2));

state.lastIndex = nextIndex;
state.lastVerticalId = vertical.id;
writeFileSync(join(root, "state.json"), JSON.stringify(state, null, 2) + "\n");
