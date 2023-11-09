const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");

const purchased = [];



function buy(inventory, ibsn, quantity) {
  for (let book of inventory) {
    if (book.ibsn === ibsn) {
      if (Number(book.bookQuantity) >= quantity) {
        book.bookQuantity = Number(book.bookQuantity - quantity);
        console.log(`You have purchased ${quantity} copy of ${book.bookTitle}`)
        return book
       }
    } //create a edge case if the quantity is less than what is being asked for
  }
 
}
  

module.exports = { buy };