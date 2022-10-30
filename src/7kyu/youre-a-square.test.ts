import isSquare from "./youre-a-square";

// delete the ".skip"
test.skip("true positive number", () => {
  expect(isSquare(4)).toStrictEqual(true);
});

test.skip("negative number", () => {
  expect(isSquare(-1)).toStrictEqual(false);
});

test.skip("zero to be true", () => {
  expect(isSquare(0)).toStrictEqual(true);
});

test.skip("positive uneven", () => {
  expect(isSquare(3)).toStrictEqual(false);
});

test.skip("large true", () => {
  expect(isSquare(25)).toStrictEqual(true);
});