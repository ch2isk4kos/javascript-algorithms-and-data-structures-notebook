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
  for (let i = n; i > 1; i--) {
    total *= i;
  }
  return total;
}
```
