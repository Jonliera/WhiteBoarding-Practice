// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

//without recursion

function compressString(string) {
  let newString = "";
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      newString += count + string[i];
      count = 1;
    }
  }
  return newString;
}

compressString("aabcccccaaa"); // returns "2a1b5c3a"

//with recursion

function compressString(string) {
  if (string.length === 0) {
    return "";
  }
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      return count + string[i] + compressString(string.slice(i + 1));
    }
  }
}

compressString("aabcccccaaa"); // returns "2a1b5c3a"
