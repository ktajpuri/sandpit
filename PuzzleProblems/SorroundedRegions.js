/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:
input 2
[
  ["O","X","X","O","X"],
  ["X","O","O","X","O"],
  ["X","O","X","O","X"],
  ["O","X","O","O","O"],
  ["X","X","O","X","O"]
];

expected
[
  ["O","X","X","O","X"],
  ["X","X","X","X","O"],
  ["X","X","X","O","X"],
  ["O","X","O","O","O"],
  ["X","X","O","X","O"]
]

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border
of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not 
connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they
are adjacent cells connected horizontally or vertically.

*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  if (!board.length) return;

  // change every square connected to left and right borders from O to temporary #
  for (let i = 0; i < board.length; i++) {
    mark(board, i, 0);
    mark(board, i, board[0].length - 1);
  }

  // change every square connected to top and bottom borders from O to temporary #
  for (let i = 1; i < board[0].length - 1; i++) {
    mark(board, 0, i);
    mark(board, board.length - 1, i);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // change the rest of O to X
      if (board[i][j] === 'O') board[i][j] = 'X';

      // change temporary # back to O
      if (board[i][j] === '#') board[i][j] = 'O';
    }
  }
  return board;
}

function mark(board, i ,j) {
  if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) return;
  if (board[i][j] !== 'O') return;

  board[i][j] = '#';
  
  mark(board, i - 1, j);
  mark(board, i + 1, j);
  mark(board, i, j - 1);
  mark(board, i, j + 1);
}

const input = [
  ["O","O","O"],
  ["O","O","O"],
  ["O","O","O"]
];
// const input = [
// ['X','X','X','X'],
// ['X','O','O','X'],
// ['X','X','O','X'],
// ['X','O','X','X'],
// ];

// const input = [
//   ["O","X","X","O","X"],
//   ["X","O","O","X","O"],
//   ["X","O","X","O","X"],
//   ["O","X","O","O","O"],
//   ["X","X","O","X","O"]
// ];
console.log(solve(input));