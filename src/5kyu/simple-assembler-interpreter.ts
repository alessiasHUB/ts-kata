/**
 * title: simple assembler interpreter
 * date: 27/10/2022
 * link: https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript
 * ==================================================================================================
 * task:
 * We want to create a simple interpreter of assembler which will support the following instructions:
 * mov x y - copies y (either a constant value or the content of a register) into register x
 * inc x - increases the content of the register x by one
 * dec x - decreases the content of the register x by one
 * jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward, 
 *  y can be a register or a constant), but only if x (a constant or a register) is not zero
 * ===================================================================================================
 * Adds together two numbers
 * @param program - an array of strings
 * @returns an object with the new position and name
 */
 function simple_assembler(program: string[]): object {
  let value = 0
	for (let directions of program) {
    let begin = directions.split(' ')
    if (begin[0] === "mov") {
      value = parseInt(begin[2])
    }
    if (begin[0] === "inc") {
      value += 1
    }
    if (begin[0] === "dec") {

    }
    if (begin[0] === "jnz") {

    }
  }
	return {}
}

export default simple_assembler;
