// Old way to write promise
function prepareOrderCB(dish, cb) {
    setTimeout(() => cb(null, { dish, status: 'prepared' }), 100)
}
//multiple order
function pickupOrderCB(order, cb) {
    setTimeout(() => cb(null, { ...order, status: 'picked-up' }), 100)
}

function dilverOrderCB(order, cb) {
    setTimeout(() => cb(null, { ...order, status: 'delivered' }), 100)
}

prepareOrderCB('Biryani', (err, order) => {
    if (err) return console.log(err)
    pickupOrderCB(order, (err, order) => {
        if (err) return console.log(err)
        dilverOrderCB(order, (err, order) => {
            if (err) return console.log(err)
            console.log(`${order.dish}: ${order.status}`)
        })
    })
})



//Recent Promise
// Prmoise state pending, fulfilled, rejected

function prepareOrder(dish) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!dish) {
                reject(new Error("No dish is there"))
                return
            }
            console.log(`${dish} is ready`)
            resolve({ dish, status: 'prepared' })
        }, 100)
    })
}

function pickupOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!order) {
                reject(new Error("No order is there"))
                return
            }
            console.log(`${order} is ready`)
            resolve({ ...order, status: 'pickedup' })
        }, 100)
    })
}

function deliverOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!order) {
                reject(new Error("No order is there"))
                return
            }
            console.log(`${order} is delivered`)
            resolve({ ...order, status: 'delivered' })
        }, 100)
    })
}

prepareOrder('Chai')
    .then(order => { pickupOrder(order) }) // then only handles the resolve part 
    .then(order => { deliverOrder(order) })
    .catch() // error propogation | handles the reject part