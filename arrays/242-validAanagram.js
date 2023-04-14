// const isAnagram = function(s, t) {
//   const sArray = s.split('').sort()
//   const tArray = t.split('').sort()

//   if (sArray.length !== tArray.length) {
//       return false
//   }

//   for (let i = 0; i < sArray.length; i++) {
//       if (sArray[i] !== tArray[i]) {
//           return false
//       }
//   }

//   return true
// };


// New solution - O(n) time complexity
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const obj = {};

    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 0;
        }
        obj[s[i]] += 1;

        if (!obj[t[i]]) {
            obj[t[i]] = 0;
        }
        obj[t[i]] -= 1;
    }

    for (let key in obj) {
        if (obj[key] !== 0) {
            return false
        }
    }

    return true
};