/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let num = 0, i = 0;

  while (i < s.length) {
    switch (s[i]) {
      case 'I':
        if (s[i + 1] === 'V') {
          num += 4;
          i += 2;
        } else if (s[i + 1] === 'X'){
          num += 9;
          i += 2;
        } else {
          num += 1;
          i++
        }
        break;
      case 'X':
        if (s[i + 1] === 'L') {
          num += 40;
          i += 2;
        } else if (s[i + 1] === 'C') {
          num += 90;
          i += 2;
        } else {
          num += 10;
          i++
        }
        break;
      case 'C':
        if (s[i + 1] === 'D') {
          num += 400;
          i += 2;
        } else if (s[i + 1] === 'M') {
          num += 900;
          i += 2;
        } else {
          num += 100;
          i++
        }
        break;
      default:
        num += convertToInt(s[i]);
        i++;
    }
  }

  return num;
};

function convertToInt(r) {
  if (r === 'I') return 1;
  if (r === 'V') return 5;
  if (r === 'X') return 10;
  if (r === 'L') return 50;
  if (r === 'C') return 100;
  if (r === 'D') return 500;
  else return 1000;
}
