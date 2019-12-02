const fizzbuzz = require("./functions");

let n = process.argv[2];
let m = process.argv[3];

let result = fizzbuzz(parseInt(n), parseInt(m));

if (result instanceof Object) {
  console.log(result.result.join(" "));
  console.log(result.report);
} else {
  console.log(result);
}
