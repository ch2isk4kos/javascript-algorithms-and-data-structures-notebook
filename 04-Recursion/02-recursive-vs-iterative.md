# Recursion: Recursive vs Iterative Functions

---

## Factorial

A factorial is the product of all positive integers less than or equal to **`n`**.

**Example:**
`factorial(4) -> 4 * 3 * 2 * 1`

---

## Iterative Function

```js
function iterativeFactorial(n) {
  let total = 1;
  for (let i = n; i > 1; i--) {
    total *= i;
  }
  return total;
}

iterativeFactorial(5);  // 120
```

---

## Recursive Function

```js
function recursiveFactorial(n) {
  if (n === 1) return;
  return n * recursiveFactorial(n - 1);
}

recursiveFactorial(5);  // 120
```

### Breakdown

```js
/*

  return 5 * recursiveFactorial(5 - 1);
         4 * recursiveFactorial(4 - 1);
         3 * recursiveFactorial(3 - 1);
         2 * recursiveFactorial(2 - 1);
         1 = BASE CASE

  return 5 * recursiveFactorial(5 - 1);
         4 * recursiveFactorial(4 - 1);
         3 * recursiveFactorial(3 - 1);
         2 * 1 = 2
             -

  return 5 * recursiveFactorial(5 - 1);
         4 * recursiveFactorial(4 - 1);
         3 * 2 = 6;
             -

  return 5 * recursiveFactorial(5 - 1);
         4 * 6 = 24;
             -
  
  return 5 * 24 = 120;
             --
*/
```
