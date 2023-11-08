const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");

/**A function will store/write this data in 
 a file and return (ibsn, book title, price, genre, author, quantity) */

const purchased = [];

// function buy(purchased, title, price, genre, quantity) {
//   const book = {
//     ibsn: nanoid(10),
//     bookTitle: title,
//     price: parseFloat(price).toFixed(2),
//     author: faker.name.fullName(),
//     bookGenre: genre,
//     bookQuantity: quantity
//   };

//   purchased.push(book);

//   return purchased;
// }
const currentInventory = [
{
  "ibsn": "9Fz8jtpcH2",
  "bookTitle": "Hurt So Good",
  "price": "$6.71",
  "author": "Ada Konopelski PhD",
  "bookGenre": "fiction",
  "bookQuantity": "6"
},
{
  "ibsn": "6uFN5fDBa3",
  "bookTitle": "Won't Get Fooled Again",
  "price": "$6.41",
  "author": "Wilbert Armstrong",
  "bookGenre": "fiction",
  "bookQuantity": "8"
}
]

function buy(inventory, ibsn, quantity) {
  for (let book of inventory) {
    if (book.ibsn === ibsn) {
      if (book.bookQuantity >= quantity) {
        book.bookQuantity -= quantity;
        console.log(`You have purchased ${quantity} copies of ${book.bookTitle}`)
       }
    }
  }
}
  

console.log(currentInventory)
console.log(buy(currentInventory, "6uFN5fDBa3", "2" ))
console.log(currentInventory)
