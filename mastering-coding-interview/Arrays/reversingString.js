function reverse(str){
  // Check input
  if (typeof str !== "string" || !str || str.length < 2) {
    return "Please enter a valid string"
  }

  const reversedArray = [];
  
  for (let i = str.length - 1; i >= 0; i--) {
      reversedArray.push(str[i]);
  }
  return reversedArray.join("")
}

console.log(reverse("I think, therefore I am"));