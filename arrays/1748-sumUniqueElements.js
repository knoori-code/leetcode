var sumOfUnique = function(nums) {
  const obj = {};
  let sum = 0;

  for (let num of nums) {
      if (!obj[num]) {
          obj[num] = 0;
      }
      obj[num]++;
  }


  for (let key in obj) {
      if (obj[key] === 1) {
          sum += Number(key);
      }
  }

  return sum;

  // Alternate solution

  // const obj = {};
  //   let sum = 0;

  //   for (let num of nums) {
  //       if (obj[num] === undefined) {
  //           obj[num] = 1;
  //           sum += num;
  //       } else if (obj[num] === 1) {
  //           sum -= num;
  //           obj[num] = 0;
  //       }
  //   }

  //   return sum;
};