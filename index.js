const inform = console.log; //logs a message to the console

const { readJSONFile, writeJSONFile } = require("./read_write"); //imported functions used to read and write JSON files
const { buy } = require("./src/buy"); //imported function used to create books
const { detail } = require("./src/detail"); //imported function used to view detail of book by ibsn
const { removeFromCart, removeFromInventory } = require("./src/remove"); //imported function used to remove a book by ibsn
const { update } = require("./src/update"); //imported function used to decrease/increase book quantity by one
const { total } = require("./src/total"); //imported function used to view total purchases

function run() {
  let writeToFile = false;
  let updatedBooksPurchased = [];
  let updatedBooksInCart = [];
  const action = process.argv[2];
  let ibsn = process.argv[3];
  const quantity = process.argv[4];
  const change = process.argv[4];



  let booksPurchased = readJSONFile("./data", "purchased.json");
  let booksInCart = readJSONFile("./data", "cart.json");
  let booksInInventory = readJSONFile("./data", "inventory.json");

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
    case "removeinventory":
      booksInInventory  = removeFromInventory(booksInCart, ibsn);
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
  if (writeToFile) {
    writeJSONFile("./data", "purchased.json", updatedBooksPurchased);
  }
}
run();
