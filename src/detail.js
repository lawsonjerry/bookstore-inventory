const { purchased } = require("../data/purchased");

const demo = [
  {
    ibsn: "3StdFrLJZt",
    bookTitle: "order of the phoenix",
    price: "1499.00",
    author: "Richard Crooks",
    bookGenre: "fiction",
    bookQuantity: "2",
  },

  {
    ibsn: "iiSvXOwRsH",
    bookTitle: "the experience machine",
    price: "1299.00",
    author: "Tomas O'Kon",
    bookGenre: "non-fiction",
    bookQuantity: "1",
  },
];

function detail(purchased, ibsn) {
    
      const books = purchased.find((book) => book.ibsn === ibsn);
      return books.ibsn + " " + books.bookTitle + " " + books.price + " " + books.author;
  

  }

//   console.log(detail(demo,"iiSvXOwRsH"))
  
  module.exports = { detail };
