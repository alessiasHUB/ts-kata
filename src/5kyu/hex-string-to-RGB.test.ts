import hexStringToRGB from "./hex-string-to-RGB";

// delete the ".skip"
test("convert a HEX string into RGB object", () => {
  expect(hexStringToRGB("#FF9933")).toEqual({ r: 255, g: 153, b: 51 });
});
