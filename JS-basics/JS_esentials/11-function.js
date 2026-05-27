
console.log(brewPotion('healingHerbs', 3));

function brewPotion(ingredient, dose) {
    return `Brewing a potion with ${ingredient} (x${dose})... potion is ready!`;
}

const mixElixir = function (ingredient) {
    return `Mixing elixir with ${ingredient}`;
}
console.log(mixElixir('herbspromax'))


// does not own "this", no "arguments" object
const distilEssence = (ingredient) => {
    return `Mixing elexir with ${ingredient}`
}

//lets see whats argument first
function oldBrewingEsense() {
    //arguments are  not array of objects
    console.log("Type: " + typeof arguments);
    console.log("isArray: " + Array.isArray(arguments));
    console.log(arguments);

    //first convert it using the Array.from and then we can make use of arguments 
    const argsArray = Array.from(arguments)
    console.log(argsArray)

}
oldBrewingEsense('sage', 'Rosemary');

//Impure function: A function that has side effect or relies on external state
let potionCount = 0;
function brewPotionImpure(ingredient) {
    return potionCount++;
}

// IIFE: Immediately Invoked Function Expression
const potionshop = (function () { })();

// const arrowFun = () =>{
//    try {
//      console.log(arguments)
//    } catch (e) {
//     // console.log(e)
//     console.log(e.message)
//    }
// }

// arrowFun()

//HOF high order function
function postion(brewPotion) {
    return function brewHealingPotion() {
        //do something
    }

}

// postion(brewPotion)() // this will return the brewHealingPotion function and then we invoke it with () to get the result of brewing a healing potion

const newfun = (function () {
    let inventory = 0;

    return {
        brew() {
            inventory++
            return `Brewed a potion. Total inventory: ${inventory}`;
        },
        getStock() {
            return inventory;
        }
    }
})()
console.log(newfun) //{ brew: [Function: brew], getStock: [Function: getStock] }
console.log(newfun.brew()) // Brewed a potion. Total inventory: 1
console.log(newfun.getStock()) // 1


/*    Closures  */
// If a function is called inside a function than the reference of the outer function stays untill 
// the inner function is executed and then will be garbage collected. This is called closure.
function makefun() {
    let name = 'pokemon'
    function displayName() {
        console.log(name);
    }
    return displayName;
}