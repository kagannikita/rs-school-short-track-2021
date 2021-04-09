/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = (`${n}`).split('').map(Number);
  return Number(arr.filter((_, i) => i !== arr.indexOf(Math.min(...arr))).join(''));
}

module.exports = deleteDigit;
