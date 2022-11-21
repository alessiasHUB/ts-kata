import calcWinState from "./tic-tac-toe";

// delete the ".skip"
test("testing", () => {
  expect(
    calcWinState([
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["x", "x", "o"],
    ])
  ).toEqual({ status: "x won" });
  expect(
    calcWinState([
      ["x", "o", "x"],
      ["o", "o", "x"],
      ["x", "o", "o"],
    ])
  ).toEqual({ status: "o won" });
  expect(
    calcWinState([
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["x", "o", "o"],
    ])
  ).toEqual({ status: "there was a draw" });
  expect(
    calcWinState([
      ["x", "o", "x"],
      ["x", "o", "o"],
      [" ", " ", "o"],
    ])
  ).toEqual({ status: "the game has not been finished yet" });
});
