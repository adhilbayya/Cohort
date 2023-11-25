function pattern(symbol, lineOfSymbol) {
  let pattern = "";
  for (let i = 1; i <= lineOfSymbol; i++) {
    for (let j = 1; j <= lineOfSymbol; j++) {
      pattern += symbol + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern("#", 5);
