var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let intersection = new Set();

  for (let i of set1) {
    if (set2.has(i)) {
      intersection.add(i);
    }
  }
  return Array.from(intersection);
};

let nums1 = [1, 3, 4, 4, 6];
let nums2 = [2, 3, 4];

console.log(intersection(nums1, nums2));
