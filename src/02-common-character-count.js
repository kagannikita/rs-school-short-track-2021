/**
 * Given two strings, find the number of common characters between them.
 *
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let Locals2 = s2;

  return s1.split('').reduce((commonCount, symbol) => {
    let commonCountLocal = commonCount;
    if (Locals2.includes(symbol)) {
      Locals2 = Locals2.replace(symbol, '');
      commonCountLocal++;
    }
    return commonCountLocal;
  }, 0);
}

module.exports = getCommonCharacterCount;
