/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const counts = {};
  domains.forEach((domain) => {
    domain.split('.').reverse().forEach((domain2, index, arr) => {
      const key = `.${arr.slice(0, index + 1).join('.')}`;
      if (!counts[key]) {
        counts[key] = 1;
      } else {
        counts[key]++;
      }
    });
  });
  return counts;
}

module.exports = getDNSStats;
