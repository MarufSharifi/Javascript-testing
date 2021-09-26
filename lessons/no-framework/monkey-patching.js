import assert from "assert";
import { thumbWar } from "../../thumb-war.js";
import { utils } from "../../utils.js";

const originalGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Kent C. Dodds", "Ken wheeler");

assert.strictEqual(winner, "Kent C. Dodds");

utils.getWinner = originalGetWinner;
