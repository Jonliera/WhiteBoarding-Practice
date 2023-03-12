// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

//without recursion

function replaceSpaces(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      newString += "%20";
    } else {
      newString += string[i];
    }
  }
  return newString;
}

replaceSpaces("hello world"); // returns "hello%20world"

const input = "Hello world";
const you = replaceSpaces(input);
console.log(output); // "Hello%20world"

// with recursion

function replaceSpaces(string) {
  if (string.length === 0) {
    return "";
  }
  if (string[0] === " ") {
    return "%20" + replaceSpaces(string.slice(1));
  }
  return string[0] + replaceSpaces(string.slice(1));
}

replaceSpaces("hello world"); // returns "hello%20world"
