//There are three function below: to remove one item form a cart, from inventory, and to completely clear the shopping cart

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
    purchased[index].bookQuantity = 0;
    console.log(`your book was successfully removed from inventory`);
    return purchased;
  } else {
    console.log("Book not found. No action taken");
    return purchased;
  }
}

function clearCart(purchased) {
  purchased.splice(0, purchased.length); // Remove all elements from the cart array
  console.log(`Your cart is now empty!`);
  return purchased;
}

module.exports = { removeFromCart, removeFromInventory, clearCart };
