// how many primirive datatypes in JavaScript?
// 7 primitive datatypes: string, number, bigint, boolean, undefined, null, symbol

const weapoName = "flame sword"

// type of is used to get datatype of variable
console.log("wepon",weapoName,'| type',typeof weapoName) 

const attckpower = 75n // aribitrary large/big integer number
const attackupgrade = 1.5 // number

console.log(typeof attckpower) // bigint
console.log(typeof attackupgrade) // number

const lie = true 
let bonuseffect; // undefined
 
let curse_status = null; // intentionally absent

//for example Weather app?
let weather = null // if used 0 which is temp 

console.log(weather) // null datatype is null 
console.log(typeof weather) // object (this is a quirk/bug in JavaScript, null is considered an object type)


/*                      Symbol                               */

// Symbol is used to create unique identifiers
const uniqueRuneId = Symbol('rune_of_fire');
const anotherRuneId = Symbol('rune_of_fire'); // creates  unique symbol even with same description/label
console.log(uniqueRuneId === anotherRuneId) // false because both are unique symbols
//this console log will print Symbol(rune_of_fire) and can cause issue in production
console.log("Rune",uniqueRuneId) 
//intead we do this
console.log("Rune",uniqueRuneId.toString(),"typeof:",typeof uniqueRuneId) // this will print Symbol(rune_of_fire) as string and avoid issue in production
//Can also check the type of symbol




// how many non-primitive datatypes in JavaScript?
// 1 non-primitive datatype: object (includes arrays, functions, and other objects)

// objects are used to store collections of data and more complex entities
const heroStats = {
    name: "Archer",
    level: 5,
    health: 100,
}
console.log("Hero Stats",heroStats,'| type',typeof heroStats) // object

// arrays are a special type of object used to store ordered collections of data
const inventory = ["flame sword", "healing potion", "magic shield"]
console.log("Inventory",inventory,'| type',typeof inventory) // object (arrays are objects in JavaScript)

// functions are also objects in JavaScript
function attack() {
    console.log("Hero attacks with",weapoName)
}
console.log("Attack function",attack,'| type',typeof attack) // function (functions are a special type of object in JavaScript)

console.log(typeof "Hello") // string
console.log(typeof 42) // number
console.log(typeof 9007199254740991n) // bigint
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object (this is a quirk/bug in JavaScript, null is considered an object type)
console.log(typeof Symbol('unique')) // symbol
console.log(typeof {}) // object
console.log(typeof []) // object (arrays are objects in JavaScript)
console.log(typeof function() {}) // function (functions are a special type of object in JavaScript)



/*          Clone           */

// where does independent copy works?
// for primitive datatypes, independent copy works because they are stored by value
let originalvalue = 75;
let copiedvalue = originalvalue; // creates a copy of the value
copiedvalue = 100; // changing copied value does not affect original value
console.log("Original Value",originalvalue) // 75
console.log("Copied Value",copiedvalue) // 100

//Where does reference copy works?
// for non-primitive datatypes, reference copy works because they are stored by reference
const deepakSword = {
    name:"flame sword",
    damage: 75,
}
const copiedSword = deepakSword;
copiedSword.damage = 100; // changing copied sword's damage alse changes the original 
console.log("Original Sword",deepakSword) // { name: 'flame sword', damage: 100 }
// if not intentional we should not copy object like this 👆

// to create an independent/shallow copy of an object we can use spread operator or Object.assign
const independentSword = {...deepakSword}; // spreads object and creates a new object with same properties
independentSword.damage = 150; // changing independent/shallow sword's damage does not affect the original

//still this is not a deep copy
const potion = {
    name: "healing potion",
    effects: {
        heal: 50,
        mana: 30,
    }
}
//const copiedPotion = {...potion}; // this creates a shallow copy of potion but can stil change the original potion's effects
const copiedPotion = structuredClone(potion); // this creates a deep copy of potion and does not affect the original potion's effects