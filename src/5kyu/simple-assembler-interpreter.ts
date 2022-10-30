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
  let myOb :any = {}
  let count = -1
	for (let i=0; i<program.length; i++) {
    count += 1
    let begin : any = program[i].split(' ')
    if (begin[0] === "mov" ) {
      if (/[0-9]/.test(begin) === true){
        myOb[begin[1]] = parseInt(begin[2])
      } else if (/[0-9]/.test(begin) === false){
        myOb[begin[1]] = myOb[begin[2]]
      }
    }
    if (begin[0] === "inc") {
      myOb[begin[1]] += 1
    }
    if (begin[0] === "dec") {
      myOb[begin[1]] -= 1
    }
    if (begin[0] === "jnz") {
      if (myOb[begin[1]] !== 0){
        if (parseInt(begin[2])<0) {
          count += parseInt(begin[2]) - 1
          i = count
          console.log(count)
        } else if (parseInt(begin[2])>0) {
            myOb[begin[1]] = 0
            count += parseInt(begin[2])
            i = count
        }
      } else if (myOb[begin[1]] === 0) {
        console.log("empty")
      }
    }
  }
	return myOb
}

export default simple_assembler;
