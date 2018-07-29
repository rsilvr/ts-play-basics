export default class Order {

  private customer: string
  private date: Date
  private total: number

  constructor(customer: string, date: Date, total: number) {
    this.customer = customer
    this.date = date
    this.total = total
  }

  // get customerName() {
  //   console.log('Getting name...')
  //   return this.customer
  // }

  // get totalAmount() {
  //   return this.total
  // }

  // get transactionDate() {
  //   return this.date
  // }

  // set transactionDate(date: Date) {
  //   console.log('Updating date...')
  //   this.date = date
  // }

  // toString() : string {
  //   return `${this.customer} bought something for ${this.total.toFixed(2)} at ${this.date.toLocaleDateString()}`
  // }

}