/**
 * Given a string, return its encoding version.
 *
 * @return {void}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) ++count;
    else if (count >= 2) {
      result += count + str[i];
      count = 1;
    } else {
      result += str[i];
      count = 1;
    }
  }

  return result;
}

module.exports = encodeLine;
