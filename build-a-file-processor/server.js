
const fsPromises = require("fs/promises");

fsPromises
  .writeFile("assets/output.txt", "Hello, freeCodeCamp!")
  .then(() => {
    console.log("Listo");
  });