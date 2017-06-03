function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");
  return s.replace(/ /g, "") == stringReverse.replace(/ /g, "");
}

module.exports = isPalindrome;
