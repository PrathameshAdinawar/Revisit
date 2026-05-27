//Variables in JS


// 1.Var : never use
// Scope level is Global and can be change/mutable
var ship = "The Amber"
console.log("Shipname",ship)


// 2.let : can use sometimes
// Block level scope and can be changed/mutable
let crewcount = 12
console.log("Crew count is",crewcount)


// 3.const : always use
// Softwares 101 concept always declare as const 
// Also block level scope but cannot be changed/immutable like jack sparrow
const captain = "Jack Sparrow"
console.log("Captain is",captain)
//captain = "cap";  throws error 



// object memory is constant 
const treasurChest = {
    gold: 100,
    rubies:50,
    maps:2
} 
console.log(treasurChest)

//can change the values inside
treasurChest.gold=50

//cannot add anymore its fixed space in memory
// treasurChest={silver:50 }
console.log(treasurChest)



//Array objects
const crewRoster = ["Alok","depesh","keval"]

// can add 
crewRoster.push("viraj")

//can change
crewRoster[0] = "shub"

//not allowed cannot rereference  
crewRoster = ["someone"]