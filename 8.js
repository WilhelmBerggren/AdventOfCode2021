const fs = require("fs");

let input = fs
.readFileSync("./8.txt")
.toString()
.split("\n")
.reduce((obj, line) => {
  let [key, val] = line.split(" | ")
  obj[key] = val
  return obj
}, {})

let sample = {
  "acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab": "cdfeb fcadb cdfeb cdbaf"
}

let count = 0
for ([key, val] of Object.entries(sample)) {
  let screen = [[], 
              [], [], 
                [], 
              [], [], 
                []]
  let words = key.split(" ")
  let one = words.find(word => word.length == 2).split("")
  let seven = words.find(word => word.length == 3).split("")
  let four = words.find(word => word.length == 4).split("")
  let eight = words.find(word => word.length == 7).split("")
  let sideA = seven.filter(i => !one.includes(i))[0]
  console.log(one, seven, four, eight, sideA)
}

console.log(count)
