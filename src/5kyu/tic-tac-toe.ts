/**
 * title: TicTacToe
 * date: 21/11/2022
 * link: -
 * ============================================================
 * task:
 * # Detect wins in TicTacToe
 * Write a function calcWinState to take a representation of
 * a tictactoe (noughts and crosses) board ( `BoardState`) and
 * return the status (WinStatus): either
 * - there was a draw;
 * - or the game has not been finished yet;
 * - or a player won (indicate the winning player)
 * Assume all input board states are legal (e.g. no board has
 * winning rows by BOTH players).
 * Assume, for simplicity, that type Player = "x" | "o"
 * ============================================================
 * Detect wins in TicTacToe
 * @param board of type BoardState
 * @returns WinState
 */

// defining types
type Player = "X" | "O";
type PosState = Player | "";
type BoardState = [
  PosState,
  PosState,
  PosState,
  PosState,
  PosState,
  PosState,
  PosState,
  PosState,
  PosState
];
type PosIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type Line = [PosIndex, PosIndex, PosIndex];
type WinState =
  | { state: "draw" }
  | { state: "not finished" }
  | { state: "won"; winner: Player };

// returns true if all three are the same PosState("X" | "O" | "")
// used in function: winningLine
function allSame(a: PosState, b: PosState, c: PosState): boolean {
  return a === b && b === c;
}

// returns who the winner is: "X" | "O" | ""
function winningLine(board: BoardState, allSame: Function): PosState | boolean {
  const lines: Line[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    if (
      allSame(board[lines[i][0]], board[lines[i][1]], board[lines[i][2]]) &&
      board[lines[i][0]] !== ""
    ) {
      return board[lines[i][0]];
    }
  }
  return false;
}

// returns who the winner is
function getWinner(board: BoardState, winningLine: Function): Player {
  if (winningLine(board, allSame) === "X") {
    return "X";
  } else {
    return "O";
  }
  return "X";
}

// returns 'true' if the board has no "" (use after checking for winners)
function fullBoard(board: BoardState): boolean {
  return !board.some((el) => el === "");
}

export function calcWinState(board: BoardState): WinState {
  if (winningLine(board, allSame)) {
    return { state: "won", winner: getWinner(board, winningLine) };
  } else if (fullBoard(board)) {
    return { state: "draw" };
  } else {
    return { state: "not finished" };
  }
}

export default calcWinState;
