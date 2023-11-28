function promiseBody(resolve) {
  setTimeout(resolve, 1000);
}

function setPromise() {
  let pro = new Promise(promiseBody);
  return pro;
}

function printResult() {
  console.log("Hello There");
}

let pro = setPromise();
pro.then(printResult);
