let hello, world, number, notANumber, nullVal;
hello = 'hello';
world = 'world';
nextLine = '\n'; // this bad boi >O>!!!
number = 3;
notANumber = NaN;
nullVal = null

// uses of strings
console.log('hello ' + world);
console.log(hello + world);
console.log(hello + ' world ' + number);
console.log(hello + ' world ' + 3);
console.log(hello + ' world ' + notANumber);
console.log(hello + ' world ' + null);
console.log(hello + ' world ' + number + 5);
console.log(hello + ' world ' + (number + 5));

// note the \n. if you do not want to console.log over and over to return
// a line, you can just \n instead while in the console.log. treat it like text.
