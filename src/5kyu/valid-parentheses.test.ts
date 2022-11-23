import validParentheses from "./valid-parentheses";

// delete the ".skip"
test.skip("testing if strings are valid", () => {
  expect(validParentheses("()")).toBe(true);
  expect(validParentheses(")(()))")).toBe(false);
  expect(validParentheses("(")).toBe(false);
  expect(validParentheses("()")).toBe(true);
  expect(validParentheses("(())((()())())")).toBe(true);
});
