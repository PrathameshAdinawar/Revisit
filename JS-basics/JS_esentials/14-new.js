//Constructor
function TataCar(chassisNumber, modelName) {
    this.chassisNumber = chassisNumber,
        this.modelName = modelName,
        this.fuelLevel = 100
}

//if put in constructor will create its own separate status function
// same problem as factory function 
TataCar.prototype.status = function () {
    return `Tata ${this.modelName} of ${this.chassisNumber} has fuel level ${this.fuelLevel}`
}

//Both car1 and car2 point at same object 
const car1 = new TataCar('MH-101', 'Nexon');
const car2 = new TataCar('MH-202', 'Harrier');

console.log(typeof car1)// object

console.log(car1.modelName) // Nexon
console.log(car2) // TataCar { chassisNumber: 'MH-202', modelName: 'Harrier', fuelLevel: 100 }

//when status is called it checks first in function TataCar() if no
//then checks if TataCar.prototype has it if yes use it
console.log(car1.status()) // Tata Nexon of MH-101 has fuel level 100
console.log(car2.status()) // Tata Harrier of MH-202 has fuel level 100

/*

What new does is

Step1: Create a new Object {} in function TataCar

Step2: linking the prototype of new Object with the function TataCar prototype

Step3: Transfering the properties/Binding the properties of new object to this. also called this binding

Step4: Implicitly returns the object

*/


// Not same as above 


//factory function 
function autoRickshaw(id, route) {
    return {
        id,
        route,
        run() {
            return `Auto ${this.id} running on ${this.route}`
        }
    };
}

//every time creates new instance so uses more space
//In contructor uses shared memory so no extra space 
// other than that everything is same
const auto1 = autoRickshaw('UP-1', 'Pune-Mumbai')
const auto2 = autoRickshaw('UP-2', 'Mathura-Agra')

console.log(auto1.run())// Auto UP-1 running on Pune-Mumbai
console.log(auto2.run())// Auto UP-2 running on Mathura-Agra

