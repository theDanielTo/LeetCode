/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  if (x === 0) return x;

  let reversed = '';

  if (x < 0) {
    reversed += '-';
    x *= -1;
  }

  while (x > 0) {
    reversed += x % 10;
    x = Math.floor(x / 10);
  }

  if (parseInt(reversed) > 2 ** 31 || parseInt(reversed) < -(2 ** 31)) return 0;
  else return parseInt(reversed);
};
