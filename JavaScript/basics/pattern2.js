function pattern(symb, numOfLines) {
  let value = "";
  for (let i = 1; i <= numOfLines; i++) {
    for (let j = 1; j <= i; j++) {
      value += symb + " ";
    }
    value += "\n";
  }
  console.log(value);
}

pattern("@", 5);
