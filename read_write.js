const { readFileSync, writeFileSync } = require("node:fs"); //imported node utility to read and write JSON files

//this function reads JSON files
function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, "utf8");
  return collection ? JSON.parse(collection) : [];
}

//this function writes JSON files and handles any errors to prevent malformed data
function writeJSONFile(path, fileName, data) {
  try {
  const jsonString = JSON.stringify(data);

  writeFileSync(`${path}/${fileName}`, jsonString , { encoding: "utf-8" });
}catch (error){
  //this handled any JSON errors
  console.log(`Error writing to file ${fileName}: ${error.message}`)
}
}

module.exports = {
  readJSONFile,
  writeJSONFile,
};