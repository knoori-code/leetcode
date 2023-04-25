const array = [6, 4, 3, 2, 1, 7];
const sum = 9;

// Brute force method
function sumInArray(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }

  return false;
}


const sumInArrayImproved = (arr, sum) => {
  const set = new Set();
  
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    }
    
    set.add(sum - arr[i]);
  }
  
  return false
}

console.log(sumInArrayImproved([6, 4, 3, 2, 1, 7], 10));