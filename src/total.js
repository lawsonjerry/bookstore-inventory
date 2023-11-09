//This function calculates the total purchases in the cart and returns book quantity as well

function total(purchases) {
  //calculate the total purchases
  const totalPurchases = purchases.reduce(
    (total, book) => total + Number(book.price.replace(/[^0-9\.-]/g, "")),//had to use regEx to solve the "NAN" issue
    0
  );

  const totalBookQuantity = purchases.reduce(
    (total, book) => total + Number(book.bookQuantity),
    0
  );

  //formats the total purchases to two decimal places
  const formattedTotalPurchases = Number(totalPurchases.toFixed(2));

  // Returns the total purchase plue book quantity
  return `$${formattedTotalPurchases} \n Total Book Quantity: ${totalBookQuantity}`;
}

module.exports = { total };
