function timeTaken(n) {
  let startTime = new Date();
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  let endTime = new Date();

  let totalTime = (endTime - startTime) / 1000;

  return totalTime;
}

console.log("Time taken for sum from 1-100:", timeTaken(100), "seconds");
console.log("Time taken for sum from 1-100000:", timeTaken(100000), "seconds");
console.log("Time taken for sum from 1-1000000000:",timeTaken(1000000000),"seconds");
