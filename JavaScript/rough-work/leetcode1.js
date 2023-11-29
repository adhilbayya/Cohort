let nums = [2, 11, 7, 15];
let result = 9;

function getSum(nums, result) {
  let mapsData = new Map();
  for (let i = 0; i < nums.length; i++) {
    let value = result - nums[i];
    if (mapsData.has(value)) {
      return (value = [mapsData.get(value), i]);
    }
    mapsData.set(nums[i], i);
  }
  return [];
}

console.log(getSum(nums, result));
