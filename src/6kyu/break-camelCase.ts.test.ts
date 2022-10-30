import breakCamelCase from "./break-camelCase";

// delete the ".skip"
test.skip("breaks camelCase", () => {
  expect(breakCamelCase("camelCasing")).toBe("camel Casing");
});
test.skip("breaks camelCase", () => {
  expect(breakCamelCase("camelCasingTest")).toBe("camel Casing Test");
});
