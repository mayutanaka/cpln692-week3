/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data.
Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

/* CASE 1
Week 2 Lab 2, Part 1
Functions help us organize our code (and our thoughts)
*/
var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];
// Original code:
var exampleSum = 0;
for (var i = 0; i < theArray.length; i++) {
  var arrayValue = theArray[i];
  if (typeof arrayValue === 'string') {
    exampleSum = exampleSum + arrayValue.length;
  } else if (typeof arrayValue === 'number') {
    exampleSum = exampleSum + arrayValue;
  } else {
    console.log("Not sure how to proceed with value:", arrayValue);
  }
}
// Underscore code:
var newSum = 0;
_.each(theArray, function(value, key, list) {
  if (typeof value === 'string') {
    newSum += value.length;
  } else if (typeof value === 'number') {
    newSum += value;
  } else {
    console.log("Not sure how to proceed with value:", value);
  }
});
// Testing:
console.log(exampleSum === newSum);

/* CASE 2
Week 2 Lab 2, Part 2
Data Transformation
*/
var data = bikeArrayClean;
// Original code:
function filter(elem) {
  if (elem[elem.length-1]>20) {
    dataFiltered.push(elem);
  }
}
var dataFiltered = [];
data.forEach(filter);
// Underscore code:
var filteredEach = [];
_.each(data, function(value, key, list) {
  if (_.last(value)>20) {
    filteredEach.push(value);
  }
});
// Testing:
console.log(dataFiltered.length===filteredEach.length);
