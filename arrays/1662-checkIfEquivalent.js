var arrayStringsAreEqual = function(word1, word2) {
  let word1String;
  let word2String;

  for (let element of word1) {
      word1String += element;
  }

  for (let element of word2) {
      word2String += element
  }

  return word1String === word2String ? true : false
};

// const arrayStringsAreEqual = function(word1, word2) {
//     return word1.join('') === word2.join('')
// }