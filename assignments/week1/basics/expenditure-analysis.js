function calculateTotalSpentByCategory(transactions) {
  let categoryMap = {};
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (categoryMap.hasOwnProperty(category)) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  });

  let result = Object.keys(categoryMap).map((category) => {
    return { [category]: categoryMap[category] };
  });

  return result;
}

const transactions = [
  { itemName: "Item 1", category: "Food", price: 20, timestamp: "2023-11-30" },
  {
    itemName: "Item 2",
    category: "Clothing",
    price: 50,
    timestamp: "2023-11-29",
  },
  { itemName: "Item 3", category: "Food", price: 30, timestamp: "2023-11-28" },
];

console.log(calculateTotalSpentByCategory(transactions));
