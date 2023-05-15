var smallerNumbersThanCurrent = function(nums) {
  let counter = 0;
  let array = [];
  for (let i = 0; i < nums.length; i++) {
      counter = 0;
      for (let j = 0; j < nums.length; j++) {
          if (i !== j && nums[i] > nums[j]) {
              counter++;
          }
      }
      array.push(counter);
  }

  return array;
};