# Sorting Algorithms: Bubble Sort

---

## Bubble Sort

<https://en.wikipedia.org/wiki/Bubble_sort>

A simple algorithm that repeatedly steps through a colletion, compares adjacent elements and swaps them if they are in the wrong order. Sometimes referred to as **sinking sort**.

Not very efficent or commonly used but other algorithms which are more efficient are built on top of it.

```js
const array = [5, 3, 7, 2, 1, 9, 6, 8, 4];

/*

START OF FIRST ITERATION:

              [5, 3, 7, 2, 1, 9, 6, 8, 4]
               -  -

              [3, 5, 7, 2, 1, 9, 6, 8, 4]
                  -  -

              [3, 5, 7, 2, 1, 9, 6, 8, 4]
                     -  -

              [3, 5, 2, 7, 1, 9, 6, 8, 4]
                        -  -

              [3, 5, 2, 1, 7, 9, 6, 8, 4]
                           -  -

              [3, 5, 2, 1, 7, 9, 6, 8, 4]
                              -  -

              [3, 5, 2, 1, 7, 6, 9, 8, 4]
                                 -  -

              [3, 5, 2, 1, 7, 6, 8, 9, 4]
                                    -  -

              [3, 5, 2, 1, 7, 6, 8, 4, 9]
                                       ✓
END OF FIRST ITERATION...

*/
```

Notice the **swapping** functionality.

</br>

### Bubble Sort: Less Optimized Solution

This approach is less optimized because it continues too loop over the entire array through each iteration.

```js
function weakBubble(array) {
  let temp = 0;
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        // swapping functionality
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

weakBubble([18, 2, 22, 4, 50]);

/*

=================================
        FIRST ITERATION
=================================

[ 18, 2, 22, 4, 50 ] 18 2
[ 2, 18, 22, 4, 50 ] 18 22
[ 2, 18, 22, 4, 50 ] 22 4
[ 2, 18, 4, 22, 50 ] 22 50
[ 2, 18, 4, 22, 50 ] 50 undefined

=================================
        SECOND ITERATION
=================================

[ 2, 18, 4, 22, 50 ] 2 18
[ 2, 18, 4, 22, 50 ] 18 4
[ 2, 4, 18, 22, 50 ] 18 22
[ 2, 4, 18, 22, 50 ] 22 50
[ 2, 4, 18, 22, 50 ] 50 undefined

=================================
        THIRD ITERATION
=================================

[ 2, 4, 18, 22, 50 ] 2 4
[ 2, 4, 18, 22, 50 ] 4 18
[ 2, 4, 18, 22, 50 ] 18 22
[ 2, 4, 18, 22, 50 ] 22 50
[ 2, 4, 18, 22, 50 ] 50 undefined

=================================
        FOURTH ITERATION
=================================

[ 2, 4, 18, 22, 50 ] 2 4
[ 2, 4, 18, 22, 50 ] 4 18
[ 2, 4, 18, 22, 50 ] 18 22
[ 2, 4, 18, 22, 50 ] 22 50
[ 2, 4, 18, 22, 50 ] 50 undefined

=================================
        FIFTH ITERATION
=================================

[ 2, 4, 18, 22, 50 ] 2 4
[ 2, 4, 18, 22, 50 ] 4 18
[ 2, 4, 18, 22, 50 ] 18 22
[ 2, 4, 18, 22, 50 ] 22 50
[ 2, 4, 18, 22, 50 ] 50 undefined

=================================
              OUTPUT
=================================

[ 2, 4, 18, 22, 50 ]

*/
```

Every time you see `undefined`, the loop is comparing the last element of the array to an out of bounds element that doesn't exist.

The bubble sort functionality still works but it's extremely ineffient. Not only does it compare values that don't exist, it also compares intergers that have already been sorted making it a **needless comparison**. Could you imagine how long the process would take if you had an array of 50 elements as opposed to hundreds of thousands or millions of integers?

</br>

### Bubble Sort: Pseudocode

```js
// define a function that accepts an array of numbers as its input.
// start looping from a variable at the end of the array towards the beginning
// start an inner loop with a variable from the start of the array until `i - 1`
// if the inner variable is greater than the inner variable + 1, swap the values
// return the sorted array
```

</br>

### Bubble Sort: Solution

```js
function bubbleSorting(array) {
  let temnp = 0;

  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(array, array[j], array[j+1])
      if (array[j] > array[j+1]) {
        // swapping functionality
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

bubbleSorting([18, 2, 22, 4, 50]);

/*

=================================
        FIRST ITERATION
=================================

[ 18, 2, 22, 4, 50 ] 18 2
[ 2, 18, 22, 4, 50 ] 18 22
[ 2, 18, 22, 4, 50 ] 22 4
[ 2, 18, 4, 22, 50 ] 22 50

=================================
        SECOND ITERATION
=================================

[ 2, 18, 4, 22, 50 ] 2 18
[ 2, 18, 4, 22, 50 ] 18 4
[ 2, 4, 18, 22, 50 ] 18 22

=================================
        THIRD ITERATION
=================================

[ 2, 4, 18, 22, 50 ] 2 4
[ 2, 4, 18, 22, 50 ] 4 18

=================================
        FOURTH ITERATION
=================================

[ 2, 4, 18, 22, 50 ] 2 4

=================================
              OUTPUT
=================================

[ 2, 4, 18, 22, 50 ]

*/
```

</br>
### Bubble Sort: Solution

```js
// ES2015
function bubbleSorting(array) {
  // swapping functionality
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(array, array[j], array[j+1])
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }
  return array;
}

bubbleSorting([18, 2, 22, 4, 50]);

// [ 2, 4, 18, 22, 50 ];
```

</br>

### Bubble Sort: Resources

Tutorials Point: Bubble Sort Algorithm
<https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm>

GeeksforGeeks: Bubble Sort
<https://www.geeksforgeeks.org/bubble-sort/>
