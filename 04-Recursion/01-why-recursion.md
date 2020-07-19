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
