import markWordleGuess from "./wordle";

// delete the ".skip"
test.skip("checks the guess against correct answer", () => {
  expect(markWordleGuess("HOLAS", "HELLO")).toStrictEqual([
    "green",
    "yellow",
    "green",
    "grey",
    "grey",
  ]);
  expect(markWordleGuess("HELLO", "HOLAS")).toStrictEqual([
    "green",
    "grey",
    "green",
    "yellow",
    "yellow",
  ]);
  expect(markWordleGuess("HELLO", "HOLAS")).toStrictEqual([
    "green",
    "grey",
    "green",
    "yellow",
    "yellow",
  ]);
  expect(markWordleGuess("YLOAL", "HELLO")).toStrictEqual([
    "grey",
    "yellow",
    "yellow",
    "grey",
    "yellow",
  ]);
});
