



# BOOK INVENTORY

You will build a command-line Inventory Application for a bookstore. It will be an application where employees can keep track of the store's inventory. Employees can create new items, update items, see a list of items, see details of one item and delete items. 


## Getting Started

1. Fork and clone this repository.
1. Navigate to the cloned repository's directory on your command line.
1. Turn this project into a Node.js project by running `npm init -y`.
1. Create a `.gitignore` and add the appropriate files and folders
1. Open up the repository in VSCode.
1. Create an `index.js` file.

1. Add `faker-js@5`, `jest@29`, `nanoId@3`, and `chalk@?`  to dev dependencies.

# Features

- In, `inventory.js,` run ```makeInventory()``` to create new inventory using @faker & @nanoId. Items are stored in the `inventory.json` file
- type "node index.js view" in the command-line to view what books are in stock
- type "node index.js buy (ibsn) (quantity)" to buy an item in stock. Make sure to write in the correct "ibsn" and the quantity to add the item to cart (cart.json)
- type "node index.js removecart (ibsn)" to remove a book from the cart based on the ibsn. By default, it only removes one item from the book's overall quantity


# Description
**files in package**
- `index.js`is where the application runs from 

