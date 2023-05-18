var groupAnagrams = function (strs) {
  const obj = {};

  for (let word of strs) {
    const sortedWord = word.split("").sort().join("");
    if (!obj[sortedWord]) {
      obj[sortedWord] = [word];
    } else {
      obj[sortedWord].push(word);
    }
  }

  return Object.values(obj);
};
