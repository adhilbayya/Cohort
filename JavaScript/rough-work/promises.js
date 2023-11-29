function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "Alice", age: 25 },
        2: { name: "Bob", age: 30 },
        3: { name: "Charlie", age: 28 },
      };
      if (users[userId]) {
        resolve(users[userId]);
      } else {
        reject(new Error("User not found"));
      }
    }, 3000);
  });
}

getUserData(4)
  .then((user) => {
    console.log("User data: ", user);
  })
  .catch((error) => {
    console.error("User data not found!", error.message);
  });
