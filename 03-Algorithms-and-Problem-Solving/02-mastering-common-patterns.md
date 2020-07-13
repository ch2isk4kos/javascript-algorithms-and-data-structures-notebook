# Algorithms and Problem Solving: Mastering Common Problem Solving Patterns

---

## Solving Algorithms

**Devise a Plan**

1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve/Simplify
5. Look Back and Refactor

**Master Common Problem Solving Patterns**

* Frequency Counters
* Two Point Problems
* Divide and Conquer
* Sliding Window
* Dynamic Programming
* Greedy Algorithms
* Backtracking
* many more...

---

## Frequency Counter Pattern

A **Frequency Counter** uses objects and sets to collect values or frequencies or values.

Frequency Counters can avoid the need of nested loops and their Big O Notation of O( n<sup>2</sup> ) quadratic operations with arrays/strings.

**NOTE:** This pattern is not professionally referred to as a Frequency Counter. In fact, there is no "offical" terminology for it. The instructor is using this term because it uses an object to collect a bunch of values and their frequencies.

It is useful in algorithms and challenges when you have multiple pieces of data and multiple inputs to compare them to see if they consist of similar values.

</br>

#### A Solution to a Problem

```js
// ======================================================
// WRITE A FUNCTION WHICH ACCEPTS TWO ARRAYS.

// THE FUNCTION SHOULD RETURN TRUE IF EVERY VALUE IN THE
// ARRAY HAS ITS CORRESPONDING VALUE SQUARED IN THE 
// SECOND ARRAY. 

// THE FREQUENCY OF VALUES MUST BE THE SAME.
// ======================================================

function same(arr1, arr2) {
  // if the size of each array doesn't match - return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // set a variable pointing to squared value of each element
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    // if the correct index is not found - return false
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2)
    
    // otherwise it removes the correct index and moves on to the next element
    arr2.splice(correctIndex, 1)
  }
  return true;
}

/*

===================
The Visual Process:
===================

Say you had these 2 arrays as inputs:
[1, 2, 3, 2] and [9, 1, 4, 4]

They both have the same amount of elements so the first
if statement passes

The it loops through each element of the first array:
[1, 2, 3, 2]

1 is the first element so that gets squared and checked to see 
if that squared value is present in the second array:
[9, 1, 4, 4] 

The square root of 1 is 1 and that is present in the second array 
which gets removed:
[9, 4, 4]

Then moves onto the next element of the first array.

2 is the second element in the first array.
The square root of 2 is 4.

There is a 4 present in the second array, so it gets removed as well:
which gets removed:
[9, 4]

Forward march...

3 is the third element of the first array.
The square root of 3 is 9.

There is a 9 present in the second array that is removed:
[4]

One more time!

Lastly, the final element in the first array is another 2.
Because the square root of 2 is 4 which is the final element of the second array, 
it is removed:
[]

The for loop is now complete and because nothing ever returned false,
returns true.

*/

same([1, 2, 3], [4, 1, 9]);       // true
same([1, 2, 3], [1, 9]);          // false
same([1, 2, 1], [4, 4, 1]);       // false (must be same freqency)
same([1, 2, 3, 2], [9, 1, 4, 4])  // true

```

</br>

#### Frequency Counter Refactor

```js
// ======================================================
// WRITE A FUNCTION WHICH ACCEPTS TWO ARRAYS.

// THE FUNCTION SHOULD RETURN TRUE IF EVERY VALUE IN THE
// ARRAY HAS ITS CORRESPONDING VALUE SQUARED IN THE 
// SECOND ARRAY. 

// THE FREQUENCY OF VALUES MUST BE THE SAME.
// ======================================================

function same(arr1, arr2) {
  // if the size of each array doesn't match - return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // set a counter for each array to an empty object
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // loop over first array
  for (let val of arr1) {
    // 
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // loop over second array
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // always know where you are
  console.log("freq counter 1: ", frequencyCounter1);
  console.log("freq counter 2: ", frequencyCounter2);

  // loop over the created frequencyCounter1 object
  for (let key in frequencyCounter1) {
    // if the value of the current element^2 is not present inside of the object - return false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if the value of the current element in the second counter is not the value of the current element^2 the first counter - return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log("freq counter 1: ", frequencyCounter1);
  console.log("freq counter 2: ", frequencyCounter2);
  
  return true;
}

// invocation
same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]) // false

same([1, 2, 3, 2], [9, 1, 4, 4])
/*
freq counter 1:  { '1': 1, '2': 2, '3': 1 }
freq counter 2:  { '1': 1, '4': 2, '9': 1 }
true
*/
```

</br>

#### Big O Analysis of Frequency Counter

In the example above, the size of the algorithm grows in proportion to the inputs which gives you a Big O of **`Linear: O(n)`**

There are 3 for loops written inside of `same()`.
Let's say you input two arrays with 1000 elements each.
That'd be a 1000 operations per loop - 3000 operations total.
That equates to **`O(3n)`** which simplifies to **`O(n)`**

---

## Multiple Pointers Pattern



