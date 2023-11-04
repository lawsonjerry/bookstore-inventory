const inform = console.log; //logs a message to the console
const { readJSONFile, writeJSONFile } = require("./read_write"); //imported functions used to read and write JSON files
const { buy } = require("./src/buy"); //imported function used to create books

function run() {
  let writeToFile = false;
  let updatedBooksPurchased = [];
  const action = process.argv[2];
  const title = process.argv[3];
  const price = process.argv[4];
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
      inform(action);
      break;
    case "return":
      inform(action);
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
