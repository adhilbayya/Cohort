function isValid(s) {
  let arr = [];
  let brackets = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let br = s[i];
    if (brackets[br]) {
      arr.push(br);
    } else {
      let p = arr.pop();
      if (brackets[p] !== br) {
        return false;
      }
    }
  }
  return arr.length == 0;
}

console.log(isValid("{[]}"));
