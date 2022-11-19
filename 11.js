let nums = [
  [1, 1, 1, 1, 1],
  [1, 9, 9, 9, 1],
  [1, 9, 1, 9, 1],
  [1, 9, 9, 9, 1],
  [1, 1, 1, 1, 1],
]

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums[0].length; j++) {
    nums[i][j]++
  }
}
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums[0].length; j++) {
    if (nums[i][j] > 9) {
      // for (let k = i - 1; k <= i + 1; k++) {
      //   for (let l = j - 1; l <= j + 1; j++) {
      //     if (k >= 0 && l >= 0 && k < nums.length && k < nums[0].length) {
      //       nums[k][l]++
      //     }
      //   }
      // }
      
      nums[i][j] = 0
    }
  }
}

console.log(nums)