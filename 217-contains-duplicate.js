var containsDuplicate = function(nums) {
  const obj = {};

  for (let num of nums) {
      if (obj[num]) {
          return true
      }

      if (!obj[num]) {
          obj[num] = 1
      }
  }
  return false
};