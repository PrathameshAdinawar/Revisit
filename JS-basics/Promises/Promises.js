// TypeError: Promise resolver undefined is not a function 
// when resolver/callback/function is not given

// const promise = new Promise((resolve, reject) => {

//     // resolve('Chaicode'); normal execution

//     setTimeout(() => {
//         resolve('ChaiCode')
//     }, 2000)

// })
// console.log('from log -> ' + promise) // shows <pending> as it executes first and then resolve
// console.log(promise)

// diff in both is one gets stringify because of coercion concept 

// setTimeout(() => {
//     console.log(promise)
// }, 2000)

// // But we dont actually know when actually will it execute in production so we use 


// promise.then((value) => {
//     console.log('from promise.then -> ' + value)
// })
// //then is responsible for getting & inserting the value from promise into its callback/function
// // best way .log is function
// promise.then(console.log)





//------------------------------------reject part--------------------------------------

//Code doesn't always work so there is reject
// const promise2 = new Promise((resolve, reject) => {

//     // reject(new Error('Chaicoding'),2000) 
//     //  Here execution flow gets disturbed and error not handled so it doesn't print after error anything 


//     setTimeout(() => {
//         reject(new Error('Chaicoding'))
//     }, 2000);
// })

// promise2.then((data) => console.log(data),
//     (error) => console.log(error),
// );
// //What this means:
// //1st function → runs if resolved
// //2nd function → runs if rejected

// //alternative way but internally works as first one 
// promise2
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))






// ********now the amazing part******

// promise
//     .then((data) => {
//         return data.toUpperCase()
//     })
//     .then((data) => {
//         return data + '.ai'
//     })
//     .then(console.log)
// is there any limit to this .then yes 45000 only fails at 45k + 1 




//--------------------error part---------------------
// promise2.then((data) => console.log)
//     .catch((error) => {
//         console.log(error)
//         return 'chai'
//     })
//     .then(console.log)




//------------- resolve immidiatly--------------
// const turant = Promise.resolve("turant")
// console.log(turant)
//resolved immidiately




//--------------- Async await ---------------
const hpromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Masterji")
    },2000)
});


// without async await
 function nice(){
    const result =  hpromise
    console.log(result);
}
nice(); // output => Promise { <pending> }


// with async await
async function nice2(){
    const result = await hpromise;
    console.log(result)
}
nice2(); // Output => Masterji  


//recent addition in JS
const result = await hpromise
console.log(result)




/* we cannot handle Error in this async await function same as then 
We need to use try...catch */

const Hpromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(new Error("Not working"))
    },3000)
})

async function niceeror() {
    try{
        const result = await Hpromise
        console.log(result)
    }
    catch(error){
        console.log("Error ala r",error.message)
    }
}

niceeror();