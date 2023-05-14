var moveZeroes = function(nums) {
  // let insertPos = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] !== 0) {
  //         nums[insertPos++] = nums[i];
  //     }
  // }
  // while (insertPos < nums.length) {
  //     nums[insertPos++] = 0;
  // }

  // Alternate solution
  let leftPointer = 0;

  // i is the right pointer
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let leftCopy = nums[leftPointer];
      nums[leftPointer] = nums[i];
      nums[i] = leftCopy;
      leftPointer++
    }
  }

  return nums;
};