"use strict";

///////////////////////////////////////////////////////////////////////////
function lineCheck(board, rl, cl, rMove, cMove, color, d) {
  let row = rMove + d[0],
    col = cMove + d[1],
    length = 1;

  while (row >= 0 && col >= 0 && row < rl && col < cl) {
    length++;

    if (board[row][col] === ".") return false;
    else if (board[row][col] === color) return length >= 3;

    (row += d[0]), (col += d[1]);
  }
  return false;
}

const checkMove = function (board, rMove, cMove, color) {
  let rl = board.length;
  let cl = board[0].length;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ];
  for (let d of directions)
    if (lineCheck(board, rl, cl, rMove, cMove, color, d)) return true;

  return false;
};

console.log(
  checkMove(
    [
      [".", ".", ".", "B", ".", ".", ".", "."],
      [".", ".", ".", "W", ".", ".", ".", "."],
      [".", ".", ".", "W", ".", ".", ".", "."],
      [".", ".", ".", "W", ".", ".", ".", "."],
      ["W", "B", "B", ".", "W", "W", "W", "B"],
      [".", ".", ".", "B", ".", ".", ".", "."],
      [".", ".", ".", "B", ".", ".", ".", "."],
      [".", ".", ".", "W", ".", ".", ".", "."],
    ],
    4,
    3,
    "B"
  )
);
///////////////////////////////////////////////////////////////////////////

const makeFancyString = function (s) {
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1] && s[i + 1] === s[i + 2]) {
      s[i] = "";
    }
  }
  return s.join("");
};

console.log(makeFancyString("leeetcode"));
