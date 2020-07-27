# Big O: Simplifying Big O Expressions

---

## _Rules of Thumb:_

When determining the time complexity of an algorithm:

### 1. Constants don't matter

|  |  | |
| ----------- | --------- | ----------- |
| O(2n) | === | O(n) |
| O(500) | === | O(1) |

Meaning if you had 500 operations no matter what `n` is.
So the chart will be flat and we simplify it down to O(1)
and refer to it as constant.

|  |  | |
| ----------- | --------- | ----------- |
| O(13n^2) | === | O(n^2) |

### 2. Smaller terms don't matter

|  |  | |
| ----------- | --------- | ----------- |
| O(n + 10) | === | O(n) |
| O(1000n + 50) | === | O(n) |
| O(n^2 + 5n + 8) | === | O(n^2) |

---

## _Big O Shorthands_

### When analyzing complexity with Big O

**1. Arithmitic operations are constant.**
Whether adding, subtracting, multiplying or dividing something,
your computer caclulating `2 * 2` is no shorter of time than `200000000000000000 * 2`

**2. Variable assignment is also constant.**
`let x = 1` is roughly the same as `let x = 10000000000000000`

**3. Accessing elements in an array - by index - or object - by key - is constant.**

**4. In a loop, the complexity is:**
the length of the loop *times* the complexity of whatever happens in scope.

```js

// Linear: O(n)
function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// Prints numbers up to `n` but a minimum of 5
logAtLeast5(10)
/*

0
1
2
3
4
5
6
7
8
9

*/
logAtLeast5(1)
/*

0
1
2
3
4

This is considered Linear O(n) because as the algorithm grows
so does the runtime in coordinance with `n`.

*/
```
