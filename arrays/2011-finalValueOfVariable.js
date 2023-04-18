var finalValueAfterOperations = function(operations) {
  let X = 0;

  for (let operation of operations) {
      if (operation[1] === '+') {
          X++;
      } else {
          X--;
      }
  }

  return X;

  // 1 liner code from solutions using reduce
  // return operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)
};
