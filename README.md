



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

# Instructions

- "node index.js view" shows you which books are in stock
- To create new items in inventory, run the makeInventory function in the inventory.js file.
- "node index.js buy (ibsn) (quanity)" If a user needs to buy something, they need to write buy, the ibsn of the items they want to buy, and the quantity.
- "node index.js remove (ibsn)" removes a book from the cart based on the ibsn

