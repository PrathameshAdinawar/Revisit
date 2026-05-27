const artifacts={
    name:'obsidian Crown',
    era:'Ancient',
    value:5000,
    material:'volcanic glass'
};

const keys= Object.keys(artifacts)
const values= Object.values(artifacts)
const entries = Object.entries(artifacts)
console.log('keys: ',keys) // all the keys [ 'name', 'era', 'value', 'material' ]
console.log('values: ',values) // all the values [ 'obsidian Crown', 'Ancient', 5000, 'volcanic glass' ]
console.log('entries: ',entries) // all the entries  
// [
//   [ 'name', 'obsidian Crown' ],
//   [ 'era', 'Ancient' ],
//   [ 'value', 5000 ],
//   [ 'material', 'volcanic glass' ]
// ]

//for of loop 
//To get Key: value pairs use .entries Returns an array of key/values
for(const [key,value] of Object.entries(artifacts)){
    console.log(`${key}: ${value}`)
}


// Array of Array to objects conversion
// Array of array
const priceList = [
    ["obsedian fire",10000],
    ["wrath of fire",20000],
    ['ice spire',30000]
]

// .fromEntreis returns a key-value objects 
const priceobject = Object.fromEntries(priceList)
console.log(priceobject)


const displayCase = {
    artifact : 'obsidian',
    location: 'hall A',
    locked: true
}

//Freeze means cannot add, update and delete
Object.freeze(displayCase)
displayCase.name='kaka'
displayCase.newprop='new'
delete displayCase.locked
console.log(displayCase)// { artifact: 'obsidian', location: 'hall A', locked: true }

const catalogEntry={
    id:'ART-01',
    name:'obsedian',
    description:'Ancient sword',
    varified: true
}
// seal means you cannot add or delete porperty but can update the existing one
Object.seal(catalogEntry)
delete catalogEntry.name
catalogEntry.varified=false
console.log(catalogEntry) // updated property varified 
// {
//   id: 'ART-01',
//   name: 'obsedian',
//   description: 'Ancient sword',
//   varified: false
// }

const secureArtifats = {
    name:"Ruby pendant"
}

Object.defineProperty(secureArtifats,'catalogId',{
    value:'SEC-999', // actually value of 'catalogId
    writable:false, // to define can this property be edited/updated
    enumerable:false, // to define is this property readable
    configurable:false // to define can it be deleted or redifined 
})

secureArtifats.catalogId='hacked'
//if enumerable is false we cannot see the output in console.log also 
console.log(secureArtifats) // { name: 'Ruby pendant', catalogId: 'SEC-999' }

delete secureArtifats.catalogId

for(const [key,value] of Object.entries(secureArtifats)){
    console.log(`${key}: ${value}`)
}

//how to description of such properties 
// for bydefault its all true
const desc = Object.getOwnPropertyDescriptor(secureArtifats,'catalogId')
console.log(desc)
// {
//   value: 'SEC-999',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

 
//loop key points
// for() loop: classic most optimized
// while loop
// do while loop
// for...in : avoid for arrays
// for...of 
// JS customized loop on for loop: map, foreach, filter, reduce everything is in arraymethods.js file 

//for each is special loop it does not return anything and does changes in original array and it expects 
//synchronous function it does not wait for promises and break keyword doesn't work in forEach other than throwing exceptions