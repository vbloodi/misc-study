module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  const sortedConfig = bracketsConfig.map((item) => item.join(''));

  while (str) {
    for (i = 0; i < sortedConfig.length; i++) {
      str = str.replaceAll(sortedConfig[i], '');
    }
    if (str && sortedConfig.every((item) => !str.includes(item))) {
      return false;
    }
  }

  return !str;
};

const brackets = String(bracketsConfig).replaceAll(',', '');
if (str.length % 2 !== 0) return false;
for (i = 0; i < brackets.length; i += 2) {
  while (
    str.includes(brackets[i] + brackets[i + 1]) ||
    str.includes(brackets[i + 2] + brackets[i + 3]) ||
    str.includes(brackets[i + 4] + brackets[i + 5]) ||
    str.includes(
      brackets[i + 6] + brackets[i + 7] ||
        str.includes(brackets[i + 8] + brackets[i + 9])
    )
  ) {
    str = str
      .replace(brackets[i] + brackets[i + 1], '')
      .replace(brackets[i + 2] + brackets[i + 3], '')
      .replace(brackets[i + 4] + brackets[i + 5], '')
      .replace(brackets[i + 6] + brackets[i + 7], '')
      .replace(brackets[i + 8] + brackets[i + 9], '');
  }
}
return !str;
