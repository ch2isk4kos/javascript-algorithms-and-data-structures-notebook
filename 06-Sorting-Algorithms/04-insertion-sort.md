# Sorting Algorithms: Insertion Sort

---

## Insertion Sort

<https://en.wikipedia.org/wiki/Insertion_sort>

A simple algorithm that builds the final sorted array - or list - one item at a time.

It builds up the sort by gradually creating a larger left portion of the data structure, which is always sorted.

Instead of finding the largest/smallest at a time, it takes each element and places it where it belongs.

```js
const array = [ 5, 3, 4, 1, 2 ]

/*
First Iteration:

              [ 5, 3, 4, 1, 2 ]
                ✓  -

Second Iteration:

              [ 3, 5, 4, 1, 2 ]
                ✓  ✓  -

Third Iteration:

              [ 3, 4, 5, 1, 2 ]
                ✓  ✓  ✓  -


Fourth Iteration:

              [ 1, 3, 4, 5, 2 ]
                ✓  ✓  ✓  ✓  -

Ouput:

              [ 1, 2, 3, 4, 5 ]
                ✓  ✓  ✓  ✓  ✓

NOTE:
1 (third iteration) and 2 (fourth iteration)
compares values with every element on the way down to index 0
*/
```

---

</br>

## Insertion Sort: Psuedocode

```js
// define a function that takes an array as an input
// start by picking the second element in the array
// compare that second element with the one before it and swap if necessary
// continue to the next element and if it is in the incorrect order,
// iterate through the sorted portion to place the element in the correct place
```

</br>

## Insertion Sort: Solution ( nested for loop )

```js
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    for (j; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
      console.log(array, array[j], current);
    }
    array[j + 1] = current;
  }
  return array;
}

insertionSort([ 34, 24, 7, 33, 16, 2, 8 ]);
```

</br>

### Breakdown

```js
// NOTE: S stands for Swap

/*
==================================
          FIRST ITERATION
==================================

[ 34, 34, 7, 33, 16, 2, 8 ]  34 24
  ✓   S

==================================
          SECOND ITERATION
==================================

[ 24, 34, 34, 33, 16, 2, 8 ] 34 7
  ✓   ✓   S

[ 24, 24, 34, 33, 16, 2, 8 ] 24 7
  ✓   S   ✓

==================================
          THIRD ITERATION
==================================

[ 7, 24, 34, 34, 16, 2, 8 ]  34 33
  ✓  ✓   ✓   S

==================================
          FOURTH ITERATION
==================================

[ 7, 24, 33, 34, 34, 2, 8 ]  34 16
  ✓  ✓   ✓   ✓   S

[ 7, 24, 33, 33, 34, 2, 8 ]  33 16
  ✓  ✓   ✓   S   ✓

[ 7, 24, 24, 33, 34, 2, 8 ]  24 16
  ✓  ✓   S   ✓   ✓

==================================
          FIFTH ITERATION
==================================

[ 7, 16, 24, 33, 34, 34, 8 ] 34 2
  ✓  ✓   ✓   ✓   ✓   S

[ 7, 16, 24, 33, 33, 34, 8 ] 33 2
  ✓  ✓   ✓   ✓   S   ✓

[ 7, 16, 24, 24, 33, 34, 8 ] 24 2
  ✓  ✓   ✓   S   ✓   ✓

[ 7, 16, 16, 24, 33, 34, 8 ] 16 2
  ✓  ✓   S   ✓   ✓   ✓

[ 7, 7, 16, 24, 33, 34, 8  ] 7  2
  ✓  S  ✓   ✓   ✓   ✓

==================================
          SIXTH ITERATION
==================================

[ 2, 7, 16, 24, 33, 34, 34 ] 34 8
  ✓  ✓   ✓  ✓   ✓   ✓   S

[ 2, 7, 16, 24, 33, 33, 34 ] 33 8
  ✓  ✓   ✓  ✓   ✓   S   ✓

[ 2, 7, 16, 24, 24, 33, 34 ] 24 8
  ✓  ✓   ✓  ✓   S   ✓   ✓

[ 2, 7, 16, 16, 24, 33, 34 ] 16 8
  ✓  ✓   ✓  S   ✓   ✓   ✓

==================================
              OUTPUT
==================================

[ 2, 7, 8, 16, 24, 33, 34 ]
  ✓  ✓  ✓  ✓   ✓   ✓   ✓

*/
```

</br>
## Insertion Sort: Solution ( nested while loop )

```js
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
      console.log(array, array[j], current);
    }
    array[j + 1] = current;
  }
  return array;
}

insertionSort([ 34, 24, 7, 33, 16, 2, 8 ]);
```
