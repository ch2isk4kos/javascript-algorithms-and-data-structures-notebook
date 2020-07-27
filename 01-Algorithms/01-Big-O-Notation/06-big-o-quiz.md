# Big O Quiz

---

## Time Complexity

Determine the Runtime of Big O

### 1. O(n + 10)

Answer: Linear: O( n )

### 2. O(100 * n)

Answer: Linear: O( n )

### 3. O(25)

Answer: Constant: O( 1 )

### 4. O(n<sup>2</sup> + n<sup>3</sup>)

Answer: Quadratic: O( n<sup>3</sup> )

### 5. O(n + n + n + n)

Answer: Linear: O( n )

### 6. Determine the Runtime of the function

```js

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Linear: O(n)
```

### 7. Determine the Runtime of the function

```js

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

// Constant: O(1)
```

### 8. Determine the Runtime of the function

```js

function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}

// Linear: O(n)
```

### 9. Determine the Runtime of the function

```js

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

// Linear: O(n)
```

### 10. Determine the Runtime of the function

```js

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

// Quadratic: O(n^2)
```

---

## Space Complexity

### 11. Determine the Memory Use of the function

```js

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Constant Space: O(1)
```

### 12. Determine the Memory Use of the function

```js

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

// Constant Space: O(1)
```

### 13. Determine the Memory Use of the function

```js

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

// Linear Space: O(n)
```

### 14. Determine the Memory Use of the function

```js

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

// Linear: O(n)
```
