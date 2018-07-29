import Order from './Order'

const myOrder = new Order('Denis', new Date(), 9.111)
console.log(`Customer name: ${myOrder.customerName}`)
console.log(`Current transaction date: ${myOrder.transactionDate.toLocaleDateString()}`)
myOrder.transactionDate = new Date(2017, 11, 25)
console.log(`Updated date: ${myOrder.transactionDate.toLocaleDateString()}`)