function fizzbuzz(n, m) {
  if (!Number.isInteger(n) || !Number.isInteger(m) || m < n) {
    return false;
  }

  let fizzbuzzObj = {
    result: [],
    report: {
      fizz: 0,
      buzz: 0,
      fizzbuzz: 0,
      lucky: 0,
      integer: 0
    }
  };

  fizzbuzzObj.report.integer = Math.abs(m - n) + 1;

  for (let i = n; i <= m; i++) {
    let num;
    if (i.toString().indexOf("3") > -1) {
      num = "lucky";
      fizzbuzzObj.report.lucky++;
      fizzbuzzObj.report.integer--;
    } else {
      num = (i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i;
      if (num == "fizz") {
        fizzbuzzObj.report.fizz++;
        fizzbuzzObj.report.integer--;
      }
      if (num == "buzz") {
        fizzbuzzObj.report.buzz++;
        fizzbuzzObj.report.integer--;
      }
      if (num == "fizzbuzz") {
        fizzbuzzObj.report.fizzbuzz++;
        fizzbuzzObj.report.integer--;
      }
    }
    fizzbuzzObj.result.push(num);
  }

  return fizzbuzzObj;
}

module.exports = fizzbuzz;
