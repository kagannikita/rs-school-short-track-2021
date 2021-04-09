/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ArrWithMinusOne = [];
  const ArrResult = [];

  for (let i = 0; i < arr.length; i++) {
    ArrResult.push(arr[i]);
    if (arr[i] !== -1) {
      ArrWithMinusOne.push(arr[i]);
    }
  }

  ArrWithMinusOne.sort((a, b) => b - a);

  for (let i = 0; i < ArrResult.length; i++) {
    if (ArrResult[i] !== -1) {
      ArrResult[i] = ArrWithMinusOne.pop();
    }
  }

  return ArrResult;
}
module.exports = sortByHeight;
