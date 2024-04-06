/*
*
Write a function which takes in a string and returns counts of each character in the string
    1. Count letters and numbers
    2. Omit spaces " "
    3. Omit sopecial sybmols
    4. Convert inputs into lowercase
*/

//Simple solition

function charCount(str) {
  //Hello!
  let result = {};
  for (let i = 0; i < str.length; i++) {  //O(n)
    let char = str[i].toLowerCase();

    if (/[a-z0-9]/.test(char)){
        if (result[char] > 0) {
            result[char]++;
          } else {
            result[char] = 1;
          }
    }
  }
  return console.log(result);
}

charCount("Hello!");

