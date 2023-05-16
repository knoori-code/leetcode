var groupAnagrams = function(strs) {
  const obj = {};
  const array = [];

  for (let word of strs) {
      const sortedWord = word.split('').sort().join('')
      if (!obj[sortedWord]) {
          obj[sortedWord] = [word];
      } else {
          obj[sortedWord].push(word);
      }
  }

  for (let key in obj) {
      array.push(obj[key]);
  }

  return array;
};