function pattern(sym, num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      string += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      string += sym;
    }
    string += "\n";
  }
  return string;
}

console.log(pattern("*", 5));
