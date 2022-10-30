import simple_assembler from "./simple-assembler-interpreter";

test("with only one key", () => {
  expect(simple_assembler(["mov a 5","dec a"])).toEqual({'a': 4});
});

test("with two keys", () => {
  expect(simple_assembler(['mov a -10','mov b a','inc a','dec b','jnz a -2'])).toEqual({'a': 0, 'b': -20});
});
