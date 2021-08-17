/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let numToStr = Number.toString(x);
  let front = 0, end = numToStr.length - 1;
  while (front < end) {
    if (numToStr[front] !== numToStr[end]) return false;
    front++;
    end--;
  }
  return true;
};
