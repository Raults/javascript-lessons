let hello = 'hello';
let jello = 'jello';
let yellow = hello;
// == operator
if (hello == yellow) {
  console.log('hello is yellow');
} else if (yellow == jello) {
  console.log('yellow is jello');
} else {
  console.log('nothing is yellow');
}

let two = '2';
let towo = 2;
// === operator
if (two === towo) {
  console.log('two and towo are the same type');
} else if (two == towo) {
  console.log('two and towo are the same, but not the same type');
}

// != operator
if (two != towo) {
  console.log('two and towo are not equal');
} else {
  console.log('two and towo are equal');
}

// !== operator

if(two !== towo) {
  console.log('two and towo are not equal or are not the same type');
} else {
  console.log('two and towo are equal and are the same type');
}

// ! operator
let nothing = undefined;
let boolTrue = true;
let boolFalse = false;

if (nothing) {
  console.log('nothing is something');
}
if (!nothing) {
  console.log('nothing is nothing');
}

// > operator
let three = 3;
if (two > three) {
  console.log('these variable names are probably in need of change...');
} else {
  console.log('all is well in the world');
}
if (towo > three) {
  console.log('these variable names are probably in need of change...');
} else {
  console.log('all is well in the world');
}

// < operator
if (two < three) {
  console.log('makes sense');
} else {
  console.log('well then...');
}
if (towo < three) {
  console.log('makes sense');
} else {
  console.log('well then...');
}

// <= operator
if (two <= three) {
  console.log('two is less than or equal to three');
} else {
  console.log('two is not less than or equal to three');
}
if (towo <= three) {
  console.log('towo is less than or equal to three');
} else {
  console.log('towo is not less than or equal to three');
}
if (three <= three) {
  console.log('three equals three');
} else {
  console.log('I guess three is not equal to three');
}

// >= operator
if (two >= three) {
  console.log('two is greater than or equal to three');
} else {
  console.log('two is not greater than or equal to three');
}
if (towo >= three) {
  console.log('towo is greater than or equal to three');
} else {
  console.log('towo is not greater than or equal to three');
}
if (three >= three) {
  console.log('three equals three');
} else {
  console.log('I guess three is not equal to three');
}

// || logic operator
if (boolTrue || boolFalse) {
  console.log('or is true')
}
if (boolTrue || boolTrue) {
  console.log('or is true')
}
if (boolFalse || boolFalse) {
  console.log('or is true')
}

// && logic operator
if (boolTrue && boolFalse) {
  console.log('and is true')
}
if (boolTrue && boolTrue) {
  console.log('and is true')
}
if (boolFalse && boolFalse) {
  console.log('and is true')
}
