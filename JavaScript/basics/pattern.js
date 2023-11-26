function pattern(symb, num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      string += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      if (i == 1 || i == num) {
        string += symb;
      } else {
        if (k == 0 || k == 2 * i - 2) {
          string += symb;
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  return string;
}
console.log(pattern("#", 5));
