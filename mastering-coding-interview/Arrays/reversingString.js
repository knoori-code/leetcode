function reverse(str){
  const array = str.split("");
  const reversedArray = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
  }
  return reversedArray.join("")
}

console.log(reverse("I think, therefore I am"));