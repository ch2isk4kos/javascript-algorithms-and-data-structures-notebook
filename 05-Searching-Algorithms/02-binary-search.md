# Searching Algorithms: Binary Search

---

## Binary Search

see <https://en.wikipedia.org/wiki/Binary_search_algorithm>

" A search algorithm that finds the position of a target value within a **sorted array** by comparing the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found.

If the search ends with the remaining half being empty, the target is not in the array. "

</br>

### Divide and Conquer Approach

```js
// Search for 24:
let searchForNum = 24;

let array = [ 2, 7, 8, 16, 23, 24, 33, 34, 99 ]

/*
indices:      0  1  2   3   4   5   6   7   8

            [ 2, 7, 8, 16, 23, 24, 33, 34, 99 ]
              L             M               R
*/

if (searchForNum > array[4])

/*
indices:      0  1  2  3  4   5   6   7   8

            [ *, *, *, *, *, 24, 33, 34, 99 ]
                              L   M       R
*/

if (searchForNum < array[6])

/*
indices:      0  1  2  3  4   5   6   7   8

            [ *, *, *, *, *, 24,  *,  *,  * ]
                              ✓
*/

return array[5]
```

</br>

### For Loop vs While Loop

The for loop is similar to the while loop in terms of memory consumption and speed but differ in functionalty.

#### For Loop

The for loop is preferable when you know the exact number of times the loop has to be repeated.

#### While Loop

The while loop is utilitzed when the exact number of iterations unknown.

---

## Binary Search: Pseudocode

```js
// a function that accepts a sorted array and a value as inputs

// create a left pointer at the start of the array
// and a right pointer at the end of the array

// loop over the array as such that the left pointer is always before the right
//    create a mid pointer
//    if you find the value desired, return the index
//    if the value is too small, move the left pointer forward

// if you don't find a match to the value, return -1

```

## Binary Search: Solution

```js
const arrayOfNums = [ 2, 7, 8, 16, 23, 24, 33, 34, 99, 101, 120, 155, 175, 250 ];

// a function that accepts a sorted array as input
function binarySearch(array, value) {
  
  // create a left pointer at the start of the array
  let left = 0;
  
  // a right pointer at the end of the array
  let right = array.length - 1;
  
  // and a mid pointer
  let mid = Math.floor((left + right) / 2);

  console.log("starting pointers: ", left, mid, right);  // 0, 6, 13
  
  while (array[mid] !== value && left <= right) {
    console.log(left, mid, right);

    if (value < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  
  if (array[mid] === value) {
    return mid;
  } else {
    return -1;
  }
}
```

### Breakdown

```js
binarySearch(arrayOfNums, 175)

/*
//  =============================================
//                 FIRST INTERATION
//  =============================================

idx   0  1  2   3   4   5   6   7   8    9   10   11   12   13

    [ 2, 7, 8, 16, 23, 24, 33, 34, 99, 101, 120, 155, 175, 250 ]
      L                     M                                R

    while ( 33 !== 175 ) {
      if ( 175 < 33 ) {
        right = mid - 1;
      } else {
        left = 6 + 1;
      }
      mid = Math.floor((left + right) / 2);
    }

//  =============================================
//                 SECOND INTERATION
//  =============================================

idx   0  1  2   3   4   5   6   7   8    9   10   11   12   13

    [ 2, 7, 8, 16, 23, 24, 33, 34, 99, 101, 120, 155, 175, 250 ]
                                L        M                   R

    while ( 101 !== 175 ) {
      if ( 175 < 101 ) {
        right = mid - 1;
      } else {
        left = 9 + 1;
      }
      mid = Math.floor((left + right) / 2);
    }

//  =============================================
//                 THIRD INTERATION
//  =============================================

idx   0  1  2   3   4   5   6   7   8    9   10   11   12   13

    [ 2, 7, 8, 16, 23, 24, 33, 34, 99, 101, 120, 155, 175, 250 ]
                                              L    M         R

    while ( 155 !== 175 ) {
      if ( 175 < 155 ) {
        right = mid - 1;
      } else {
        left = 11 + 1;
      }
      mid = Math.floor((left + right) / 2);
    }

//  =============================================
//                 FIFTH INTERATION
//  =============================================

idx   0  1  2   3   4   5   6   7   8    9   10   11   12   13

    [ 2, 7, 8, 16, 23, 24, 33, 34, 99, 101, 120, 155, 175, 250 ]
                                                  L     M    R

    while ( 175 !== 175 ) {            // BREAKS OUT OF THE LOOP
      if ( array[mid] < value ) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      mid = Math.floor((left + right) / 2);
    }

    if ( 175 === 175) {
      return 12                         // 12
    } else {
      return -1                         // RETURNS IF NUMBER ISN'T FOUND
    }

*/
```

**Time Complexity** O ( log <sup>n</sup> )

## Binary Search: Refactored Solution

```js
const arrayOfNums = [ 2, 7, 8, 16, 23, 24, 33, 34, 99, 101, 120, 155, 175, 250 ];

function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  
  while (array[mid] !== value && left <= right) {
    if (value < array[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }

  if array[mid] === value ? mid : -1;
}
```

---

## Binary Search: Big O

With a binary search, as the the size of the sorted array grows, how does the time complexity grow in relation?

**Best Case Scenario:** O ( 1 )
**Worse Case Scenario:** O ( log <sub>n</sub> )

log <sub>2</sub> meaning **2<sup>?</sup> = `n`**

---

</br>

```js
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
]

```
