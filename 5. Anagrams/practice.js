//practice on maps

const lookup = { b: 1, r: 1, i: 1, a: 1, n: 1 };
//brian
let myName = "briany";
for (let i = 0; i < myName.length; i++) {
  let letter = myName[i];
  if (lookup[letter]) {
    console.log(letter + " is found");
  } else {
    console.log(letter + " is not found");
  }
}
