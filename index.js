const inform = console.log; //logs a message to the console
const { readJSONFile, writeJSONFile } = require("./read_write"); //imported functions used to read and write JSON files
const { buy } = require("./src/buy"); //imported function used to create books
const { detail } = require("./src/detail") //imported function used to view detail of book by ibsn
const { remove } = require("./src/remove") //imported function used to remove a book by ibsn

function run() {
  let writeToFile = false;
  let updatedBooksPurchased = [];
  const action = process.argv[2];
  const title = process.argv[3];
  const price = process.argv[4];
  const ibsn = process.argv[3]
  const genre = process.argv[5];
  const quantity = process.argv[6];

  let booksPurchased = readJSONFile("./data", "purchased.json");

  switch (action) {
    case "buy":
      updatedBooksPurchased = buy(
        booksPurchased,
        title,
        price,
        genre,
        quantity
      );
      inform(action, updatedBooksPurchased);
      writeToFile = true;
      break;
    case "cart":
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
      inform(action);
      break;
    case "update":
      inform(action);
      break;
    case "view":
      inform(action, booksPurchased);
      break;
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("./data", "purchased.json",updatedBooksPurchased)
  }
}
run();


