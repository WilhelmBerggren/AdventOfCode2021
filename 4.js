const fs = require("fs");

const text = fs
  .readFileSync("./4.txt")
  .toString()
  .split("\n\n")

const answers = text[0]
  .split(",")
  .map(c => parseInt(c))

const boards = text
  .slice(1)
  .map(board => board
    .split("\n")
    .map(line => line
      .split(" ")
      .filter(c => !!c)
      .map(c => parseInt(c))))

const rowMatch = board => board
  .map(row => row
    .filter(c => c == null)
    .length == row.length)
  .filter(row => row).length > 0

const columnMatch = board => rowMatch(board
  .map((_, index) => board
    .map(row => row[index])))

const mark = (board, ans) => board
  .map(row => row
    .map(c => c === ans ? null : c))

const findAnswer = startingBoards => {
  let boards = startingBoards
  let completed = []
  answers.forEach(ans => {
    boards = boards.map(board => board && mark(board, ans))
    boards.forEach((board, i) => {
      if (board && (rowMatch(board) || columnMatch(board))) {
        completed.push(ans * board
          .reduce((acc, row) => acc + row
          .reduce((sum, c) => sum + c, 0), 0))
        boards[i] = null
      }
    })
  })
  return completed
}

console.log(findAnswer(boards))
