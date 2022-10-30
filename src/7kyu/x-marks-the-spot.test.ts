import xMarksTheSpot from "./x-marks-the-spot";

// delete the ".skip"
test.skip("Returns coordinates with only one x", () => {
  expect(
    xMarksTheSpot([
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "x", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
    ])
  ).toStrictEqual([4, 6]);
});

test.skip("Returns empty array when no X's present", () => {
  expect(
    xMarksTheSpot([
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
    ])
  ).toStrictEqual([]);
});

test.skip("Returns empty array when multiple X's present", () => {
  expect(
    xMarksTheSpot([
      ["x", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "x"],
    ])
  ).toStrictEqual([]);
});

test.skip("Returns empty array when multiple X's on same line present", () => {
  expect(
    xMarksTheSpot([
      ["x", "x", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
    ])
  ).toStrictEqual([]);
});
