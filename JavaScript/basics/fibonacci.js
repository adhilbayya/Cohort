function fibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let value = 0;
  for (let i = 1; i < num - 1; i++) {
    value = n1 + n2;
    n1 = n2;
    n2 = value;
  }
  return n2;
}

console.log(fibonacci(10));
