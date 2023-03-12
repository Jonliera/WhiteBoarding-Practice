// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

//without recursion

function removeDuplicates(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

removeDuplicates([1, 2, 3, 2, 4, 1, 5]); // returns [1, 2, 3, 4, 5]

//with recursion

function removeDuplicates(array) {
  if (array.length === 0) {
    return [];
  }
  if (array.slice(1).includes(array[0])) {
    return removeDuplicates(array.slice(1));
  }
  return [array[0]].concat(removeDuplicates(array.slice(1)));
}

removeDuplicates([1, 2, 3, 2, 4, 1, 5]); // returns [1, 2, 3, 4, 5]

//using filter

function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

removeDuplicates([1, 2, 3, 2, 4, 1, 5]); // returns [1, 2, 3, 4, 5]
