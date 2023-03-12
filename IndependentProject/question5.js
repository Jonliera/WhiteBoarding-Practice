// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

function sortArray(array) {
  let sortedArray = [];
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
      }
    }
    sortedArray.push(min);
  }
  return sortedArray;
}

console.log(sortArray([9, 2, 7, 12])); // [2, 7, 9, 12]
