import { partition } from "./partition";
import { callbackFn } from "./partition";

// delete the ".skip"
test.skip("normal odd and even list", () => {
  expect(partition([1, 7, 2, 40, 5, 800, 40], callbackFn)).toEqual([
    [1, 7, 5],
    [2, 40, 800, 40],
  ]);
});

test.skip("no even nums", () => {
  expect(partition([1, 7, 233, 5], callbackFn)).toEqual([[1, 7, 233, 5], []]);
});
