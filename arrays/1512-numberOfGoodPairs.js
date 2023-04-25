var numIdenticalPairs = function(nums) {
  const obj = {};
  let goodPairs = 0;

  for (let num of nums) {
      if (obj[num] === undefined) {
          obj[num] = 0;
      }
      obj[num] += 1;
  }

  for (let num in obj) {
      if (obj[num] > 1) {
          goodPairs += obj[num] * (obj[num] - 1) / 2
      }
  }

  return goodPairs;
};