
# BOOK INVENTORY

### Overview 
This is a command-line inventory application for a bookstore. It allows employees to create new items, update items, view a list of items, see details of one item, and delete items.

### Usage
To use the application,
1. Fork and clone this repository.
1. Navigate to the project directory and run npm install.
1. Turn this project into a Node.js project by running `npm init -y`.
1. Create a `.gitignore` and add the appropriate files and folders
1. Open up the repository in VSCode.
1. Create an `index.js` file.
1. Add `faker-js@5`, `jest@29`, `nanoId@3`, and `chalk@?`  to your dev dependencies.

 Then, you can use the following commands to manage your inventory:
 - To view a list of all items in stock:node index.js view
- To buy an item:node index.js buy <isbn> <quantity>
- To remove an item from the cart:node index.js removecart <isbn>
- To update the quantity of an item in the cart:node index.js update <isbn> <new_quantity>

### Features

- Create new inventory items using Faker.js and nanoId.
- View a list of all items in stock.
- Buy items from stock.
- Add items to a shopping cart.
- Remove items from the shopping cart.
- Update the quantity of items in the shopping cart.
- View the full details of a specific item.

### Troubleshooting

If you are having trouble using the application, please check the following:

- Make sure that you have installed Node.js and npm.
- Make sure that you are running the commands from the project directory.
- Make sure that you are entering the correct ISBN numbers when buying or removing items.

### Additional notes

- The application stores inventory data in the inventory.json file.
- The application stores cart data in the cart.json file.
- The application uses Jest for testing.

