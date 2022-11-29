import calcWinState from "./tic-tac-toe-app";

// delete the ".skip"
test.skip("testing", () => {
  expect(calcWinState(["X", "O", "X", "X", "O", "O", "X", "X", "O"])).toEqual({
    state: "won",
    winner: "X",
  });
  expect(calcWinState(["X", "O", "X", "X", "", "O", "", "X", "O"])).toEqual({
    state: "not finished",
  });
  expect(calcWinState(["O", "X", "", "O", "X", "O", "O", "", "X"])).toEqual({
    state: "won",
    winner: "O",
  });
});
