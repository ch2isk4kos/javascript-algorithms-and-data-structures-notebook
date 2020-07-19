# Recursion

---

## What is Recursion

A function that repeatedly invokes itself until it reaches an end point refered to as a base case.

The Opposite of a Recursive function is one that is Iterative.

---

## The Call Stack

In almost all syntax languages, there is a built in data structure that manages what happens when functions are invoked.

When a function is invoked, it is placed - **pushed** - on the top of the **Call Stack**.

When JavaScript comes across the **`return`** keyword or when functions end, the compiler will remove - **pop**.

</br>

```js
function writeCode() {
  return "tap tap tap tap tap"
}

function eatFood() {
  let meal = cookFood();
  return `Eating ${meal}...`;
}

function cookFood() {
  let items = ["Pizza", "Burrito", "Chopped Cheese"]
  return items[ Math.floor(Math.random() * items.length) ];
}

function startTheDay() {
  // adds to call stack from inside of startTheday()
  // and pops off after invocation
  writeCode();
  eatFood();
  conosle.log("zZZ");
}

startTheDay();

/*

**********************
* Call Stack Process *
**********************

==============
1. startTheDay
==============

==============
2. writeCode
1. startTheDay
==============

==============
writeCode pops off the stack after invocation

1. startTheDay
==============

==============
3. cookFood
2. eatFood
1. startTheDay
==============


==============
cookFood pops off the stack after invocation
eatFood pops off the stack after invocation

1. startTheDay
==============

*/
```

</br>

**NOTE:** When writing Recursive functions, you keep pushing new functions on to the Call Stack.

---

## Recursive VS Iterative Function

Two Essential Parts of a Recursive Function:

1. Base Case
2. Change of Input

### Recursive Function

```js

function countDown(num) {
  
  // is num less than or equal to 0? Passes to next line of code when false.
  if (num <= 0) {
    console.log("Happy New Year!");
    return;
  }
  
  // prints current num
  console.log(num);

  // decrements 1 from num
  num--;
  
  // passes in num - 1 to itself
  countDown(num);
}

// function keeps running until if statement runs true.

countDown(5)
/*
5
4
3
2
1
Happy New Year!
*/
```

### Iterative Function

```js

function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("Happy New Year!");
}

countDown(5);
/*
5
4
3
2
1
Happy New Year!
*/
```

---

### Recursion Exercise

```js
// ===============================
//  1. Comment the Base Case
//  2. Comment the Change of Input
// ===============================

function sumRange(num) {
  // 1. base case: normally involves a conditional
  if (num === 1) return 1;
  //              2. change of input: recursive call
  return num + sumRange(num - 1);
}

sumRange(7);

```

#### Breakdown

```js
sumRange(7);

/*
==========================
      FIRST ITERATION
==========================

function sumRange(7) {
  if (7 === 1) return 1;
  
  return 7 + sumRange(7 - 1);
}

==========================
      SECOND ITERATION
==========================

function sumRange(6) {
  if (6 === 1) return 1;
  
  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
}

==========================
      THIRD ITERATION
==========================

function sumRange(5) {
  if (5 === 1) return 1;
  
  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + sumRange(5 - 1);
}

==========================
      FOURTH ITERATION
==========================

function sumRange(4) {
  if (4 === 1) return 1;
  
  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + sumRange(5 - 1);
         4 + sumRange(4 - 1);
}

==========================
      FIFTH ITERATION
==========================

function sumRange(3) {
  if (3 === 1) return 1;
  
  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + sumRange(5 - 1);
         4 + sumRange(4 - 1);
         3 + sumRange(3 - 1);
}

==========================
      SIXTH ITERATION
==========================

function sumRange(2) {
  if (2 === 1) return 1;
  
  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + sumRange(5 - 1);
         4 + sumRange(4 - 1);
         3 + sumRange(3 - 1);
         2 + sumRange(2 - 1);
}

==========================
    SEVENTH ITERATION
==========================

function sumRange(1) {
  if (1 === 1) return 1;        // true
  
  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + sumRange(5 - 1);
         4 + sumRange(4 - 1);
         3 + sumRange(3 - 1);
         2 + sumRange(2 - 1);
         2 + sumRange(2 - 1);
         1 === BASE CASE
}

==========================
        THE MAGIC
==========================

  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + sumRange(5 - 1);
         4 + sumRange(4 - 1);
         3 + sumRange(3 - 1);
         2 + sumRange(2 - 1);
         1 = BASE CASE

  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + sumRange(5 - 1);
         4 + sumRange(4 - 1);
         3 + sumRange(3 - 1);
         2 + 1  = 3
             -

  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + sumRange(5 - 1);
         4 + sumRange(4 - 1);
         3 + 3 = 6
             -

  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + sumRange(5 - 1);
         4 + 6 = 10
             -

  return 7 + sumRange(7 - 1);
         6 + sumRange(6 - 1);
         5 + 10 = 15
             --

  return 7 + sumRange(7 - 1);
         6 + 15 = 21
             --

  return 7 + 21 = 28
             --

==========================
          OUTPUT
==========================

function sumRange(num) {
  if (num === 1) return 1;
  
  return 7 + 21;           // 28
}
  
*/
```
