# Sorting Algorithms: Selection Sort

---

## Selection Sort

<https://en.wikipedia.org/wiki/Selection_sort>

An **in-place comparison algorithm**, meaning it transforms input using no auxilary data structure. An example of a no auxilary data structure is a hash table.

Selection Sort is similar to a Bubble Sort but instead of placing large values, it places small values into sorted position.

```js
const array = [ 5, 3, 4, 1, 2 ];

/*

First Iteration:

              [ 5, 3, 4, 1, 2 ]
                -  ✓

              [ 5, 3, 4, 1, 2 ]
                _  ✓  -

              [ 5, 3, 4, 1, 2 ]
                -        ✓

              [ 5, 3, 4, 1, 2 ]
                -        ✓  -

Second Iteration:

              [ 1, 3, 4, 5, 2 ]
                   ✓  -

              [ 1, 3, 4, 5, 2 ]
                   ✓     -

              [ 1, 3, 4, 5, 2 ]
                   -        ✓

Third Iteration:

              [ 1, 2, 4, 5, 3 ]
                      ✓  -

              [ 1, 2, 4, 5, 3 ]
                      -     ✓
Fourth Iteration:

              [ 1, 2, 3, 5, 4 ]
                         -  ✓

Fifth Iteration:

              [ 1, 2, 3, 4, 5 ]
                            ✓

Output:

              [ 1, 2, 3, 4, 5 ]

*/
```

</br>

## Selection Sort: Pseudocode

```js
// compare the first two elements of the input array and store the smaller value
// compare this smaller value to the next element until you match a smaller value
// if a smaller value is found, designate it as the minimum value and continue
// if the minimum is not the value (index) you originally began with, swap values
```

## Selection Sort: Solution

```js
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[i], array[j]);

      if (array[j] < array[lowest]) {
        lowest = j;
      }  
    }
    if (i !== lowest) {
      // swap
      let temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }
  return array;
}

selectionSort([ 14, 5, 2, 1, 9, 12, 10 ]);

/*

First Iteration:

              [ 14, 5, 2, 1, 9, 12, 10 ] 14 5
              [ 14, 5, 2, 1, 9, 12, 10 ] 14 2
              [ 14, 5, 2, 1, 9, 12, 10 ] 14 1
              [ 14, 5, 2, 1, 9, 12, 10 ] 14 9
              [ 14, 5, 2, 1, 9, 12, 10 ] 14 12
              [ 14, 5, 2, 1, 9, 12, 10 ] 14 10

Second Iteration:

              [ 1, 5, 2, 14, 9, 12, 10 ] 5 2
              [ 1, 5, 2, 14, 9, 12, 10 ] 5 14
              [ 1, 5, 2, 14, 9, 12, 10 ] 5 9
              [ 1, 5, 2, 14, 9, 12, 10 ] 5 12
              [ 1, 5, 2, 14, 9, 12, 10 ] 5 10

Third Iteration:

              [ 1, 2, 5, 14, 9, 12, 10 ] 5 14
              [ 1, 2, 5, 14, 9, 12, 10 ] 5 9
              [ 1, 2, 5, 14, 9, 12, 10 ] 5 12
              [ 1, 2, 5, 14, 9, 12, 10 ] 5 10

Fourth Iteration:

              [ 1, 2, 5, 14, 9, 12, 10 ] 14 9
              [ 1, 2, 5, 14, 9, 12, 10 ] 14 12
              [ 1, 2, 5, 14, 9, 12, 10 ] 14 10

Fifth Iteration:

              [ 1, 2, 5, 9, 14, 12, 10 ] 14 12
              [ 1, 2, 5, 9, 14, 12, 10 ] 14 10

Sixth Iteration:

              [ 1, 2, 5, 9, 10, 12, 14 ] 12 14

Output:
              [ 1, 2, 5, 9, 10, 12, 14 ]

*/
```

**Time Complexity:**
Quadratic: O( n<sup>2</sup> )

</br>

## Selection Sort: Resources

GeeksforGeeks: Selection Sort
<https://www.geeksforgeeks.org/selection-sort/>

Programiz: Selection Sort Algorithms
<https://www.programiz.com/dsa/selection-sort>
