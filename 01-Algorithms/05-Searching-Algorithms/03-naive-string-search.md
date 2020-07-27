# Searching Algorithms: Naive String Search

---

## Naive String Search

Used when you need to count the number of times a smaller string appears in a longer string.

One approach is to check each character individually.

### Example: Pseudocode

```js
// define a function that inputs 2 strings - larger and shorter
// set a counter to zero
// loop over the larger string input
// loop over the shorter string input
// if the characters don't match,
//    break out of the inner loop
// if you complete the inner loop and find a match,
//    increment the count
// return the count
```

### Example: Solution

```js
// define a function that inputs 2 strings - larger and shorter
function naiveStringSearch(long, short) {
  // set a counter to zero
  let count = 0;
  // loop over the larger string input
  for (let i = 0; i < long.length; i++) {
    // loop over the shorter string input
    for (let j = 0; j < short.length; j++) {
      console.log("short & long:", short[j], long[i+j]);
      // if the characters don't match,
      if (short[j] !== long[i+j]) {
        console.log("BREAK");
        // break out of the inner loop
        break;
      }
      // if you complete the inner loop and find a match,
      if (j === short.length - 1) {
        console.log("FOUND IT");
        // increment the count
        count++;
      }
    }
  }
  // return the count
  return count;
}

naiveStringSearch("supercalifragalisticexpialadocious", "doc")  // 1
naiveStringSearch("spottieottiedopaliscious", "sci")            // 1
```

#### Breakdown

```js
naiveStringSearch("learning datastrucures and algorithms is fun", "rithm");

/*
short & long: r l
BREAK
short & long: r e
BREAK
short & long: r a
BREAK
short & long: r r
short & long: i n
BREAK
short & long: r n
BREAK
short & long: r i
BREAK
short & long: r n
BREAK
short & long: r g
BREAK
short & long: r  
BREAK
short & long: r d
BREAK
short & long: r a
BREAK
short & long: r t
BREAK
short & long: r a
BREAK
short & long: r s
BREAK
short & long: r t
BREAK
short & long: r r
short & long: i u
BREAK
short & long: r u
BREAK
short & long: r c
BREAK
short & long: r u
BREAK
short & long: r r
short & long: i e
BREAK
short & long: r e
BREAK
short & long: r s
BREAK
short & long: r  
BREAK
short & long: r a
BREAK
short & long: r n
BREAK
short & long: r d
BREAK
short & long: r  
BREAK
short & long: r a
BREAK
short & long: r l
BREAK
short & long: r g
BREAK
short & long: r o
BREAK
short & long: r r         // LOOK HERE
short & long: i i
short & long: t t
short & long: h h
short & long: m m
FOUND IT
short & long: r i
BREAK
short & long: r t
BREAK
short & long: r h
BREAK
short & long: r m
BREAK
short & long: r s
BREAK
short & long: r  
BREAK
short & long: r i
BREAK
short & long: r s
BREAK
short & long: r  
BREAK
short & long: r f
BREAK
short & long: r u
BREAK
short & long: r n
BREAK
1
*/
```
