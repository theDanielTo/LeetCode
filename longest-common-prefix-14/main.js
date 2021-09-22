/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let c = '';
  let commonPrefix = '';
  let shortestStr = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < shortestStr) shortestStr = strs[i];
  }



  return commonPrefix;
};
