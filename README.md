# fizzbuzz-tdd

## TODO

- The fizzbuzz generation is mixed in with its reporting. Code written this way breaks the single responsibility principle and as such may be harder to test, reason about, and change.
- When I exercise the FizzBuzz with an invalid range of (start: 1, end: 0), I get "false" on the console, which doesn't tell me what I did wrong and forces me to read the code to find out.
- Test should have more descriptive titles like "decimal numbers are not allowed" instead of "fizzbuzz 3 16.5 returns".

## Requirements

Node.js and npm

## Running fizzbuzz

Navigate to desired Step:

```sh
$ cd src/Step1
```

Run program:

```sh
$ node fizzbuzz 2 12
```

## Running Test Suites

Install Jest:

```sh
$ npm install
```

Run all Test Suites:

```sh
$ npm test
```
