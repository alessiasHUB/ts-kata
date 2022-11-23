import calcWinState from "./tic-tac-toe";

// delete the ".skip"
test.skip("testing", () => {
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
      ["x", "x", "o"],
      ["o", "o", "x"],
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
      ["o", "x", "o"],
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
