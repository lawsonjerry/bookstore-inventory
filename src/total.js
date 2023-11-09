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



function total (purchases) {
    //calculate the total purchases
    const totalPurchases = purchases.reduce(
      (total, book) => total + Number(book.price.replace(/[^0-9\.-]/g, '')),
      0
    );

    const totalBookQuantity = purchases.reduce( 
      (total, book) => total + Number(book.bookQuantity),
      0
      );
  
    //formats the total purchases to two decimal places
    const formattedTotalPurchases = Number(totalPurchases.toFixed(2));
  
    // Returns the total donations.
    return `$${formattedTotalPurchases} \n Total Book Quantity: ${totalBookQuantity}`
  }


  module.exports = { total }