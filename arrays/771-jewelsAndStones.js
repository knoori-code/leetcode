const numJewelsInStones = function(jewels, stones) {
  let count = 0;

  for (let stone of stones) {
      if (jewels.includes(stone)) {
          count++;
      }
  }

  return count;

  // 1 liner solution
  // return stones.split('').reduce((acc, curr) => jewels.includes(curr) ? ++acc : acc, 0)
};