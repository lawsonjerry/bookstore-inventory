const inform = console.log; //logs a message to the console

const { readJSONFile, writeJSONFile } = require("./read_write"); //imported functions used to read and write JSON files
const { buy } = require("./src/buy"); //imported function used to buy books to add to cart
const { detail } = require("./src/detail"); //imported function used to view the detail of book in the cart by ibsn
const {
  removeFromCart,
  removeFromInventory,
  clearCart,
} = require("./src/remove"); //imported functions used to remove books
const { update } = require("./src/update"); //imported function used to decrease/increase book quantity by one
const { total } = require("./src/total"); //imported function used to view total purchases in a cart

function run() {
  const action = process.argv[2]; //command line call to action
  let ibsn = process.argv[3]; // command line to enter ibsn
  const quantity = process.argv[4]; // command line call to add the quanity to purchase
  const change = process.argv[4]; // command line call to change the quantity of a book all ready in stock
  let booksInCart = readJSONFile("./data", "cart.json"); // variable that stores books added to the shopping cart
  let booksInInventory = readJSONFile("./data", "inventory.json"); //variable that stores the bookstores inventory

  switch (action) {
    case "buy":
      booksInCart.push(buy(booksInInventory, ibsn, quantity));
      inform(action, booksInCart);
      writeJSONFile("./data", "cart.json", booksInCart);
      break;
    case "detail":
      const viewDetail = detail(booksInCart, ibsn);
      inform(action, viewDetail);
      break;
    case "removecart":
      const removeBookFromCart = removeFromCart(booksInCart, ibsn);
      inform(action, booksInCart);
      writeJSONFile("./data", "cart.json", booksInCart);
      break;
    case "clearcart":
      const clearTotalCart = clearCart(booksInCart);
      inform(action, booksInCart);
      writeJSONFile("./data", "cart.json", booksInCart);
      break;
    case "removeinventory":
      booksInInventory = removeFromInventory(booksInCart, ibsn);
      inform(action, booksInInventory);
      writeJSONFile("./data", "inventory.json", booksInInventory);
      break;
    case "total":
      totalPurchase = total(booksInCart);
      inform(action, totalPurchase);
      break;
    case "update":
      booksInCart = update(booksInCart, ibsn, Number(change));
      writeJSONFile("./data", "cart.json", booksInCart);
      inform(action, booksInCart);
      break;
    case "view":
      inform(action, booksInInventory);
      break;
    default:
      inform("There was an error.");
  }
}
run();
