const fs = require("fs");

const numbers = fs
  .readFileSync("./1.txt")
  .toString()
  .split("\n")
  .map((x) => parseInt(x));

const sample = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const pt1 = ar => ar
  .map((_, i) => ar[i] < ar[i + 1])
  .filter(i=>i).length

const pt2 = ar => pt1(ar
  .map((_, i) => (ar[i] + 
                  ar[i + 1] + 
                  ar[i + 2]) || 0))

console.log(pt1(numbers));
console.log(pt2(numbers));
