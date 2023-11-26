function pattern(sym, num) {
  let string = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let k = 0; k < 2 * (num - i) - 1; k++) {
      string += sym;
    }
    string += "\n";
  }
  return string;
}

console.log(pattern("*", 5));
