import isSolved from "./tic-tac-toe";

// delete the ".skip"
test("checking the game board status", () => {
  expect(
    isSolved([
      [0, 0, 1],
      [0, 1, 2],
      [2, 1, 0],
    ])
  ).toStrictEqual(-1);
});
