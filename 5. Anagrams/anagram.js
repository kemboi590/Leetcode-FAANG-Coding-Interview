/**
 *
 * Given two strings, write a functio to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase formed by rearranging the letters of another such as cinema,
 * formed from iceman.
 *
 * assime all are small letters, no special chars and numbers
 *
 */

//Frequency counter pattern
function validAnagram(first, second) {
  if (first.length != second.length) {
    return false;
  }

  const lookUp = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    if (lookUp[letter]) {
      lookUp[letter] += 1;
    } else {
      lookUp[letter] = 1;
    }
  }
  console.log(lookUp); // {b: 1, r: 1, i: 1, a: 1, n: 1}

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }
  console.log(lookUp); // {b: 0, r: 0, i: 0, a: 0, n: 0}
  return true;
}

console.log(validAnagram("brian", "nriab"));
