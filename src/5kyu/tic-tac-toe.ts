/**
 * title: Tic-Tac-Toe Checker
 * date: 29/11/2022
 * link: https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript
 * ============================================================
 * task:
 * If we were to set up a Tic-Tac-Toe game, we would want to
 * know whether the board's current state is solved, wouldn't
 * we? Our goal is to create a function that will check that
 * for us!
 * Assume that the board comes in the form of a 3x3 array,
 * where the value is 0 if a spot is empty, 1 if it is an "X",
 * or 2 if it is an "O", like so:
 * [[0, 0, 1],
 *  [0, 1, 2],
 *  [2, 1, 0]]
 * We want our function to return:
 * -1 if the board is not yet finished AND no one has won yet
 *   (there are empty spots),
 * 1 if "X" won,
 * 2 if "O" won,
 * 0 if it's a cat's game (i.e. a draw).
 * You may assume that the board passed in is valid in the
 * context of a game of Tic-Tac-Toe.
 * ============================================================
 * checks a game of tic tac toe
 * @param board - the game board
 * @returs the state of the board
 */
function isSolved(board: number[][]): number {
  // rows
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] === 0) {
        return -1;
      } else if (board[i][0] === 1) {
        return 1;
      } else if (board[i][0] === 2) {
        return 2;
      }
    }
  }
  // columns
  const columns = [
    board.map((x) => x[0]),
    board.map((x) => x[1]),
    board.map((x) => x[2]),
  ];
  for (let i = 0; i < columns.length; i++) {
    if (columns[i][0] === columns[i][1] && columns[i][1] === columns[i][2]) {
      if (columns[i][0] === 0) {
        return -1;
      } else if (columns[i][0] === 1) {
        return 1;
      } else if (columns[i][0] === 2) {
        return 2;
      }
    }
  }
  // diagonal
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    if (board[0][0] === 0) {
      return -1;
    } else if (board[0][0] === 1) {
      return 1;
    } else if (board[0][0] === 2) {
      return 2;
    }
  } else if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    if (board[0][2] === 0) {
      return -1;
    } else if (board[0][2] === 1) {
      return 1;
    } else if (board[0][2] === 2) {
      return 2;
    }
  }
  // not finished or draw
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes(0)) {
      return -1;
    }
  }
  return 0;
}

export default isSolved;
