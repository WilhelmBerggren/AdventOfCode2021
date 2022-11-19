const fs = require("fs");

let nums = [
  [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
  [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
  [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
  [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
  [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
]
// let nums = fs
//   .readFileSync("./9.txt")
//   .toString()
//   .split("\n")
//   .map(line => line.split('').map(n => parseInt(n)))

let l = nums[0].length
let h = nums.length

const getNeighbours = (i, j) => {
  let top = j == 0 ? 10 : nums[i][j-1]
  let bottom = j == l - 1 ? 10 : nums[i][j+1]
  let left = i == 0 ? 10 : nums[i-1][j]
  let right = i == h - 1 ? 10 : nums[i+1][j]
  return [top, bottom, left, right]
}

let lows = []
for (let i = 0; i < h; i++) {
  for (let j = 0; j < l; j++) {
    let n = nums[i][j]
    let [top, bottom, left, right] = getNeighbours(i, j)
    let low = n < top && n < bottom && n < left && n < right
    if (low) lows.push([i, j])
  }
}

console.log(lows.reduce((acc, [i, j]) => acc + nums[i][j] + 1, 0))