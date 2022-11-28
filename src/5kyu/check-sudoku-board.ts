/**
 * title: Did I Finish my Sudoku?
 * date: 28/11/2022
 * link: https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript
 * ============================================================
 * task:
 * Write a function done_or_not/DoneOrNot passing a board
 * (list[list_lines]) as parameter. If the board is valid
 * return 'Finished!', otherwise return 'Try again!'
 * ============================================================
 * Checks if game is finished or not
 * @param board - the sudoku board
 * @returns the answer - 'Try again!' || 'Finished!'
 */
function doneOrNot(board: number[][]): "Try again!" | "Finished!" {
  // checks rows
  for (let i = 0; i < board.length; i++) {
    if (new Set(board[i]).size !== board[i].length) {
      return "Try again!";
    }
  }
  // checks collumns
  const collumns = [];
  for (let i = 0; i < board.length; i++) {
    collumns.push(board.map((el) => el[i]));
  }
  for (let i = 0; i < collumns.length; i++) {
    if (new Set(collumns[i]).size !== collumns[i].length) {
      return "Try again!";
    }
  }
  // make square structure
  const squareThrees = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length - 2; j += 3) {
      squareThrees.push(board[i].slice(j, j + 3));
    }
  }
  const squares = [];
  for (let i = 0; i < 3; i++) {
    let sq = squareThrees[i].concat(squareThrees[i + 3]);
    squares.push(sq.concat(squareThrees[i + 6]));
  }
  for (let i = 9; i < 12; i++) {
    let sq = squareThrees[i].concat(squareThrees[i + 3]);
    squares.push(sq.concat(squareThrees[i + 6]));
  }
  for (let i = 18; i < 21; i++) {
    let sq = squareThrees[i].concat(squareThrees[i + 3]);
    squares.push(sq.concat(squareThrees[i + 6]));
  }
  // checks squares NOT DONE
  for (let i = 0; i < squares.length; i++) {
    if (new Set(squares[i]).size !== squares[i].length) {
      return "Try again!";
    }
  }
  return "Finished!";
}

export default doneOrNot;
