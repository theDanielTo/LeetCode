/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parenthStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      parenthStack.push(s[i]);
    }
    else if (s[i] === ')' && parenthStack.length !== 0 && parenthStack[parenthStack.length - 1] === '(') {
      parenthStack.pop();
    } else if (s[i] === '}' && parenthStack.length !== 0 && parenthStack[parenthStack.length - 1] === '{') {
      parenthStack.pop();
    } else if (s[i] === ']' && parenthStack.length !== 0 && parenthStack[parenthStack.length - 1] === '[') {
      parenthStack.pop();
    }
    else {
      return false;
    }
  }

  return parenthStack.length === 0;
};
