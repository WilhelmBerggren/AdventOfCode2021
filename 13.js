const fs = require("fs");

let [coords, folds] = fs
  .readFileSync("./13.txt")
  .toString()
  .split("\n\n")
  .map(txt => txt.split("\n"))

let points = new Set(coords)

let sizeAfterFold;
for (let fold of folds) {
  let [dir, n] = fold.split(" ")[2].split("=")
  for (let point of points) {
    let [x, y] = point.split(",").map(Number)
    if (dir == "x" && x > n) {
      points.add((n - (x - n)) + "," + y)
      points.delete(point)
    }
    if (dir == "y" && y > n) {
      points.add(x + "," + (n - (y - n)))
      points.delete(point)
    }
  }
  if (!sizeAfterFold) sizeAfterFold = points.size
}

console.log(sizeAfterFold)

let print = points => {
  let xs = [...points].reduce((acc, s) => [parseInt(s.split(",")[0]), ...acc], [])
  let ys = [...points].reduce((acc, s) => [parseInt(s.split(",")[1]), ...acc], [])
  console.log(Math.max(...xs), Math.max(...ys))
  let ar = Array.from(Array(Math.max(...ys) + 2), () => (Array(Math.max(...xs)).fill(' ')))
  
  for (let point of points) {
    let [x, y] = point.split(",")
    ar[y][x] = '#'
  }
  
  console.log(ar.map(line => line.join('')).join('\n'))
}

print(points)
