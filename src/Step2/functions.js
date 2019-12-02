function fizzbuzz(n, m) {
  if (!Number.isInteger(n) || !Number.isInteger(m) || m < n) {
    return false;
  }

  let res = [];

  for (let i = n; i <= m; i++) {
    let num;
    if (i.toString().indexOf("3") > -1) {
      num = "lucky";
    } else {
      num = (i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i;
    }
    res.push(num);
  }

  return res;
}

module.exports = fizzbuzz;
