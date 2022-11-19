const fs = require("fs");

let chars = fs
  .readFileSync("./10.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(""));

let sample = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

let pairs = {
  "<": ">",
  "{": "}",
  "(": ")",
  "[": "]",
};

let firstIllegalPoints = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

let remainingPoints = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4,
};

const score = (line) => {
  let opened = [];
  let firstIllegal;

  line.forEach(char => {
    if ([")", "]", "}", ">"].includes(char)) {
      lastOpened = opened[opened.length - 1];
      if (pairs[lastOpened] == char) {
        opened.pop();
      } else {
        if (!firstIllegal) {
          firstIllegal = char;
        }
      }
    } else {
      opened.push(char);
    }
  })

  return {
    firstIllegal,
    remaining: opened.map((c) => pairs[c]).reverse(),
  };
};

let scores = chars.map(score);
let illegals = scores.filter(s => s.firstIllegal).map(o => o.firstIllegal)
let legals = scores.filter(s => !s.firstIllegal).map(o => o.remaining)

console.log(
  illegals
    .reduce((acc, n) => acc + firstIllegalPoints[n], 0)
);
let remainingScores = legals
  .map((ar) => ar
      .map((c) => remainingPoints[c])
      .reduce((acc, n) => acc * 5 + n, 0)
  )
  .sort((a, b) => a - b);

console.log(remainingScores[Math.floor(remainingScores.length / 2)]);
