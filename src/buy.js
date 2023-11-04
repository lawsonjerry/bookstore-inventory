const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");

/**A function will store/write this data in 
 a file and return (ibsn, book title, price, genre, author, quantity) */

const purchased = [];

function buy(purchased, title, price, genre, quantity) {
  const book = {
    ibsn: nanoid(10),
    bookTitle: title,
    price: parseFloat(price).toFixed(2),
    author: faker.name.fullName(),
    bookGenre: genre,
    bookQuantity: quantity
  };

  purchased.push(book);

  return purchased;
}






module.exports = { buy };