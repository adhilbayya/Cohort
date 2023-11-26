function pattern(symb, num) {
  let value = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i == 0 || i == num - 1) {
        value += symb;
      } else {
        if (j == 0 || j == num - 1) {
          value += symb;
        } else {
          value += " ";
        }
      }
    }

    value += "\n";
  }
  console.log(value);
}
pattern("#", 5);
