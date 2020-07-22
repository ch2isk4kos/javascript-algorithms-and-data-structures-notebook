# Sorting Algorithms: Merge Sort

---

## Merge Sort

<https://en.wikipedia.org/wiki/Merge_sort>

A divide and conquer - comparative based - algorithm that was invented by Jon Van Neumann in 1945.

Merge Sort is combination of merging and sorting. It works by decomposing an array in smaller arrays of 0 or 1 elements, then building up a newly sorted array.

```js
const array = [ 8, 3, 5, 1, 7, 6, 2, 4 ];

/*
              [ 8, 3, 5, 1, 7, 6, 2, 4 ]
                /                     \
        [ 8, 3, 5, 1 ]           [ 7, 6, 2, 4 ]
             /  \                     /  \
       [ 8, 3 ] [ 5, 1 ]        [ 7, 6 ] [ 2, 4 ]
        /   \     /   \          /   \     /   \
      [8]   [3]  [5]   [1]     [7]   [6] [2]   [4]
*/

```

---
