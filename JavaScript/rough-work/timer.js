let counter = 1;
function setTimer() {
  console.clear();
  console.log(counter);
  counter += 1;
}

setInterval(setTimer, 1 * 1000);
