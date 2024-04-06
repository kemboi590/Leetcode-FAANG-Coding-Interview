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

//brute force solution
// function same(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctSquare = arr2.indexOf(arr1[i] ** 2);

//     if (correctSquare === -1) {
//       return false;
//     }
//     arr2.splice(correctSquare, 1);
//   }
//   return true;
// }

// console.log(same([1, 2, 3], [1, 4, 9]))