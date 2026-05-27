console.log(this)


function ranveerOnGlobalStage() {
    return typeof this // empty object
}
console.log(ranveerOnGlobalStage()) // object


function ranveerWithStrict() {
    'use strict'
    return this
}
console.log(ranveerWithStrict()) // undefined



//1st question where are we running this in browser/Node environment varies the ans accordingly
// in browser shows window page what ever is running in that browser 
// In node will show the ref of Global object 
function ranveerWithNoStrict() {
    return this
}
console.log(ranveerWithNoStrict()) // object



const bollywoodFilm = {
    name: 'Bajirao Mastani',
    lead: 'Ranveer Singh',

    introduce() {
        return `This is ${this.name} starring ${this.lead}`;
    }
}

console.log(bollywoodFilm.introduce())




const filmDirector = {
    name: 'Sanjay Leela Bhansali',
    actor: ['Ranveer Singh', 'Deepika Padukone'],

    introduce() {
        // loop carries the reference
        this.actor.forEach(actor => {
            console.log(`This is ${this.name} starring ${actor}`);
        })
    }
}

console.log(filmDirector.introduce())


// Behavior of this. 
//Nested function
const filmSet = {
    crew: 'spot boy',

    prepaerProps() {
        console.log(`outer this.crew ${this.crew}`)//spot boy

        // a regular nested function doesnot inherit "this."
        function arrangeChairs() {
            console.log(`Inner this.crew ${this.crew}`)//undefined
        }
        arrangeChairs();

        // arrow functionn inherits "this"
        const arrangeLights = () =>{
            console.log(``)
        }
    },


}
filmSet.prepaerProps();


//Detached method
const actor ={
    name:'Ranveer',
    bow(){
        return `${this.name} takes a bow.`;
    }
}
console.log(actor.bow());
//function reference
const detachBow = actor.bow;
console.log(detachBow())