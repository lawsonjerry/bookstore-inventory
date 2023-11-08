const { purchased } = require("../data/purchased");
const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");


const demo = [
  {
    ibsn: "3StdFrLJZt",
    bookTitle: "order of the phoenix",
    price: "1499.00",
    author: "Richard Crooks",
    bookGenre: "fiction",
    bookQuantity: 2,
  },

  {
    ibsn: "iiSvXOwRsH",
    bookTitle: "the experience machine",
    price: "1299.00",
    author: "Tomas O'Kon",
    bookGenre: "non-fiction",
    bookQuantity: 1,
  },
];

/**Add a cart function where a user can add items to the shopping cart and
 *see the total price and total number of each item */

// function cart(purchased, title, price, genre, quantity, addCart) {
//   const booksPurchased = [];
//   const putBooksInCart = [];

//   if (addCart === "yes") {
//     let book = {
//       ibsn: nanoid(10),
//       bookTitle: title,
//       price: parseFloat(price).toFixed(2),
//       bookGenre: genre,
//       author: faker.name.fullName(),
//       bookQuantity: quantity,
//     };

//     putBooksInCart.push(book);

//     const totalPurchases = putBooksInCart.reduce(
//       (total, book) => total + parseFloat(Number(book.price)),
//       0
//     );

//     //formats the total purchases to two decimal places
//     const formattedTotalPurchases = totalPurchases.toFixed(2);

//      // Returns the total purchased formatted with a dollar sign.
//      return `$${formattedTotalPurchases}` + " " + `Quantity: 
//       ${book.bookQuantity}`;

//     // return totalPurchases;
//     // return putBooksInCart
//   } else {
//     book = {
//       ibsn: nanoid(10),
//       bookTitle: title,
//       price: parseFloat(price).toFixed(2),
//       bookGenre: genre,
//       author: faker.name.fullName(),
//       bookQuantity: quantity,
//     };

//     booksPurchased.push(book);

//     return booksPurchased;
//   }
// }

//want to create a function which to see what books we have purchased and then just move it to a cart. 
//this cart will output the only the price and the quantity of the items in the cart.

let cart = [];

function moveToCart (itemsToMove){
   cart.push(...itemsToMove);
 
  
   const totalCartPurchases = cart.reduce(
          (total, book) => total + parseFloat(Number(book.price)),
          0
        );

    const totalBookQuantity = cart.reduce( 
        (total, book) => total + Number(book.bookQuantity),
        0
        );
 
        //formats the total purchases to two decimal places
        const formattedTotalCartPurchases = totalCartPurchases.toFixed(2);
    
         // Returns the total purchased formatted with a dollar sign.
         return ` Your items have been successfully moved to a cart.\n Total Purchases:$${formattedTotalCartPurchases} \n Total Book Quantity: ${totalBookQuantity}` 

   }
console.log(moveToCart(demo))

module.exports = { moveToCart }
