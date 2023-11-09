//This is how we create inventory
const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");
const { readJSONFile, writeJSONFile } = require("../read_write"); //imported functions used to read and write JSON files

let booksInInventory = readJSONFile("../data", "inventory.json");

function makeInventory() {
  const books = {
    ibsn: nanoid(10),
    bookTitle: faker.music.songName(),
    price: faker.finance.amount(5, 15, 2, "$"),
    author: faker.name.fullName(),
    bookGenre: faker.helpers.arrayElement(["fiction", "non-fiction"]),
    bookQuantity: faker.finance.amount(5, 10, 0),
  };

  booksInInventory.push(books);
  writeJSONFile("../data", "inventory.json", booksInInventory);
  console.log(`${books} has been added to inventory`);

  return booksInInventory;
}

makeInventory();
