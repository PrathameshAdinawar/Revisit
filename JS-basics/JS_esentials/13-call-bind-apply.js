// call and apply => basic chef(kitchen)
// bind => return a new function
// both returns result 
// Both overrides the "this." 
// call is normal and apply uses array

function cookDish(Ingredient, style) {
    return `${this.name} prepares ${Ingredient} in ${style} style !`
}

console.log(cookDish())

const sharmaKitchen = { name: "Sharma jis kitchen" }
const guptaKitchen = { name: "Gupat jis kitchen" }


/*   Call   */
console.log(cookDish.call(sharmaKitchen, "Panner and spices", "Muglai"))
//Sharma jis kitchen prepares Panner and spices in Muglai style !



/*  Apply  */
const guptaOrder = ["chole kulcha", "punjabi dhaba"]

console.log(cookDish.apply(guptaKitchen, guptaOrder))
//Gupat jis kitchen prepares chole kulcha in punjabi dhaba style !



const bills = [10, 20, 30]
console.log(Math.max.apply(null, bills))
console.log(Math.max(...bills));



/* Bind : return function */

function reportDeliveryStatus(location, status) {
    return `${this.name} at ${location} : ${status}`
}

//always from object
const deliveryBoy = { name: "Ranveer" }

//Call and Apply immidiately runs
console.log("Call: ", reportDeliveryStatus.call(deliveryBoy, "Lyari", "Ordered"))
//Call:  Ranveer at Lyari : Ordered
console.log("Apply: ", reportDeliveryStatus.apply(deliveryBoy, ["Mars", "Pickup"]))
//Apply:  Ranveer at Mars : Pickup

//Bind runs when called as it returns a function()
console.log("Bind: ", reportDeliveryStatus.bind(deliveryBoy, "Haridvar", "What"))
// Bind:  [Function: bound reportDeliveryStatus] 
// returns a function

// right way to run
const bindReport = reportDeliveryStatus.bind(deliveryBoy, "Haridwar", "what ")
console.log(bindReport())
//Ranveer at Haridwar : what

//another way
const bindReport2 = reportDeliveryStatus.bind(deliveryBoy)
console.log(bindReport2("Haridwar", "what ")) // 2nd way to run
//Ranveer at Haridwar : what
