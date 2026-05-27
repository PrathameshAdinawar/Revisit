const hero = {
    name: 'Luna the brave',
    class:'Mage',
    level: 12,
    health: 85,
    mana: 120,
    isAlive: true
};

//add new property
hero.weapon = 'fire'
//delete property
delete hero.level
console.log(hero)

const ranger = {
    name:'lakshay',
    agility: 18,
    stealth:undefined
}
console.log('name' in ranger) //true
console.log('stealth' in ranger) //true: the property exists but its value is undefined
console.log('toString' in ranger) //true: inherited from Object.prototype 
//This object are made from other object and inhertes properties
// so we use hasOwnProperty to check it is more reliable

console.log(ranger.hasOwnProperty('toString')) //false 

