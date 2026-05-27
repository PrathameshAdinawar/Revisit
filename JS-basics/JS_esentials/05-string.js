
const codeName="JS essentials";
const backUpName =String("codeName");
const templateName=`The name of the course is ${codeName}`;
console.log("codeName",codeName,'| type',typeof codeName) // string
console.log("backUpName",backUpName,'| type',typeof backUpName) // string
console.log("templateName",templateName,'| type',typeof templateName) // string

//Silent failure
const str1 = "Hello";
str1[0] = "f"; // strings are immutable, so this does not change the original string
console.log(str1) // Hello (the original string remains unchanged)

const secretCode = "OMEGA-7";
console.log(secretCode.length) // 7 (length of the string)
console.log(secretCode.charAt(0)) // O (returns the character at the specified index)
console.log(secretCode.charAt(99)) // (returns an empty string for an out-of-bounds index)
console.log(secretCode.at(-1)); // 7 (returns the character at the specified index, supports negative indexing)
console.log(secretCode[0]); // O (returns the character at the specified index using bracket notation)
console.log(secretCode[99]); // (returns an empty string for an out-of-bounds index)

const message = "Welcome to JavaScript!";
console.log(message.toUpperCase()) // WELCOME TO JAVASCRIPT! (converts the string to uppercase)
console.log(message.toLowerCase()) // welcome to javascript! (converts the string to lowercase)

const message2 = "The drop point is at dock 7 Repeat: dock 7"
console.log(message2.indexOf("dock")) // 21 (returns the index of the first occurrence of "dock")
console.log(message2.lastIndexOf("dock")) // 36 (returns the index of the last occurrence of "dock")
console.log(message2.includes("dock")) // true (checks if the string contains "dock")

const order = "move-north|hold-position|extract-vip"
orderList =order.split("|") // splits the string into an array using "|" as the separator
console.log(orderList) // [ 'move-north', 'hold-position', 'extract-vip' ] (the resulting array after splitting the string)

const order2 = "sos".split("") // splits the string into an array of characters
console.log(order2) // [ 's', 'o', 's' ] (the resulting array of characters)
console.log(typeof order2) // object (arrays are objects in JavaScript)
console.log(Array.isArray(order2)) // true (checks if order2 is an array)

const spaceMessage = "   Hello, World!   ";
console.log(spaceMessage.trim()) // "Hello, World!" (removes whitespace from both ends of the string)

const anum = "42";
console.log(anum.padStart(5, "0")); // "00042" (pads the string with "0" on the left until it reaches a total length of 5)

const templateliteral = `
+================================+
|The course name is ${codeName}|
+================================+`;
 console.log(templateliteral)

 const checker = `${codeName.length > 10 ? "Long name" : "Short name"}`
 console.log(checker) // Short name (evaluates the condition and returns "Short name" since codeName.length is not greater than 10)

 //Interview question
 console.log(void 0) // undefined (the void operator evaluates the expression and returns undefined)

 //How to demolish 
 let demolish = "Demolish the building";
 console.log(demolish);
demolish = null; // setting the variable to null to indicate that it no longer holds a value
// for objects, arrays, and functions, you can also set them to null to allow for garbage collection