/* 
*
Write a function called same, which accepts two arrayd.
The function shold return coresponding value squared in the second array.
The frequency of values must be the same.

//example
same([1,2,3], [4,1,9]) //same
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false,(must be of the same frequency)
*/


//Using frequency counters
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    if (frequencyCounter1[val] > 0) {
      frequencyCounter1[val]++;
    } else {
      frequencyCounter1[val] = 1;
    }
    // frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  for (let val of arr2) {
    if (frequencyCounter2[val] > 0) {
      frequencyCounter2[val]++;
    } else {
      frequencyCounter2[val] = 1;
    }
    // frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [1, 4, 9, 4]));
