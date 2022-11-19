let step = space => {
  let turns = 0
  let score = 0
  let dice = 1
  while (score < 1000) {
    let rolls = (dice * 3) + 3
    turns++
    score += rolls
    space = (space + rolls) % 10 + 1
    console.log({turns, score, dice, space})
    dice += 3
  }
  return score
}

step(4)