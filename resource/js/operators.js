

let number_1 = 100;
let number_2 = 200;
let number_3 = 3;

// Arithmetic Operator

let sum = number_1 + number_2; // 300

let sub = number_1 - number_2; // -100

let multiply = number_1 * number_2; // 20000

let power = number_1 ** 2; // 10000
let exponentiation  = number_1 ^ 2; // 10000 ~~~

let division = number_1 / number_2; // 0.5

let reminder = number_1 % number_3; // 1
// 5 ÷ 2 = 2, reminder = 1

number_3++; // added 1 to 3 = 4
number_3--; // 3



// Assignment Operators

let num4 = 101;
num4 += 10; //  num4 = num4 + 10;
num4 *= 10; //  num4 = num4 * 10;
num4 /= 10; //  num4 = num4 / 10;
num4 -= 10; //  num4 = num4 - 10;

num4 **= 10; // num4 = num4 ** 10;
num4 ^= 10; //  num4 = num4 ^ 10;

num4 %= 10; //  num4 = num4 % 10;



// Comparison Operators

let number_greater = '1000';
let number_lower = 1000;
let result;

result = number_greater > number_lower; // true 1
result = number_greater >= number_lower; // true 1
result = number_greater < number_lower; // false 0
result = number_greater <= number_lower; // false 0

result = number_greater == number_lower; // true 1
result = number_greater === number_lower; // false 0

result = number_greater != number_lower; // true
result = number_greater !== number_lower; // true


// va و
// && and

result = number_greater <= 1000 && number_greater%15 == 0 && number_lower>100; // false 0

// ya یا
// || or

result = number_greater <= 1000  ||  number_lower>100; // true 1
