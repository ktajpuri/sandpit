/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const input = [
  ["0", "0","1","0","0"],
  ["0", "0","1","0","0"],
  ["1", "1","1","1","1"],
  ["0", "0","1","0","0"],
  ["0", "0","1","0","1"],
];

var numIslands = function (grid) {
  let count = 0;
  grid.forEach((row, i) => {
    grid[i].forEach((ele, j) => {
      if (ele === "1") {
        count++;
        turnToZero(i, j, grid);
      }
    });
  });

  return count;
};

var turnToZero = function (row, col, grid) {
  if (row < 0 || row >= grid.length) return;
  if (col < 0 || col >= grid[0].length) return;
  if (grid[row][col] !== "1") return;
  grid[row][col] = "0"; // turn this cell to 0
  turnToZero(row, col - 1, grid); // traverse cells to the left
  turnToZero(row, col + 1, grid); // traverse cells to the right
  turnToZero(row - 1, col, grid); // traverse cells above current cell
  turnToZero(row + 1, col, grid); // traverse cells below current cell 
};


console.log(numIslands(input));

/*
Solution notes - 

This can be solved by DFS. Whenever we find a 1, increase the count by one and then recursively make all connected 1s, top left down bottom to zero. The recursive function returns if doesn't find a 1 or the indexes exceed the bounds.
*/