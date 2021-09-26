import { thumbWar } from "../../thumb-war";
import { utils } from "../../utils";

test("returns winner", () => {
  jest.spyOn(utils, "getWinner");
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar("Kent C. Dodds", "Ken wheeler");

  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken wheeler"],
    ["Kent C. Dodds", "Ken wheeler"],
  ]);

  utils.getWinner.mockRestore();
});
