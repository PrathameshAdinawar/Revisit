const orders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];


//foreach method
//forech parameter is a callback function which takes 3 parameters (currentValue, index, array)
//forEach only expects the synchronous function it does not wai for promises 
//break(); keyword doesn't work in forEach other than throwing exceptions 
const myData =
orders.forEach( /* arrow function: (currentValue, index, array) => {} */(order, index) => {
    console.log(`#${index + 1} : ${order.qty} x ${order.dish}`);
})
console.log(myData) // undefined (forEach does not return a new array, it returns undefined)


//Map method
const totalPrices = 
orders.map( o=> ` ${o.dish} : $${o.price * o.qty} ` ); // creates a new array with the total price for each dish
console.log( totalPrices ) // [ 'Pasta Carbonara : $28', 'Dragon Ramen : $12', 'Caesar Salad : $27', 'Inferno Wings : $22', 'Truffle Risotto : $18' ] (the resulting array with total prices for each dish)


//filter method
//filter method works with condition 
// it gives array of objects in return
const spicyOrders =
orders.filter(o => o.spicy); // creates a new array of objects with only the spicy dishes
console.log(spicyOrders) // [ { dish: 'Dragon Ramen', price: 12, spicy: true, qty: 1 }, { dish: 'Inferno Wings', price: 11, spicy: true, qty: 2 } ] (the resulting array with only the spicy dishes)


//reduce method
//reduce method parameter is a callback function which takes 4 parameters (accumulator, currentValue, index, array)
// Simple reduce - just adding up prices
const prices = [10,20,30];
const totalPrice =
prices.reduce((acc,arr)=>{
    return acc+arr;
},0) // 0 is the initial value of the accumulator can be any value
// acc = 0 → 10 → 30 → 60
// curr = 10, 20, 30
// Result: 60

//index ❌ Rarely needed - which number in the list
prices.reduce((acc, curr, index) => {
    console.log(`Position ${index}: ${curr}`);
    return acc + curr;
}, 0);
// Position 0: 10
// Position 1: 20
// Position 2: 30

//array ❌ Very rarely needed - the whole original array
prices.reduce((acc, curr, index, array) => {
    console.log(`Total items in array: ${array.length}`);
    return acc + curr;
}, 0);
// Would print: Total items in array: 3
// Usually we only use the accumulator and current value in reduce, index and array are less commonly used.

//Back to Orders Example 
const totalRevenue = 
orders.reduce((sum,order)=>{
    return sum + (order.price * order.qty)
},0)
console.log("Total Revenue:",totalRevenue) // 107 (the total revenue calculated by summing up the price multiplied by quantity for each order)

const groupedSpicy = 
orders.reduce((acc,order)=>{
    const category = order.spicy ? "spicy" : "mild";
    acc[category].push(order.dish); // acc is an object if {spicy:[], mild:[]}
    return acc;

},{spicy:[], mild:[]});
console.log(groupedSpicy) // { spicy: [ 'Dragon Ramen', 'Inferno Wings' ], mild: [ 'Pasta Carbonara', 'Caesar Salad', 'Truffle Risotto' ] } (the resulting object with dishes grouped by spiciness)

// Also there is method called reduceRight which works from right to left instead of left to right like reduce method. It is rarely used in practice.

//Just for knowledge 
//There is also an option of reduceRight which runs the array in opposite direction which no one uses


//Sort method
const ticketnumber = [100,42,1,3]
//it is always sorted as a string 
const sortedArray = [...ticketnumber].sort((a,b)=>a-b)
console.log(typeof(sortedArray));


const kitchenOrder = [
     { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
]

const mildReport = kitchenOrder 
.filter(order => order.spicy)
.map(order=>({
    dish:order.dish,
    total:order.price * order.qty
})).toSorted((a,b)=>b-a)

console.log(mildReport);
