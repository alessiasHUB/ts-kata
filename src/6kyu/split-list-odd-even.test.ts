import partitionOddEven from "./split-list-odd-even";

// delete the ".skip"
test.skip("splits a list in odd and even", () => {
  expect(partitionOddEven([20, 3, 4, 5, 1, 7, 6])).toStrictEqual({
    odd: [3, 5, 1, 7],
    even: [20, 4, 6],
  });
});

test.skip("splits a list in odd and even, negative numbers", () => {
  expect(partitionOddEven([-20, 3, 4, -5, 1, 7, 6])).toStrictEqual({
    odd: [3, -5, 1, 7],
    even: [-20, 4, 6],
  });
});

test.skip("splits a list in odd and even, one number", () => {
  expect(partitionOddEven([1])).toStrictEqual({ odd: [1], even: [] });
});

test.skip("splits a list in odd and even, empty array", () => {
  expect(partitionOddEven([])).toStrictEqual({ odd: [], even: [] });
});

test.skip("splits a list in odd and even, decimals", () => {
  expect(partitionOddEven([1.5, 6])).toStrictEqual({ odd: [1.5], even: [6] });
});

test.skip("splits a list in odd and even, zeros", () => {
  expect(partitionOddEven([0, 1])).toStrictEqual({ odd: [1], even: [0] });
});
