function sumOfNumbers(startNum, endNum) {
  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumbers(1, 2));
