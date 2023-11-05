const { demo } = require("../data/demo")
const { readJSONFile, writeJSONFile } = require("../read_write");

let readDemo = readJSONFile("../data", "demo");


console.log(readDemo)