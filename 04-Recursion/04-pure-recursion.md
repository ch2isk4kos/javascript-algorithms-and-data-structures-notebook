# Pure Recursion

---

</br>

## Helper Method Approach

_see_ 03-helper-method-recursion.md

```js

function collectOddValuesWithHelper(array) {
  
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    // checks if the first element of input array is NOT cleanly divisible by 2;
    // making it odd
    if (helperInput[0] % 2 !== 0) {
      // push the index value into the outer scoped variable
      result.push(helperInput[0]);
    }

    // invokes itself with a param of the previous array minus the first element
    helper(helperInput.slice(1));
  }

  // recursively calls `helper`
  helper(array);

  return result;
}

```

</br>

## Pure Recursive Approach

A recursive process that doen't modify the initial input values outside of the function.

</br>

```js
function purelyCollectOddValues(array) {
  
  // this variable sets an empty array every time the function runs recursively
  let newArray = [];

  // edge case: if the array is empty
  if (array.length === 0) {
    // outputs an empty array
    return newArray;
  }

  // checks to see if the value of the first element is odd
  if (array[0] % 2 !== 0) {
    // then pushes the value of the first element into the newArray
    newArray.push(array[0])
  }

  // the newArray variable concatinates all of the seperate arrays into one
  //                                                   base case:
  newArray = newArray.concat(purelyCollectOddValues(array.slice(1)));
  
  // outputs the new array
  return newArray;
}

purelyCollectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// > [ 1, 3, 5, 7, 9 ]
```

### Breakdown

```js
/*

=====================================
            FIRST CYCLE
=====================================

function purelyCollectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  let newArray = [];

  if (10 === 0) {
    return newArray;
  }

  if (1 % 2 !== 0) {
    newArray.push(1)
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
}

=====================================
            SECOND CYCLE
=====================================

function purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  let newArray = [];

  if (9 === 0) {
    return newArray;
  }

  if (2 % 2 !== 0) {
    // DO NOTHING
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
}

=====================================
            THIRD CYCLE
=====================================

function purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]) {
  let newArray = [];

  if (8 === 0) {
    return newArray;
  }

  if (3 % 2 !== 0) {
    newArray.push(3)
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
}

=====================================
            FOURTH CYCLE
=====================================

function purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]) {
  let newArray = [];

  if (7 === 0) {
    return newArray;
  }

  if (4 % 2 !== 0) {
    // DO NOTHING
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
}

=====================================
            FIFTH CYCLE
=====================================

function purelyCollectOddValues([5, 6, 7, 8, 9, 10]) {
  let newArray = [];

  if (6 === 0) {
    return newArray;
  }

  if (5 % 2 !== 0) {
    newArray.push(5)
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
}

=====================================
             SIXTH CYCLE
=====================================

function purelyCollectOddValues([6, 7, 8, 9, 10]) {
  let newArray = [];

  if (5 === 0) {
    return newArray;
  }

  if (6 % 2 !== 0) {
    // DO NOTHING
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([7, 8, 9, 10]))
}

=====================================
             SEVENTH CYCLE
=====================================

function purelyCollectOddValues([7, 8, 9, 10]) {
  let newArray = [];

  if (4 === 0) {
    return newArray;
  }

  if (7 % 2 !== 0) {
    newArray.push(7)
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([7, 8, 9, 10]))
             [7].concat(purelyCollectOddValues([8, 9, 10]))
}

=====================================
             EIGHTH CYCLE
=====================================

function purelyCollectOddValues([8, 9, 10]) {
  let newArray = [];

  if (3 === 0) {
    return newArray;
  }

  if (8 % 2 !== 0) {
    // DO NOTHING
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([7, 8, 9, 10]))
             [7].concat(purelyCollectOddValues([8, 9, 10]))
             [ ].concat(purelyCollectOddValues([8, 9, 10]))
}

=====================================
             NINTH CYCLE
=====================================

function purelyCollectOddValues([9, 10]) {
  let newArray = [];

  if (2 === 0) {
    return newArray;
  }

  if (9 % 2 !== 0) {
    newArray.push(9);
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([7, 8, 9, 10]))
             [7].concat(purelyCollectOddValues([8, 9, 10]))
             [ ].concat(purelyCollectOddValues([9, 10]))
             [9].concat(purelyCollectOddValues([10]))
}

=====================================
             TENTH CYCLE
=====================================

function purelyCollectOddValues([10]) {
  let newArray = [];

  if (1 === 0) {
    return newArray;
  }

  if (10 % 2 !== 0) {
    // DON'T DO ANYTHING
  }

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([7, 8, 9, 10]))
             [7].concat(purelyCollectOddValues([8, 9, 10]))
             [ ].concat(purelyCollectOddValues([9, 10]))
             [9].concat(purelyCollectOddValues([10]))
             [ ].concat(purelyCollectOddValues([ ]))
}

=====================================
   CONCATINATE THE SEPERATE ARRAYS
=====================================

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([7, 8, 9, 10]))
             [7].concat(purelyCollectOddValues([8, 9, 10]))
             [ ].concat(purelyCollectOddValues([9, 10]))
             [9].concat(purelyCollectOddValues([10]))
             [ ].concat(purelyCollectOddValues([ ]))

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([7, 8, 9, 10]))
             [7].concat(purelyCollectOddValues([8, 9, 10]))
             [ ].concat(purelyCollectOddValues([9, 10]))
             [9].concat([ ]) = [9]

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([7, 8, 9, 10]))
             [7].concat(purelyCollectOddValues([8, 9, 10]))
             [ ].concat([9]) = [9]

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([7, 8, 9, 10]))
             [7].concat([9]) = [7, 9]

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat(purelyCollectOddValues([6, 7, 8, 9, 10]))
             [ ].concat([7, 9]) = [7, 9]

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([5, 6, 7, 8, 9, 10]))
             [5].concat([7, 9]) = [5, 7, 9]

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat(purelyCollectOddValues([4, 5, 6, 7, 8, 9, 10]))
             [ ].concat([5, 7, 9]) = [5, 7, 9]

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat(purelyCollectOddValues([3, 4, 5, 6, 7, 8, 9, 10]))
             [3].concat([5, 7, 9]) = [3, 5, 7, 9]

  newArray = [1].concat(purelyCollectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10]))
             [ ].concat([3, 5, 7, 9]) = [3, 5, 7, 9]

  newArray = [1].concat([3, 5, 7, 9]) = [1, 3, 5, 7, 9]

  newArray = [1, 3, 5, 7, 9]

*/
```
