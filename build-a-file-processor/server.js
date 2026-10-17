// Starter file — add your code here
const http = require("http");
const fs = require('fs')
const fsPromises = require("fs/promises")
const crypto = require("crypto")

async function main() {

const random = crypto.randomBytes(16).toString("hex")
console.log(random)

}
main()
