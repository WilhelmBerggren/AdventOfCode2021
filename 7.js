const fs = require("fs");

const input = fs
  .readFileSync("./7.txt")
  .toString()
  .split(",")
  .map(s => parseInt(s))
  .sort()

const sample = [16,1,2,0,4,2,7,1,2,14]

let part1 = Number.MAX_SAFE_INTEGER
let part2 = Number.MAX_SAFE_INTEGER
for (let i of [...Array(Math.max(...input)).keys()]) {
  let part1Sum = 0
  let part2Sum = 0
  for (let j of input) {
    part1Sum += Math.abs(i - j)
    let fuel = 0
    for (let k = 1; k <= Math.abs(i - j); k++) {
      fuel += k
    }
    part2Sum += fuel
  }
  if (part1Sum < part1) {
    part1 = part1Sum
  }
  if (part2Sum < part2) {
    part2 = part2Sum
  }
}
console.log(part1, part2)