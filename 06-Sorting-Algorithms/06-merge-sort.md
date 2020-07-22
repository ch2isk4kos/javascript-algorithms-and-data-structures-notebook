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
  
  // split the array into two parts
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  // pass in each half of the array to the abstracted functionality
  return mergeArrays(left, right);
}

mergeSort([2, 15, 25, 4, 18, 30, 35]);
```

