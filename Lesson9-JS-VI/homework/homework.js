// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  return cb(cb);
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  var sum = numbers.reduce(function(total, currValue) {
    return total + currValue;
  });
  cb(sum)
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  var i;
  for (i = 0; i < arr.length; i++){
    cb(arr[i]);
  }
}

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let mappedItem = cb(arr[i]);
    newArr.push(mappedItem);
  }
  return newArr
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
};
