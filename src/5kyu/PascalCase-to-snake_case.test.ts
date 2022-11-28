import toUnderscore from "./PascalCase-to-snake_case";

// delete the ".skip"
test.skip("takes a string in PascalCase and converts it to snake_case", () => {
  expect(toUnderscore("PascalCase")).toEqual("pascal_case");
  expect(toUnderscore("PascalLooksNice")).toEqual("pascal_looks_nice");
  expect(toUnderscore(5)).toEqual("5");
});
