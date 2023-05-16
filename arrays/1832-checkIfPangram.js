var checkIfPangram = function(sentence) {
  const obj = {};

  for (let letter of sentence) {
      if (!obj[letter]) {
          obj[letter] = 0;
      }
      obj[letter]++;
  }

  return Object.keys(obj).length === 26;
};