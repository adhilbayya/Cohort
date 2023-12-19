let counter = 0;
// function setTimer() {
//   console.clear();
//   console.log(counter);
//   counter += 1;
// }

// setInterval(setTimer, 1 * 1000);

function setTimer() {
  console.clear();
  counter += 1;
  console.log(counter);
  setTimeout(setTimer, 1000);
}

setTimeout(setTimer, 1000);
