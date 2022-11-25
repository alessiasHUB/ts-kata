import isAnagram from "./is-anagram";

// delete the ".skip"
test.skip("testing string if it is an anagram of the other", () => {
  expect(isAnagram("hello", "olleh")).toBe(true);
});
