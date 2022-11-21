import simple_assembler from "./simple-assembler-interpreter";

test.skip("with only one key", () => {
  expect(simple_assembler(["mov a 5", "dec a"])).toEqual({ a: 4 });
});

test.skip("with two keys", () => {
  expect(
    simple_assembler(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"])
  ).toEqual({ a: 0, b: -20 });
});

test.skip("with two keys", () => {
  expect(
    simple_assembler([
      "mov a 1",
      "mov b 1",
      "mov c 0",
      "mov d 26",
      "jnz c 2",
      "jnz 1 5",
      "mov c 7",
      "inc d",
      "dec c",
      "jnz c -2",
      "mov c a",
      "inc a",
      "dec b",
      "jnz b -2",
      "mov b c",
      "dec d",
      "jnz d -6",
      "mov c 18",
      "mov d 11",
      "inc a",
      "dec d",
      "jnz d -2",
      "dec c",
      "jnz c -5",
    ])
  ).toEqual({ a: 0, b: -20 });
});
