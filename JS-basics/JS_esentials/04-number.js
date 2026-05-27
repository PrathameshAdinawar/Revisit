const num1 = 23; //number
const num2 = 34.56; //number
const num3 = -45.67; //number
const num4 = 20_399_999;//readability purpose

const infinityValue = Infinity; // represents infinity
const negativeInfinityValue = -Infinity; // represents negative infinity
console.log(1/0) // Infinity
console.log(-1/0) // -Infinity

const notANumber = NaN; // represents a value that is not a number (result of invalid mathematical operations)
console.log(NaN === NaN); // false because NaN is not equal to anything, including itself 

console.log(Number.max_safe_integer) // 9007199254740991 (largest safe integer in JavaScript)
console.log(Number.min_safe_integer) // -9007199254740991 (smallest safe integer in JavaScript)
console.log(Number.EPSILON) // 2.220446049250313e-16 (smallest difference between two representable numbers)
console.log(Number.isNaN(notANumber)) // true

const countDown = "007"
console.log(parseInt(countDown)) // 7 (parses the string and returns an integer)
console.log(parseFloat("111",2)) 

const num = 123.567
console.log(Math.round(num)) // 124 (rounds to the nearest integer)
console.log(Math.floor(num)) // 123 (rounds down to the nearest integer)
console.log(Math.ceil(num)) // 124 (rounds up to the nearest integer)

const temps = [-2,3,5,7,-11]
console.log(Math.max(...temps)) // 7 (returns the largest number in the array)
console.log(Math.min(...temps)) // -11 (returns the smallest number in the array)

console.log(0.1 + 0.2) // 0.30000000000000004 (due to floating-point precision issues)
console.log(0.1 + 0.2 === 0.3) // false (due to precision issues)
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON) // true (accounting for precision issues)