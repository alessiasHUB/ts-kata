import getMostCommonLetters from "./get-most-common-letters";

// delete the ".skip"
test.skip("", () => {
  expect(getMostCommonLetters("HELLO WORLDE", 3)).toEqual([[ "L", 3 ],[ "E", 2 ],[ "O", 2 ]]);
});
