function buy(inventory, ibsn, quantity) {
  for (let book of inventory) {
    if (book.ibsn === ibsn) {
      if (Number(book.bookQuantity) >= quantity) {
        book.bookQuantity = Number(book.bookQuantity - quantity);
        console.log(`You have purchased ${quantity} copy of ${book.bookTitle}`);
        return book;
      }
      if (Number(book.bookQuantity) < quantity) {
        console.log(`We apologize but this book is out of stock`);
      return book;
      }
    }
    if (book.ibsn !== ibsn) {
      console.log("Book not found. No action taken");
      break;
    }
  }
}

module.exports = { buy };
