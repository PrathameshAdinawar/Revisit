const pritviraj = {
    name: 'Pritviraj',
    generation: 'GrandFather',
    cookTraditionalDish() {
        return `${this.name} cooks a traditional family recipe`;
    }
}

const raj = Object.create(pritviraj)
console.log(raj.name)

raj.namae = 'raj'
raj.generation = 'father'
raj.runBusiness = function () {
    return `${this.name} runs the family business`
}
console.log(raj)
console.log(pritviraj)

const ranbir = Object.create(raj)
ranbir.name = 'ranbir'
ranbir.generation = 'son'
ranbir.makeFilm = function () {
    return `${this.name} directs the film`
}

//Inherits all the properties from grandfather and father
console.log(ranbir.makeFilm())// ranbir directs the film
console.log(ranbir.runBusiness())// ranbir runs the family business
console.log(ranbir.cookTraditionalDish())// ranbir cooks a traditional family recipe



/*

The interesting part
"Polyfills" : It is used to provide the moder functionality on the older browser if nativley not supported
 basically can make custom function for Array using prototype 
 for example a custom property of array to return last element in array

*/
Array.prototype.last = function () {
    return this[this.length - 1]
}

console.log([1, 2, 3].last())

/* 
In interview 3 things always asked 
Implement your own map, reduce, forEach
*/
