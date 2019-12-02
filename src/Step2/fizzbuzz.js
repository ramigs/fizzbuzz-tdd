const fizzbuzz = require("./functions");

let n = process.argv[2];
let m = process.argv[3];

let result = fizzbuzz(parseInt(n), parseInt(m));

Array.isArray(result) ? console.log(result.join(" ")) : console.log(result);
