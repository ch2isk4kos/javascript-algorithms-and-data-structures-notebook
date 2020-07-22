# Sorting Algorithms: Merge Sort

---

## Merge Sort

<https://en.wikipedia.org/wiki/Merge_sort>

A divide and conquer - comparative based - algorithm that was invented by **Jon Van Neumann** in 1945.

Merge Sort is combination of merging and sorting. It works by decomposing an array in smaller arrays of 0 or 1 elements, then building up a newly sorted array.

```js
const array = [ 8, 3, 5, 1, 7, 6, 2, 4 ];

/*
               [8, 3, 5, 1, 7, 6, 2, 4]
                /                     \
         [8, 3, 5, 1]            [7, 6, 2, 4]
             /  \                     /  \
        [8, 3]   [5, 1]         [7, 6]  [2, 4]
        /   \     /   \          /   \    /   \
      [8]   [3]  [5]  [1]      [7]   [6] [2]  [4]
        \   /     \   /          \   /     \  /
       [3, 8]    [1, 5]          [6, 7]   [2, 4]
            \   /                     \   /
         [1, 3, 5, 8]            [2, 4, 6, 7]
                    \            /
               [1, 2, 3, 4, 5, 6, 7, 8]
*/

```

---

## Merging Arrays

**NOTE:** both arrays need to be sorted.

```js
function mergeArrays(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++
  }
  
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
}

mergeArrays([2, 15, 25], [4, 18, 30, 35]);
```

### Breakdown

```js
/*
           i            j
          [2, 15, 25], [4, 18, 30, 35] = [2]
           -            -

               i        j
          [2, 15, 25], [4, 18, 30, 35] = [2, 4]
              --        -

               i            j
          [2, 15, 25], [4, 18, 30, 35] = [2, 4, 15]
              --           --

                   i        j
          [2, 15, 25], [4, 18, 30, 35] = [2, 4, 15, 18]
                  --       --

                   i            j
          [2, 15, 25], [4, 18, 30, 35] = [2, 4, 15, 18, 25]
                  --           --

                                j
          [2, 15, 25], [4, 18, 30, 35] = [2, 4, 15, 18, 25, 30]
                               --

                                    j
          [2, 15, 25], [4, 18, 30, 35] = [2, 4, 15, 18, 25, 30, 35]
                                   --

                                result = [2, 4, 15, 18, 25, 30, 35]
*/
```

---

## Merge Sort: Pseudocode

```js
// Break up the array into halves until you have empty or 1 element arrays
// Merge those arrays with other sorted arrays and combine into one result.
// return the merged array.
```

## Merge Sort: Solution

```js
function mergeSort(array) {
  // base case
  if (array.length <= 1) return array;

  // set the mid point of the input array
  let mid = Math.floor(array.length / 2);
  
  // split the array into two parts a use recursion on each half
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  // pass in each half of the array to the abstracted functionality
  return mergeArrays(left, right);
}
```

```js
mergeSort([15, 2, 25, 8, 40, 10, 1, 20]);
/*
=====================================
              FIRST HALF
=====================================

            mergeSort([15, 2, 25, 8])
             /                      \
        mergeSort[15, 2]      mergeSort[25, 8]
           /  \                     /        \
mergeSort[15] mergeSort[2]   mergeSort[25] mergeSort[8]
         /      \                 /            \
merge(left = 15  right = 2)  merge(left = 25  right = 8)
         \      /                          \   /
         [2, 15]                          [8, 25]
                \                          /
        merge(left = [2, 15], right = [8, 25])
                  \                      /
                   left =  [2, 8, 15, 25]

=====================================
              SECOND HALF
=====================================

            mergeSort([40, 10, 1, 20])
             /                      \
        mergeSort[40, 10]      mergeSort[1, 20]
           /  \                     /        \
mergeSort[40] mergeSort[10]   mergeSort[1] mergeSort[20]
         /      \                 /            \
merge(left = 40  right = 10)  merge(left = 1  right = 20)
         \      /                 \            /
    left = [10, 40]              right = [1, 20]
                \                 /
       merge(left = [10, 40], right = [1, 20])
                  \             /
             right = [1, 10, 20, 40]

=====================================
              MERGE HALVES
=====================================

merge(left = [2, 8, 15, 25], right = [1, 10, 20, 40]);
                    /             \
      result = [1, 2, 8, 10, 15, 20, 25, 40]

*/
```

---

## Merge Sort: Big O Notation

</br>

| Best Case Time | Average Time | Worse Case Time | Space Complexity |
| ----------- | --------- | ----------- | ----------- | ----------- |
| O ( n log<sub>n</sub> ) | O ( n log<sub>n</sub> ) | O ( n log<sub>n</sub> ) | O( n ) |

</br>

#### O ( n log<sub>n</sub> )

Merge Sort doesn't care what the data looks like. It simply splits up a linear array over and over and merges items no matter what the data is.

Say you had 8 items in an array.
`n = 8`

How many times would you have to split to get single element arrays?
3 splits

How about an array of 32 items?

```js
/*
                                32
                                /\
                              16 16
                              /\ /\
                             8 8 8 8
                            /\/\/\/\/\
                         4 4 4 4 4 4 4 4
                          /\/\/\/\/\/\/\
                 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                        /\/\/\/\/\/\/\/\/\
  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1

*/
```

As `n` grew to 32, there were 5 splits.

When `n = 8`, there were 3 splits.

That relationship is defined as **O ( n log<sub>n</sub> )**

---

## Merge Sort: Resources

Educba: Merge Sort in JavaScript
<https://www.educba.com/merge-sort-in-javascript/>

Tim Han: Merge Sort Alogorithm in JavaScript
<https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060>

w3resource: JavaScript Searching and Sorting Algorithms - Merge Sort
<https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-2.php>