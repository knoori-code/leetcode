// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target && i !== j) {
//               return [i, j]
//           }
//       }
//   }
// };

const twoSum = function (nums, target) {
  const obj = {};
  let complement;

  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];

    if (obj[complement] !== undefined && obj[complement] !== i) {
      return [obj[complement], i];
    }

    obj[nums[i]] = i;
  }
};
