import breakCamelCase from "./break-camelCase";

test("breaks camelCase", () => {
  expect(breakCamelCase("camelCasing")).toBe("camel Casing");
});
test("breaks camelCase", () => {
  expect(breakCamelCase("camelCasingTest")).toBe("camel Casing Test");
});
