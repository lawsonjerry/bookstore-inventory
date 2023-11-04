const inform = console.log;
const { readJSONFile, writeJSONFile } = require("./read_write");

function run() {
  const action = process.argv[2];
  const books = process.argv[3];
  let booksPurchased = readJSONFile("./data", "purchased.json");

  switch (action) {
    case "buy":
      inform(action);
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
      inform(action,booksPurchased );
      break;
    default:
      inform("There was an error.");
  }
}
run()