const inform = console.log; //logs a message to the console
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


const { readJSONFile, writeJSONFile } = require("./read_write"); //imported functions used to read and write JSON files
const { buy } = require("./src/buy"); //imported function used to create books
const { detail } = require("./src/detail") //imported function used to view detail of book by ibsn
const { remove } = require("./src/remove") //imported function used to remove a book by ibsn
const { update } = require("./src/update") //imported function used to decrease/increase book quantity by one
const { total } = require("./src/total") //imported function used to view total purchases 
const { moveToCart } = require("./src/cart") //imported function to move items bought into cart



function run() {
  let writeToFile = false;
  let updatedBooksPurchased = [];
  let updatedBooksInCart = [];
  const action = process.argv[2];
  const title = process.argv[3];
  const price = process.argv[4];
  const ibsn = process.argv[3]
  const genre = process.argv[5];
  const quantity = process.argv[6];
  const change = process.argv[4];

  let booksPurchased = readJSONFile("./data", "purchased.json");
  let booksInCart = readJSONFile("./data", "cart.json");
  let booksInInventory = readJSONFile("./data", "inventory.json");

  switch (action) {
    case "buy":
     
      // const confirmAddToCart = rl.question("Would you like to add this book to your cart? (Y/N)");

      // if (confirmAddToCart === "Y" || confirmAddToCart === "y"){
      //   //move the book the the cart using the 'moveToCart' function
      //   updatedBooksInCart = moveToCart(booksPurchased, title, price, genre, quantity)
      
      // inform (action,updatedBooksInCart)
      // writeJSONFile("./data", "cart.json", updatedBooksInCart);

    
      // } else {
      //   updatedBooksPurchased = buy(booksPurchased, title, price, genre, quantity);
      //   inform (action, 'Book was not added to cart', updatedBooksPurchased )
      //   writeToFile = true;
      // }
      // updatedBooksPurchased = buy(
      //   booksPurchased,
      //   title,
      //   price,
      //   genre,
      //   quantity
      // );
      // inform(action,updatedBooksPurchased);
    
      break;
    case "cartAdd":
      inform(action);
      break;
    case "detail":
      const viewDetail = detail(booksPurchased, ibsn)
      inform(action, viewDetail);
      break;
    case "remove":
      const removeBook = remove(booksPurchased, ibsn)
      inform(action, removeBook);
      break;
    case "total":
      totalPurchase = total(booksPurchased)
      inform(action, totalPurchase);
      break;
    case "update":
      updatedBooksPurchased = update(booksPurchased, ibsn, Number(change))
      writeToFile = false;
      inform(action, updatedBooksPurchased);
      break;
    case "view":
      inform(action, booksInInventory);
      break;
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("./data", "purchased.json",updatedBooksPurchased)
  }
}
run();


