function detail(purchased, ibsn) {
  const books = purchased.find((book) => book.ibsn === ibsn);

  if (!book) {
    return "Book not found.";
  }
  return (
    books.ibsn +
    " " +
    books.bookTitle +
    " " +
    books.price +
    " " +
    books.author +
    " " +
    `Quantity: ${books.bookQuantity}`
  );
}

module.exports = { detail };
