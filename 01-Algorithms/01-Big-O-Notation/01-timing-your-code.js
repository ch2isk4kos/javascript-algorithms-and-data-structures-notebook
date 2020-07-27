/*
Write a function that calculates the sum of all numbers
from 1 up (and including) some number x. 
*/

// Solution 1
function addingUpTo(n) {
  let total = 0;  // accumulator
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

addingUpTo(3);  // 3
addingUpTo(4);  // 10
addingUpTo(7);  // 28
/* 
  0. 1
  1. 1 + 2 = 3
  2. 3 + 3 = 6
  3. 6 + 4 = 10
  4. 10 + 5 = 15
  5. 15 + 6 = 21
  6. 21 + 7 = 28
*/

// Solution 2
function addingUpTo(x) {
  return x * (x + 1) / 2;
}

var time1 = performance.now();
addingUpTo(1000000000);

var time2 = performance.now();
addingUpTo(`Time elapsed: ${(time2 - time1) / 1000} seconds.`);

/*
Which Solution is Better?

What does it mean to be better?
* faster
* less memory-intensive
* more readable
* brevity by minimizing the number of characters in your code.

If Not Time Then What?
Rather than counting seconds which rapidly change,
count the number of operations the computer has to perform.
*/

// Counting Operations
function addingUpTo(n) {
  return n * (n + 1) / 2;
}

/* 
1. Multiplication
2. Addition
3. Division

Three operations regardless of the size of `n`.
*/

function addingUpTo(x) {
  let total = 0;                  // 1 assignment
  for (let i = 1; i <= x; i++) {  //  (1 assignment + `n` comparisons + `n` additions && `n` assignments)
    total += i;                   // `n` additions && `n` assignments
  }
  return total;
}

/*
Solution 2 seems to have a lot more operations.
Too many to count out traditionally.

Depending on what you count, the number of operations
can be as low as 2n or as high as 5n + 2

Regardless of the exact number - as `n` grows,
the number of operations grows roughly proportionally with `n`.
*/






