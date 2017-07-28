// write JavaScript code to sort the array numerically
// (the sorted array should equal [1, 2, 5, 9, 10])




var array = [10, 2, 5, 1, 9];
array.sort(function(a, b) {
  return a - b
});

console.log(array)