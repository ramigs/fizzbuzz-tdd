function fizzbuzz(n, m) {
  if (!Number.isInteger(n) || !Number.isInteger(m) || m < n) {
    return false;
  }

  let res = [];

  for (let i = n; i <= m; i++) {
    let num = (i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i;
    res.push(num);
  }

  return res;
}

module.exports = fizzbuzz;
