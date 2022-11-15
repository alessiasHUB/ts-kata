import isAnagram from "./is-anagram";

// delete the ".skip"
test("test discription", () => {
  expect(isAnagram("hello", "olleh")).toBe(true);
});
