const fs = require("fs");

let input = fs
  .readFileSync("./14.txt")
  .toString()

let sample = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`

let template = input.split("\n\n")[0]
console.log(template)

let step = template => {
  for (let i = 0; i < template.length - 1; i++) {
    let tPair = template.substring(i, i + 2)
    let t = template
    for (let line of input.split("\n\n")[1].split("\n")) {
      let [pair, elem] = line.split(" -> ")
      if (tPair == pair) {
        t = template.substring(0, i + 1) + elem + template.substring(i + 1)
        i++
        // console.log(i, elem, pair)
      }
    }
    template = t
  }
  return template
}

let i = 0
while (i < 40) {
  i++
  console.log(i, template.length)
  template = step(template)
}

let freq = template.split("").reduce((obj, c) => {
  if (obj[c]) {
    obj[c]++
  } else {
    obj[c] = 1
  }
  return obj
}, {})

console.log(freq)

let sorted = Object.entries(freq).sort((a, b) => a[1] - b[1])

console.log(sorted, sorted[sorted.length - 1][1] - sorted[0][1])