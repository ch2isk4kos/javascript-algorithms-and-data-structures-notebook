# Intro to Big O Notation

---

## The Problem with Time

* Different machines record different times
* The same machines can record different times
* For fast algorithms, speed measurements may not be precise enough

---

## Big O Notation

A way to formalize "fuzzy counting".

Allows you to talk formally about how the runtime of an algorithm
grows concurrently as its inputs.

Not caring about the details, only the broad trends.

When talking about Big O, you're taking into consideration
the worst case scenario.

We say that an algorithm is **O( f(n) )** if...
the number of simple operations the computer has to do,
is eventually less than a constant times f(n) as `n` increases.

</br>

| Input: f(n) | Runtime: n |
| ----------- | ----------- |
| Linear | f(n) = n |
| Constant | f(n) = 1 |
| Quadratic | f(n) = n^2 |

</br>

```js

// Linear: O(n)
function addingUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

/*
The number of operations grows in proportion to `n`
*/

// Constant: O(1)
function addingUpTo(x) {
  return x * (x + 1) / 2;
}

/*
Always the same 3 Operations
*/
```

---

## Two loops inside of a function

```js
// Linear: O(n)
function countUpAndDown(n) {
  console.log("Going Up!");
  for (let i = 0; i <= n; i++) {
    console.log(i)
  }
  console.log("At the top!\nGoing Down...");

  for (let j = 0; j >= 0; j--) {
    console.log(j);
  }
  console.log("Merry New Year!");
}
/*

Going Up!
0
1
2
3
4
5
At the top!
Going Down...
5
4
3
2
1
0

Because there are 2 different loops that each
evaluate to O(n), it would seem like the
Big O notation would equate to O(2n)

however...Big O Notation thinks big picture
so it simplifies back to O(n).

*/
```

---

### Nested Loop

```js

// Quadtratic: O(n^2)

function printAllPairs(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j >= 0; j--) {
      console.log(i, j);
    }
  }
}

printAllPairs(2)
/*

0 0
0 1
1 0
1 1

*/
printAllPairs(3)
/*

0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2

Here you have an O(n) operation inside of an O(n) operation
which evaluates to O(n * n) === O(n^2)

So as `n` grows, the runtime grows at the rate of n^2
a significant difference.

*/
```
