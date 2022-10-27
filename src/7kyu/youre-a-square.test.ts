import isSquare from "./youre-a-square";

test("true positive number", () => {
  expect(isSquare(4)).toStrictEqual(true);
});

test("negative number", () => {
  expect(isSquare(-1)).toStrictEqual(false);
});

test("zero to be true", () => {
  expect(isSquare(0)).toStrictEqual(true);
});

test("positive uneven", () => {
  expect(isSquare(3)).toStrictEqual(false);
});

test("large true", () => {
  expect(isSquare(25)).toStrictEqual(true);
});