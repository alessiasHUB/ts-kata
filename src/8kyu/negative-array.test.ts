import negArray from "./negative-array";

// delete the ".skip"
test.skip("only positive values", () => {
  expect(negArray([4, 8, 4, 9])).toStrictEqual([]);
});

test.skip("negative values", () => {
  expect(negArray([-4, 6, -1, 9])).toStrictEqual([-4, -1]);
});

test.skip("decimals and zero", () => {
  expect(negArray([4.5, -1, -0.5, 0])).toStrictEqual([-1, -0.5]);
});
