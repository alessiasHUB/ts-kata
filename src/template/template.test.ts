import functionName from "./template";

// delete the ".skip"
test.skip("test discription", () => {
  expect(functionName(4, 3)).toBe(7);
});
