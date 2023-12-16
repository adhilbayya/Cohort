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
  let results = Object.keys(categoryMap).map((category) => {
    let ans = [];
    let obj = {
      category: category,
      Price: categoryMap[category],
    };
    ans.push(obj);
  });

  return results;
}

const transactions = [
  {
    itemName: "Item 1",
    category: "Food",
    price: 20,
    timestamp: "2023-11-30",
  },
  {
    itemName: "Item 2",
    category: "Clothing",
    price: 50,
    timestamp: "2023-11-29",
  },
  {
    itemName: "Item 3",
    category: "Food",
    price: 30,
    timestamp: "2023-11-28",
  },
  {
    itemName: "Item 3",
    category: "Games",
    price: 30,
    timestamp: "2023-11-28",
  },
  {
    itemName: "Item 3",
    category: "Games",
    price: 30,
    timestamp: "2023-11-28",
  },
];

let total = expenditureAnalysis(transactions);
console.log(total);