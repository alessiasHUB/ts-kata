import multipleof3Regex from "./binary-multiple-of-3";

// delete the ".skip"
test.skip("checks if the string (binary) is a miltiple of 3", () => {
  expect(multipleof3Regex("000")).toStrictEqual(true);
  expect(multipleof3Regex("001")).toStrictEqual(false);
  expect(multipleof3Regex("011")).toStrictEqual(true);
  expect(multipleof3Regex("abc")).toStrictEqual(false);
});
