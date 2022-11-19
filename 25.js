let sample = `v...>>.vv>
.vv>>.vv..
>>.>v>...v
>>v>>.>.v.
v>v.vv.v..
>.>>..v...
.vv..>.>v.
v.v..>>v.v
....v..v.>`

let sample2 = `..........
.>v....v..
.......>..
..........`

let input = sample2.split("\n").map(line => line.split(""))

for (let j = 0; j < input.length; j++) {
  let line = input[j]
  for (let i = 0; i < line.length; i++) {
    if (line[i] == ">" && line[i+1] == ".") {
      line[i] = "."
      line[i + 1] = ">"
    }
  }
  if (line[9] == ">" && line[0] == ".") {
    line[0] = ">"
    line[9] = "."
  }
  for (let i = 0; i < line.length; i++) {
    if (line[i] == "v" && input[j+1]?.[i] == ".") {
      line[i] = "."
      input[j+1][i] = "v"
    }
  }

  let lastIndex = input.length - 1
  for (let i = line.length; i >= 0; --i) {
    if (input[lastIndex][i] == "v" && input[0][i] == ".") {
      input[0][i] = "."
      input[0][i] = "v"
    }
  }
  console.log(line.join(""))
}