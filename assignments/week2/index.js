const express = require("express");
const app = express();
const port = 3000;

function calcSum(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  return sum;
}

app.get("/", (req, res) => {
  let re = calcSum(100);
  let sum = `The Answer is ${re}`;
  res.send(sum);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
