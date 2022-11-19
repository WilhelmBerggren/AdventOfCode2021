const sample = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2` 

const coords = sample
  .split("\n")
  .map(row => row
    .split(" -> ")
    .map(s => s
      .split(",")
      .map(n => parseInt(n))))

const straightLine = ([[x1, y1], [x2, y2]]) => {
  const stepX = x1 > x2 ? 1 : -1
  const stepY = y1 > y2 ? 1 : -1
  // const startX = 

  for (let x = x1; x != x2; x = x + stepX) {
    for (let y = y1; y != y2; y = y + stepY) {
      console.log(x, y)
    }
  }
}
straightLine(coords[0])
// const slopes = coords.map(([[x1, y1], [x2, y2]]) => (y2 - y1) / (x2 - x1))
// console.log(slopes)
// const maxN = Math.ceil(Math.max(...lines.flat(2)))
// console.log(lines)
// const hits = Array.from({ length: maxN }, () => Array.from({ length: maxN }, () => 0))
// const 
// const mark = ([[x1, y1], [x2, y2]]) => {
//   console.log(x1, x2, y1, y2)
//   for (let i = x1; i < x2; i++) {
//     for (let j = y1; i < y2; i++) {
//       hits[i][j] += 1
//       console.log(i, j, hits[i][j])
//     }
//   }
// }

// lines.forEach(mark)

// console.log(hits)
