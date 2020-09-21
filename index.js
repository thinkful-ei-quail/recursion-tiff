// Counting Sheep 
// write a recursion function that counts sheep jumping over a fence until no sheep are left
// input : 3
// output: 3: Another jumps over the fence
// output: 2: Another jumps over the fence
// output: 1: Another jumps over the fence
// output:  : All sheep jumped over the fence

function countingSheep(n) {
  // base case
  if (n <= 0) {
    return console.log('All sheep jumped over the fence')
  } // recursive function
   console.log( `${n}: Another sheep jumps over the fence`)
   return countingSheep(n-1)
}
countingSheep(5)

// Power Calc
// write a function that takes 2 params, an int as a base and another int as an exponent
// return the value of the base raise to the power of the exponent
// powerCalc(10, 2) should return 100
// powerCalc(10, -2) should return exponent should be >= 0
// input base integer
// output base to the power of # of exponents

function powerCalc(b, ex) {
  if (ex < 0) {
    return console.log(`Exponent ${ex} needs to be >= 0`)
  } else if (ex === 0) {
      return 1
  } else {
  return b * powerCalc(b, ex - 1)}
}
console.log(powerCalc(10, 2))


// Reverse String 
// write a function that reverses a string
// input string
// output gnirts

function revString(str) {
    return (str === '') ? '' : revString(str.substr(1)) + str.charAt(0);
  }
  revString("hello");

// nth Triangular Number
// Calculate the nth triangular number
// By multiplying points of triangle 
// create a loop
// 1 3 6 10 15 21 28 36 45

function triangle(n) {
  if (n <= 1) {
    return n
  } else {
   return n + triangle(n - 1)
  }
}
console.log(triangle(3))

// String Splitter
// split input into strings in an arr seperated by ,'s
// input 02/20/2020
// output ["02", "20", "2020"]

function splitter(str, limit) {
  if (!str.includes(limit)) return str
  const arr = []
  let index = str.indexOf(limit) // 
  let beg = str.substr(0 , index) // 11
  let mid = str.substr(3, index) // 23
  let end = str.substr(6, 8, index) // 1995
  arr.push(beg, mid, end)
  return splitter(arr)
}
console.log(splitter('11/23/1995', '/'))

// Fibonacci
// write a recursive function that prints the Fibonacci sequence of a given number
// ea number is the sum of the 2 preceding numbers
// 1 1 2 3 5 8 13

function fibonacci(n) {
  if (n <= 1) return n
    else return fibonacci(n - 1) + fibonacci(n-2)
}
console.log(fibonacci(6))

// Factorial
// write a recursive function that finds the factorial of a given number
// factorial of 5 === 5 * 4 * 3 * 2 * 1 = 120 
function factorial(n) {
  if (n <= 1) return n
    else return factorial(n - 1) * n
}
console.log(factorial(5))

// Find a way out the maze
