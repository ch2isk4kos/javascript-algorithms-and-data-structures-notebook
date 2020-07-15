# Algorithms and Problem Solving: Mastering Common Problem Solving Patterns

---

</br>

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

</br>

## Frequency Counter Pattern

A **Frequency Counter** uses objects and sets to collect values or frequencies or values.

Frequency Counters can avoid the need of nested loops and their Big O Notation of O( n<sup>2</sup> ) quadratic operations with arrays/strings.

**NOTE:** This pattern is not professionally referred to as a _Frequency Counter_. In fact, there is no "offical" terminology for it. The instructor is using this term because it uses an object to collect a bunch of values and their frequencies.

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

They both have the same amount of elements (4) so the first
if statement passes.

Then it loops through each element of the first array:
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

</br>

## Multiple Pointers Pattern

Creating multiple pointers or values that correspond to an index or position and moving them towards the beginning - end - or middle based on a specified condition.

Multiple Pointers are effective and efficient for solving problems with minimal space complexity as well.

**NOTE:** The term _Multiple Pointers_ is not professionally addressed as such.

The idea of Multiple Pointers is utilized by different variables - whose position opposes one another - inside of a collection or string to find whatever it is you're looking for.

_Imagine that you're hanging out with two friends. One of your friends loses a contact lense and the three of you split up to find it._

```js
const mall = [
  "parking lot",
  "food court",
  "clothing store",
  "contact lense",
  "sneaker store",
  "coffee stand",
  "pet store"
]


```

</br>

#### Mutiple Pointers Example: Naive Solution

```js
// ============================================================
// WRITE A FUNCTION WHICH ACCEPTS A SORTED ARRAY OF INTEGERS.

// THE FUNCTION SHOULD FIND THE FIRST PAIR WHERE THE SUME IS 0.

// RETURN AN ARRAY THAT INCLUDES BOTH VALUES THE SUM TO ZERO OR
// UNDEFINED IF A PAIR DOES NOT EXIST.

// NOTE: YOU SHOULD NOT IMPLEMENT YOUR SOLUTION THIS WAY.
// ============================================================

function sumZero(array) {
  // first loop starts a pointer at the first element of the input array.
  for (let i = 0; i < array.length; i++) {
    // second loop starts a pointer at the second element of the input array.
    for (let j = i+1; i < array.length; j++) {
      // the current element from first pointer is then added to each current element of the second pointer.
      // if at any point in the process, the current element from the first pointer added to the current element of the second pointer equates to zero - return both elements 
      if (array[i] + array[j] === 0) {
        return array[i], array[j];
      };
    };
  };
};

sumZero([-3, -2, -1, 0, 1, 2, 3])   // [-3, 3]
sumZero([-2, 0, 1, 3])              // undefined
sumZero([1, 2, 3])                  // undefined
```

**Time Complexity**
Quadratic: O( n<sup>2</sup> )

**Space Complexity**
Constant: O( 1 )

</br>

#### Mutiple Pointers Example: More Efficient Solution

```js
// ============================================================
// WRITE A FUNCTION WHICH ACCEPTS A SORTED ARRAY OF INTEGERS.

// THE FUNCTION SHOULD FIND THE FIRST PAIR WHERE THE SUME IS 0.

// RETURN AN ARRAY THAT INCLUDES BOTH VALUES THE SUM TO ZERO OR
// UNDEFINED IF A PAIR DOES NOT EXIST.

// NOTE: 👍
// ============================================================

function sumZero(array) {
  // pointer starts to the left - first index - of the input array
  const left = 0; 
  // pointer starts to the right - last index - of the input array
  let right = array.length - 1; 

  // as long as the left pointer is less than the right pointer...
  while (left < right) {
    // create a variable that points to the sum of both values
    let sum = array[left] + array[right]; 

    // if that sum matches 0...
    if (sum === 0) {
      // return both values
      return [array[left], array[right]];
      // if that sum is greater than 0...
    } else if (sum > 0) { 
      // move one position in from the right 
      right--;
      // otherwise...  
    } else {  
      // move one position in from the left 
      left++; 
    };
  };
};

```

**Breakdown**

```js

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])   // [-3, 3]

/*
====================================
  START OF THE INITIAL INTERATION
====================================

const left = -4;
const right = 10;

while (-4 < 10) {
  let sum = -4 + 10;

  if (6 === 0) {
    return both values;
  } else if (6 > 0) {
    move to 3
  } else {
    move to -3
  }
}

================================================
  YOU NOW MOVE TO 3 AND START THE PROCESS OVER
================================================

const left = -4;
const right = 3;

while (-4 < 3) {
  let sum = -4 + 3;

  if (-1 === 0) {
    return both values;
  } else if (-1 > 0) {
    move to 2
  } else {
    move to -3
  }
}

=================================================
  YOU NOW MOVE TO -3 AND START THE PROCESS OVER
=================================================

const left = -3;
const right = 3;

while (-3 < 3) {
  let sum = -3 + 3;

  if (0 === 0) {
    RETURN BOTH VALUES;
  } else if (0 > 0) {
    move to 2
  } else {
    move to -2
  }
}

=================================================
  THE SUM OF BOTH POINTERS NOW EQUATES TO 0
          AND BOTH VALUE ARE RETURNED
=================================================

[-3, 3]

*/
```

**Time Complexity**
Constant: O( n )

**Space Complexity**
Constant: O( 1 )

**NOTE:** This is not the only way to refactor this problem however a more efficient way of solving compared to the Naive Solution above.

---

</br>