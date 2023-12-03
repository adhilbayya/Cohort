function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  if (str1.length != str2.length) {
    return false;
  }

  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");

  if (string1 == string2) {
    return true;
  }
  return false;
}

module.exports = isAnagram;
