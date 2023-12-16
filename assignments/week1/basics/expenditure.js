function expenditureAnalysis(transactions) {
  let categoryMap = {};
  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    if (categoryMap[t.category]) {
      categoryMap[t.category] += t.price;
    } else {
      categoryMap[t.category] = t.price;
    }
  }
  let keys = Object.keys(categoryMap);
  let ans = [];
  for (let i = 0; i < keys.length; i++) {
    let category = keys[i];
    let obj = {
      [category]: categoryMap[category],
    };
    ans.push(obj);
  }
  return ans;
}

module.exports = expenditureAnalysis;
