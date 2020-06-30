let positive, negative, zero, decimal, notANumber, nullValue;
positive = 3;
negative = -7;
zero = 0;
decimal = 4.4;
notANumber = NaN;
nullValue = null;
// variables
console.log('some varibles\npositive = 3;\nnegative = -7;\nzero = 0;\ndecimal = 4.4;\nnotANumber = NaN;\nnullValue = null;');
// additon
console.log('\nsome additon');
console.log('positive + ' + 3 + ' = ' + (positive + 3));
console.log('negative + ' + 3 + ' = ' + (negative + 3));
console.log('zero + ' + 3 + ' = ' + (zero + 3));
console.log('decimal + ' + 3 + ' = ' + (decimal + 3));

// subtraction
console.log('\nsome subtraction');
console.log('positive - ' + 3 + ' = ' + (positive - 3));
console.log('negative - ' + 3 + ' = ' + (negative - 3));
console.log('zero - ' + 3 + ' = ' + (zero - 3));
console.log('decimal - ' + 3 + ' = ' + (decimal - 3));

// multiplication
console.log('\nsome multiplication');
console.log('positive * ' + 3 + ' = ' + (positive * 3));
console.log('negative * ' + 3 + ' = ' + (negative * 3));
console.log('zero * ' + 3 + ' = ' + (zero * 3));
console.log('decimal * ' + 3 + ' = ' + (decimal * 3));

// division
console.log('\nsome division');
console.log('positive / ' + 3 + ' = ' + (positive / 3));
console.log('negative / ' + 3 + ' = ' + (negative / 3));
console.log('zero / ' + 3 + ' = ' + (zero / 3));
console.log('decimal / ' + 3 + ' = ' + (decimal / 3));

// modulo
console.log('\nsome modulo');
console.log('positive % ' + 3 + ' = ' + (positive % 3));
console.log('negative % ' + 3 + ' = ' + (negative % 3));
console.log('zero % ' + 3 + ' = ' + (zero % 3));
console.log('decimal % ' + 3 + ' = ' + (decimal % 3));

// NaN
console.log('\nNaN and NaN math');
console.log('NaN = ' + NaN);
// NaN math
console.log(NaN + ' + positive' + ' = ' + (positive + NaN));
console.log(NaN + ' - positive' + ' = ' + (positive - NaN));
console.log(NaN + ' * positive' + ' = ' + (positive * NaN));
console.log(NaN + ' / positive' + ' = ' + (positive / NaN));

// null
console.log('\nnull and null math');
console.log('null = ' + null);
// null math
console.log(null + ' + ' + positive + ' = ' + (positive + null));
console.log(null + ' - ' + positive + ' = ' + (positive - null));
console.log(null + ' * ' + positive + ' = ' + (positive * null));
console.log(null + ' / ' + positive + ' = ' + (positive / null));


// incrementing
console.log('\nincrementing');
positive++;
console.log('positive++ = ' + positive);
++positive;
console.log('++positive = ' + positive);
// decrementing
console.log('\ndecrementing');
positive--;
console.log('positive-- = ' + positive);
--positive;
console.log('--positive = ' + positive);

// +=
console.log('\npositive += positive is ' + (positive += positive));
// -=
console.log('positive -= positive is ' + (positive -= positive));
