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
 * @param BoardState
 * @returns WinStatus
 */

// defining types
interface WinStatus {
  status:
    | "there was a draw"
    | "the game has not been finished yet"
    | "x won"
    | "o won";
}
type Player = "x" | "o" | " ";
type BoardState = [
  [Player, Player, Player],
  [Player, Player, Player],
  [Player, Player, Player]
];

function calcWinState(boardState: BoardState): WinStatus {
  let result: string[] = [];

  // winning states
  if (
    boardState[0][0] == boardState[0][1] &&
    boardState[0][0] == boardState[0][2]
  ) {
    result.push(boardState[0][0]);
  }
  if (
    boardState[0][0] == boardState[0 + 1][1] &&
    boardState[0 + 1][0] == boardState[0 + 2][2]
  ) {
    result.push(boardState[0][0]);
  }
  if (
    boardState[0 + 2][2] == boardState[0 + 1][1] &&
    boardState[0 + 2][2] == boardState[0][0]
  ) {
    result.push(boardState[0 + 2][2]);
  }
  if (
    boardState[0][0] == boardState[0 + 1][0] &&
    boardState[0][0] == boardState[0 + 2][0]
  ) {
    result.push(boardState[0][0]);
  }
  if (
    boardState[0][1] == boardState[0 + 1][1] &&
    boardState[0][1] == boardState[0 + 2][1]
  ) {
    result.push(boardState[0][1]);
  }
  if (
    boardState[0][2] == boardState[0 + 1][2] &&
    boardState[0][2] == boardState[0 + 2][2]
  ) {
    result.push(boardState[0][2]);
  }

  // if game is not finished
  if (result.length == 0) {
    for (let i = 0; i < 3; i++) {
      if (boardState[i].includes(" ")) {
        return { status: "the game has not been finished yet" };
      }
    }
  }

  // draw scenario
  if (result.length == 0 || (result.length == 2 && result[0] != result[1])) {
    return { status: "there was a draw" };
  }

  // win scenarios
  if (result.length == 1) {
    if (result[0] == "x") {
      return { status: "x won" };
    } else {
      return { status: "o won" };
    }
  } else if (result.length > 1 && result[0] == result[1]) {
    if (result[0] == "x") {
      return { status: "x won" };
    } else {
      return { status: "o won" };
    }
  }
  return { status: "the game has not been finished yet" };
}

export default calcWinState;
