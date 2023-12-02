function isPalindrome(str) {
  str = str.toLowerCase();

  let string = str.split("").reverse().join("");
  return string === str;
}

console.log(isPalindrome("Adilida"));
