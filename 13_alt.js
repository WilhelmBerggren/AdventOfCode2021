const fs = require('fs');

const input = fs
  .readFileSync('13.txt')
  .toString()
  .split('\n')
  .filter(line => line !== '');

const foldStartIdx = input.findIndex(line => line.startsWith('fold'));
const points = input.slice(0, foldStartIdx);
const folds = input.slice(foldStartIdx);

const foldPoints = (points, fold) => {
  const instruction = fold.split(' ')[2];
  let [axis, value] = instruction.split('=');
  value = parseInt(value)

  for (const point of points) {
    let [x, y] = point.split(',').map(Number);
    let folded = false;

    if (axis === 'x' && x > value) {
      x = value - (x - value);
      folded = true;
    }

    if (axis === 'y' && y > value) {
      y = value - (y - value);
      folded = true;
    }

    if (folded) {
      points.delete(point);
      points.add(x + ',' + y);
    }
  }
};

const p1 = (points, folds) => {
  const uniquePoints = new Set(points);
  foldPoints(uniquePoints, folds[0]);
  return uniquePoints.size;
};

const p2 = (points, folds) => {
  const uniquePoints = new Set(points);

  const messageGrid = Array.from(Array(7), () => Array(4 * 8 + 7).fill(' '));

  for (const fold of folds) {
    foldPoints(uniquePoints, fold);
    // console.log(uniquePoints.size)
  }

  for (const point of uniquePoints) {
    const [x, y] = point.split(',').map(Number);
    messageGrid[y][x] = '#';
  }
  console.log(uniquePoints)
  console.log(messageGrid.map(row => row.join('')).join('\n'));

  return uniquePoints.size;
};

console.log('Part 1:', p1(points, folds));

console.log('Part 2:', p2(points, folds));