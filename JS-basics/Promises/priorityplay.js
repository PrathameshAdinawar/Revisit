// console.log("Prathamesh")

// Promise.resolve("resolved value").then((v) => { console.log("Microtask", v) })

// console.log("Adinawar")
/* Output :
Prathamesh = Synchronas
Adinawar   = Synchronas
Microtask resolved value = MicroTask

Priorities are set as how a program should execute 
1. Synchronos  
2. Microtasks like Promises
3. MacroTasks like Timers and many more to learn 
*/



// -------------- Chai bna te hai ----------------

//Step 1: Boil water
function BoilWater(time) {
    return new Promise((res, rej) => {
        console.log("Boil kryte h ji")
        if (typeof time !== "number" || time < 0) {
            rej(new Error("Time should be in number and greater than 0"))
        }
        setTimeout(() => {
            res("Ubal gaya ji")
        }, time)
    })
}




// Step 2:Grind leaves
function grindleaves(){
    return Promise.resolve("Leaves grinded")
}


//Step 3: Steep Tea
function steeptea(time){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("Steeped tea")
        },time)
    })
}

//Step 4:Add sugar
function addSugar(spoons){
    return `Added ${spoons} sugar`
}


//handle the function with .then and .catch 
BoilWater(2000)
    .then((msg)=>{
        console.log(msg) 
        return grindleaves()
    })
    .then((msg)=>{console.log(msg) 
        return steeptea(2000)
    })
    .then((msg)=>{console.log(msg)
        return addSugar(1)
    })
    .then((m)=>{console.log(m)
        console.log("Chai ready hai ji 🍵")
    })
    .catch((er)=>console.log("Rejected :",er))