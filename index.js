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
    // let mySmallMaze = [
        //    0    1    2            
        //0 [' ', ' ', ' '],
        //1 [' ', '*', ' '],
        //2 [' ', ' ', 'e']
    // ];
    // 
    // let maze = [
        //    0    1    2    3    4    5    6
        //0 [' ', ' ', ' ', '*', ' ', ' ', ' '],
        //1 ['*', '*', ' ', '*', ' ', '*', ' '],
        //2 [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        //3 [' ', '*', '*', '*', '*', '*', ' '],
        //4 [' ', ' ', ' ', ' ', ' ', ' ', 'e']
    // ];
// a possible exit path can be RRDDLLDDRRRRRR
// L  R  U  D

    let maze = [
        [' ', ' ', ' ', '*', ' ', ' ', ' '],
        ['*', '*', ' ', '*', ' ', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', '*', '*', '*', '*', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'e']
    ];

function mazeRunner(x, y, path, maze) {
    if(x < 0 || y < 0 || y >= maze.length || x >= maze[y].length || maze[y][x] === '*') {
      return null
    }
    if(maze[y][x] === 'e') {
      return path
    }
  
    maze = maze.map(row => [...row])
    maze[y][x] = '*'
  
    return mazeRunner(x + 1, y, path + 'R', maze) 
      || mazeRunner(x - 1, y, path + 'L', maze) 
      || mazeRunner(x, y + 1, path + 'D', maze) 
      || mazeRunner(x, y - 1, path + 'U', maze)
  
  }
  
  console.log(mazeRunner(0, 0, '', maze))
  
  //All maze paths
  
  function findAllPaths(x, y, path, maze) {
    if(x < 0 || y < 0 || y >= maze.length || x >= maze[y].length || maze[y][x] === '*') {
      return []
    }
    
    if(maze[y][x] === 'e'){
      return [path]
    }
    maze = maze.map(row => [...row])
    
    maze[y][x] = '*'
    return [
      ...findAllPaths(x + 1, y, path + 'R', maze),
      ...findAllPaths(x - 1, y, path + 'L', maze), 
      ...findAllPaths(x, y - 1, path + 'U', maze), 
      ...findAllPaths(x, y + 1, path + 'D', maze)
    ]
  
  }
  
  console.log(findAllPaths(0, 0, '', maze))

  // Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order.
// Write a function that creates an anagram list, listing all the rearrangements of a given word.
// For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".
// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words.
// For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa".
// This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east".
// Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

function makeAnagrams(str) {
    if(str.length < 2) {
      return [str]
    }
  
    const prefixArr = str.split('')
    return [...new Set(prefixArr.reduce((a, c, i) => {
      return [...a, ...makeAnagrams(prefixArr.slice(0, i).join('') + prefixArr.slice(i + 1).join('')).map(suffix => c + suffix)]
    }, []))]
  }
  
  console.log(makeAnagrams('bee'))

  // 11. Organization Chart
 // Write a recursive function that prints the following organization chart.
 // Your output should be as shown below with proper indentation to show the hierarchy.
 // You may store the org chart in an object and send that as an input to your program.
  
  const orgChart = {
    name: 'Zuckerberg',
    directReports: [
      {
        name: 'Schroepfer',
        directReports: [
          {
            name: 'Bowsworth',
            directReports: [
              {name: 'Steve',directReports: []},
              {name: 'Kyle',directReports: []},
              {name: 'Andra',directReports: []},
            ]
          },
          {
            name: 'Zhao',
            directReports: [
              {name: 'Richie', directReports: []},
              {name: 'Sofia', directReports: []},
              {name: 'Jen',directReports: []},
            ]
          }
        ],
      },
      {
        name: 'Schrage',
        directReports: [
          {
            name: 'VanDyck',
            directReports: [
              {name: 'Sabrina', directReports: []},
              {name: 'Michelle', directReports: []},
              {name: 'Josh', directReports: []}
            ]
          },
          {
            name: 'Swain',
            directReports: [
              {name: 'Blanch', directReports: []},
              {name: 'Tom', directReports: []},
              {name: 'Joe', directReports: []}
            ]
          }
        ]
      },
      {
        name: 'Sandberg',
        directReports: [
          {
            name: 'Goler',
            directReports: [
              {name: 'Eddie', directReports: []},
              {name: 'Julie', directReports: []},
              {name: 'Annie', directReports: []}
            ]
          },
          {
            name: 'Hernandez',
            directReports: [
              {name: 'Rowi', directReports: []},
              {name: 'Inga', directReports: []},
              {name: 'Morgan', directReports: []}
            ]
          },
          {
            name: 'Moissinac',
            directReports: [
              {name: 'Amy', directReports: []},
              {name: 'Chuck', directReports: []},
              {name: 'Vinni', directReports: []}
            ]
          },
          {
            name: 'Kelley',
            directReports: [
              {name: 'Eric', directReports: []},
              {name: 'Ana', directReports: []},
              {name: 'Wes', directReports: []}
            ]
          }
        ]
      }
    ]
  }
  
  function printOrgChart(orgObj, indent = '') {
    console.log(indent + orgObj.name)
    indent += '\t'
    orgObj.directReports.forEach(person => printOrgChart(person, indent))
  }
  
  printOrgChart(orgChart)

//  12. Binary Representation
// Write a recursive function that prints out the binary representation of a given number.
// For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output.
// Note that the binary representation of 0 should be 0.
  
  function convertToBinary(num) {
    num = num|0
    if(num <= 1) {
      return num.toString()
    }
    const lsb = (num % 2).toString()
    return convertToBinary(num/2) + lsb
  }
  
  console.log(convertToBinary(10))