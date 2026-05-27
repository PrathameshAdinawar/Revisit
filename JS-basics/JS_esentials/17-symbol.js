const adhar_of_mayur = Symbol("adhaar")
const adhar_of_piyush = Symbol("adhaar")

console.log(adhar_of_mayur === adhar_of_piyush)// false
// it gives a gurrantteed unique value
console.log(adhar_of_mayur.toString())// Symbol(adhaar)
console.log(adhar_of_mayur.description)// adhaar


const nonindian = Symbol()
console.log(nonindian.description) // Undefined



const biometricHash = Symbol("biometricHash")
const bloodGroup = Symbol("bloodGroup")

const citizenRescord = {
    name: 'pratham',
    age: '24',
    [biometricHash]: '2312jkl323',
    [bloodGroup]: 'O+'
}

console.log(citizenRescord)
// {
//   name: 'pratham',
//   age: '24',
//   [Symbol(biometricHash)]: '2312jkl323',
//   [Symbol(bloodGroup)]: 'O+'
// }
console.log(Object.keys(citizenRescord))
// [ 'name', 'age' ] does not show the properties Symboled
console.log(Object.getOwnPropertySymbols(citizenRescord))
// Special Method
//[ Symbol(biometricHash), Symbol(bloodGroup) ]  



//Iterator in Symbol
const rtiQueryBook = {
    queries: ['InfraBudget', 'Ration Card', 'Education Budget', 'Star5tUp laws'],

    //prototype hides some methods like this [](){}
    [Symbol.iterator]() {
        let index = 0;
        const queries = this.queries;
        return {
            next() {
                if (index < queries.length) {
                    return { value: queries[index++], done: false }
                }
                return { value: undefined, done: true }
            }
        }

    }
}

for (const query of rtiQueryBook) {
    console.log(`Filing ITR ${query}`)
}
// Filing ITR InfraBudget
// Filing ITR Ration Card
// Filing ITR Education Budget
// Filing ITR Star5tUp laws


const govScheme = {
    name: 'PM kisan Yojna',
    people: 34,
    // A method that converts an object to a corresponding primitive value
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') return this.name;
        if (hint === 'number') return 88;
    }
}

// quick way to convert it to number
console.log(+govScheme);// 88
console.log(`${govScheme}`);// PM kisan Yojna