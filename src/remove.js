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

function remove(purchased, ibsn) {
  const index = purchased.findIndex((book) => book.ibsn === ibsn);

  if (index > -1) {
    purchased.splice(index, 1);
    console.log(`your book was successfully removed`);
    return purchased;
  } else {
    console.log("Book not found. No action taken");
    return purchased;
  }
}

// console.log(remove(demo, "3StdFrLJZt"));

module.exports = { remove };
