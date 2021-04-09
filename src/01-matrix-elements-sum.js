/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {{main: number, second: number}}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const skip = [];
  let sum = 0;

  matrix.forEach((row) => {
    row.forEach((item, pos) => {
      if (item === 0) {
        skip.push(pos);
      }
      if (!skip.includes(pos)) {
        sum += item;
      }
    });
  });
  return sum;
}
const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];
getMatrixElementsSum(matrix);
module.exports = getMatrixElementsSum;
