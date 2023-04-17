const shuffle = function(nums, n) {
  const newArray = [];

  for (let i = 0; i < n; i++) {
      newArray.push(nums[i], nums[i + n]);
  }

  return newArray;
};