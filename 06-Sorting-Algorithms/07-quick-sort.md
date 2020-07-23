# Sorting Algorithms: Quick Sort

---

## Quick Sort

<https://en.wikipedia.org/wiki/Quicksort>

An efficient sorting algorithm - sometimes referred to as **partition-exchange sort** developed by **Tony Hoare** in 1959. When implemented well, it can be about two or three times faster than Merge Sort and Heap Sort.

Quick Sort is a divide and conquer algorithm that selects a pivot element from an array and partions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

Works on the same assumption as Merge Sort where it's easiest to solve through recursion. Keep splitting the data until it is individually sorted. However, it's different in the sense where 

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

## Quick Sort: Resources

Guru 99: Quick Sort in JavaScript
<https://www.guru99.com/quicksort-in-javascript.html>
