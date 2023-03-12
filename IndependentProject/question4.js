// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

//without recursion

function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

isUnique("hello"); // false
isUnique("copyright"); // true

//with recursion

function isUnique(string) {
  if (string.length === 0) {
    return true;
  }
  if (string.slice(1).includes(string[0])) {
    return false;
  }
  return isUnique(string.slice(1));
}

isUnique("hello"); // false
isUnique("copyright"); // true
