const fs = require("fs");

const lines = fs
  .readFileSync("./2.txt")
  .toString()
  .split("\n")
  .map(line => line.split(" "))
  .map(ar => [ar[0], parseInt(ar[1])]);

const sample = [
  ["forward", 5],
  ["down", 5],
  ["forward", 8],
  ["up", 3],
  ["down", 8],
  ["forward", 2],
]

const {x, y, aim} = sample.reduce(({x, y, aim}, [dir, n]) => ({
  aim: dir == "up"      ? aim - n     : 
       dir == "down"    ? aim + n     : aim,
  x:   dir == "forward" ? x + n       : x,
  y:   dir == "forward" ? y + aim * n : y,
}), {x: 0, y: 0, aim: 0})

console.log(x * aim, x * y)
