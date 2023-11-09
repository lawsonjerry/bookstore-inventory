const inventory = require("../data/inventory");

const { total } = require("../src/total");

describe("total", () => {
  test("should return the correct total purchase amount, even when there are books with a quantity of 0", () => {
    const purchases = [
      {
        ibsn: "6uFN5fDBa3",
        bookTitle: "Won't Get Fooled Again",
        price: "$6.41",
        bookQuantity: 0,
      },
      {
        ibsn: "OFYw9qgwL9",
        bookTitle: "White Rabbit",
        price: "$9.09",
        bookQuantity: "5",
      },
      {
        ibsn: "pXKG-P7sN8",
        bookTitle: "How Much is That Doggy in the Window?",
        price: "$10.01",
        bookQuantity: "9",
      },
      {
        ibsn: "rb6WqRfvWI",
        bookTitle: "One Bad Apple",
        price: "$8.16",
        bookQuantity: "10",
      },
      {
        ibsn: "-7Aq3WHKGM",
        bookTitle: "Don't Be Cruel",
        price: "$9.89",
        bookQuantity: "5",
      },
    ];

    const expectedTotal = `$43.56 \n Total Book Quantity: 29` ;

    const actualTotal = total(purchases);

    expect(actualTotal).toBe(expectedTotal);
  });
});
