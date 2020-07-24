# Sorting Algorithms: Quick Sort

---

## Quick Sort

<https://en.wikipedia.org/wiki/Quicksort>

An efficient sorting algorithm - sometimes referred to as **partition-exchange sort** developed by **Tony Hoare** in 1959. When implemented well, it can be about two or three times faster than Merge Sort and Heap Sort.

Quick Sort is a divide and conquer algorithm that selects a pivot element from an array and partions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

Works on the same assumption as Merge Sort where it's easiest to solve through recursion. Keep splitting the data until it is individually sorted. However, it's different in the sense where

</br>

```js
const array = [ 5, 2, 1, 8, 4, 7, 6, 3 ];

/*

NOTE: p = pivot number

======================
       LEFT SIDE
======================

              [ 5, 2, 1, 8, 4, 7, 6, 3 ]
                p  -

All elements that are less than whichever pivot number you choose
will be compared, tracked and placed on the left side of the pivot element.


tracker: 1 element(s):

              [ 5, 2, 1, 8, 4, 7, 6, 3 ]
                p  ✓  -

tracker: 2 element(s)

              [ 5, 2, 1, 8, 4, 7, 6, 3 ]
                p  ✓  ✓  -

tracker: 2 element(s)

              [ 5, 2, 1, 8, 4, 7, 6, 3 ]
                p  ✓  ✓     -

tracker: 3 element(s)

              [ 5, 2, 1, 4, 8, 7, 6, 3 ]
                p  ✓  ✓  ✓     -

tracker: 3 element(s)

              [ 5, 2, 1, 4, 8, 7, 6, 3 ]
                p  ✓  ✓  ✓        -

tracker: 3 element(s)

              [ 5, 2, 1, 4, 8, 7, 6, 3 ]
                p  ✓  ✓  ✓           -

tracker: 4 element(s) less than pivot number

              [ 5, 2, 1, 4, 3, 7, 6, 8]
                p  ✓  ✓  ✓  ✓

pivot number then moves inward, however many elements tracked

              [ 2, 1, 4, 3, 5, 7, 6, 8]
                ✓  ✓  ✓  ✓  ✓

now, everything to the left of the pivot number is less than
and everything to the right of the pivot number is greater than

======================
       RIGHT SIDE
======================

              [ 1, 2, 3, 4, 5, 8, 7, 6 ]
                ✓  ✓  ✓  ✓  ✓  p

tracker: 1 element(s)

              [ 1, 2, 3, 4, 5, 7, 6, 8 ]
                ✓  ✓  ✓  ✓  ✓  -     ✓

tracker: 2 element(s) less than new pivot number

              [ 1, 2, 3, 4, 5, 6, 7, 8 ]
                ✓  ✓  ✓  ✓  ✓  -  ✓  ✓

======================
         OUTPUT
======================

              [ 1, 2, 3, 4, 5, 6, 7, 8 ]
                ✓  ✓  ✓  ✓  ✓  ✓  ✓  ✓
*/
```

---

## Pivot Helper

To implement Merge Sort, it's useful to first implement  function responsible arranging elements in an array on either side of a pivot.

Given an array, this helper function should designate an element as the pivot.

It should then rearrange elements in the array so that all values less than the pivot are moved to the left of it and all values greater to the right.

The helper should process in place meaning it should not create a new array and when completed should return the index of the pivot.

Selecting a pivot is an important decision. The runtime of Quick Sort depends on which pivot you choose and ideally it should be chosen so that it's roughly the median value in the data set you're sorting. For simplicity, you could pick the first element as your pivot but there are downsides to doing this in terms of Big O.

### Pivot Pseudocode

```js
// Accept three arguments: an array, a start index and end index
// Pick your pivot and store it in variable that will track where it ends
// Loop through the array from beginning to end
// if the pivot is greater than the current element, increment the pivot
// index variable and swap the current element with the element at the
// pivot index
// swap the starting index with the pivot index
// return the pivot index
```

```js
function pivot(array) {
  let start = 0;
  let end = array.length + 1;
  let pivot = array[start];
  let swapIndex = start;  // how many elements are less than pivot
  
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, start, swapIndex);
  return swapIndex;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);
```

---

## Quick Sort: Resources

Guru 99: Quick Sort in JavaScript
<https://www.guru99.com/quicksort-in-javascript.html>
