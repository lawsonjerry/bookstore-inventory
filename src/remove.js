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

function removeFromCart(purchased, ibsn) {
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

function removeFromInventory(purchased, ibsn) {
  const index = purchased.findIndex((book) => book.ibsn === ibsn);

  if (index > -1) {
    purchased.splice(index, 1);
    purchased[index].bookQuantity = 0
    console.log(`your book was successfully removed from inventory`);
    return purchased;
  } else {
    console.log("Book not found. No action taken");
    return purchased;
  }
}

function clearCart(purchased) {
  purchased.splice(0, purchased.length); // Remove all elements from the cart array
  console.log(`Your cart is now empty!`)
  return purchased;
}

// console.log(remove(demo, "3StdFrLJZt"));

module.exports = { removeFromCart, removeFromInventory, clearCart  };
