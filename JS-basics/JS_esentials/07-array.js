//how we create an array
const emptyArray = [];
const carriage = ['akash','sunil','suman'];
console.log(emptyArray) // [] (an empty array)
console.log(carriage) // ['akash', 'sunil', 'suman'] (an array)
console.log(carriage.length) // 3 (the number of elements in the array)

//empty array with 3 empty slots
const threeslots = new Array(3);
console.log(threeslots) // [ <3 empty items> ] (an array with 3 empty slots)
console.log(threeslots.length) // 3 (the number of elements in the array)

//Array.of method
const newArray = Array.of("lslsl",3,true);
console.log(newArray) // ['lslsl', 3, true] (an array containing the elements "lslsl", 3, and true)

//Array.from method
const someArrat = Array.from("hello",char=>char.toUpperCase());
console.log(someArrat) // ['H', 'E', 'L', 'L', 'O'] (an array created from the string "hello", where each character becomes an element in the array)

//how can data be lost in array
const arr = [1,2,3,4,5]
arr.length = 3; // truncates the array to a length of 3, effectively removing the last two elements
console.log(arr) // [1, 2, 3] (the resulting array after truncation)
arr.length = 5; // extends the array back to a length of 5, but the new slots are empty
console.log(arr) // [1, 2, 3, <2 empty items>] (the resulting array after extending the length, with the new slots being empty)


//Mutating methods: push, pop, shift, unshift, splice
//In production we usually avoid mutating methods instead we just create new ones

//pop method
const arrMutate = [1,2,3,4];
console.log("pop",arrMutate.pop()) // removes the last element (4) from the array
console.log(arrMutate) // [1, 2, 3] (the resulting array after popping the last element)

//push method
console.log("push",arrMutate.push(4)) // adds the element 4 to the end of the array and returns the new length (4)
console.log(arrMutate) // [1, 2, 3, 4] (the resulting array after pushing the new element)

//shift method
console.log("shift",arrMutate.shift()) // removes the first element (1) from the array
console.log(arrMutate) // [2, 3, 4] (the resulting array after shifting the first element)

//unshift method
console.log("unshift",arrMutate.unshift(1)) // adds the element 1 to the beginning of the array and returns the new length (4)
console.log(arrMutate) // [1, 2, 3, 4] (the resulting array after unshifting the new element)

//splice method
console.log("splice(1)",arrMutate.splice(1)) // removes all elements starting from index 1 (removes 2, 3, and 4)
arrMutate.push(2,3,4) // adds the elements 2, 3, and 4 back to the end of the array
console.log("splice(1,2)",arrMutate.splice(1,2)) // removes 2 elements starting from index 1 (removes 2 and 3)
console.log(arrMutate) // [1, 4] (the resulting array after splicing out the elements at index 1 and 2)

//Key points:
//1. Use [] literal syntax as it gives memory as we put data in it, Array(n) gives fixed memory
//2. Array are 0 based index and access out of bound index gives undefined
//3. Non mutating methods are : map, filter, reduce, slice, concat, flat, flatMap, sort, reverse, join
//4. Searching methods are : indexOf, lastIndexOf, includes, find, findIndex, some, every
//5. we use isArray method to check if its an array or not 
