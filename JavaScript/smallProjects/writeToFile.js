let fs = require("fs");

function clean(dt) {
  let cleanData = dt.split(" ");
  let arr = [];
  for (let i = 0; i < cleanData.length; i++) {
    if (cleanData[i].length == 0) {
    } else {
      arr.push(cleanData[i]);
    }
  }
  let ans = arr.join(" ");
  return ans;
}

fs.readFile("./JavaScript/smallProjects/a.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let cleanData = clean(data);
  fs.writeFile("./JavaScript/smallProjects/a.txt", cleanData, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("SuccessFully done");
  });
});
