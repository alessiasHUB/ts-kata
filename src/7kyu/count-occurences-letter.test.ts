import countOccurrences from "./count-occurences-letter";

// delete the ".skip"
test.skip("checking strings", () => {
  expect(countOccurrences('HELLO')).toEqual({E: 1, O: 1, H: 1, L: 2});
  expect(countOccurrences('Hello')).toEqual({e: 1, o: 1, H: 1, l: 2});
  expect(countOccurrences('HELLO THERE')).toEqual({E: 3, O: 1, H: 2, L: 2, T:1, R:1});
});
