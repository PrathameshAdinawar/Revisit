
// Type of console functions available :

const clue1 = "Muddy footprints"
const clue2 = "Broken glass on table"

//normal console.log ex:
console.log("Clue found ",clue1)
console.log("Clue found ",clue2)



//console.log with multiple variables
const suspectName = "pratham"
const suspectAge = "25"
console.log("Suspect name is ",suspectName," Age is ",suspectAge);



//in production helps to filter 
//Warn 
console.warn("fingerprint detected")

//error
console.error("fingerprint detected")



//Array of objects
const data = [
    {id: 1,name: "pratham ", city:"mumbai"},
    {id: 1,name: "pratham ", city:"mumbai"},
    {id: 1,name: "pratham ", city:"mumbai"}
]

//to print such Array of objects
console.table(data)



//console.group ex:
console.group("group starts")
console.log("My log 1")
console.log("My log 2")
console.log("My log 3")
console.groupEnd()



//console.time ex:
console.time("Time started")

let t = 0;

//fancy underscore for just easy understanding
for(let i=0;i<1_000_00;i++){
    t=t+1
}
console.timeEnd()



//count
console.count("chaicode")
console.count("chaicode")
console.count("chaicode")