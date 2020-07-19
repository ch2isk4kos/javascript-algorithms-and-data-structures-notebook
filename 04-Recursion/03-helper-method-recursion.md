# Recursion: Helper Method

---

## Helper Method Recursion

A design pattern for writing recursive functions where you have an outer function that isn't recursive and an inner function which is.

This approach is commonly used when you want to compile an array or a list of data. Here, you're not multiplying a value over and over or summing the range as in previous examples. Helper methods in recursion are used to store a subset of data.

</br>

### Helper Method Pattern Template

```js
function outer(input) {
  // this variable is declared outside of the helper to prevent it from
  // resetting to an empty array inside of the recursion
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

</br>

### Helper Method Recursion Pattern

```js
// =============================================
//   COLLECT ALL OF THE ODD VALUES IN AN ARRAY
// =============================================

function collectOddValues(array) {
  
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    // checks if the first element of input array is NOT cleanly divisible by 2;
    // making it odd
    if (helperInput[0] % 2 !== 0) {
      // push the index value into the outer scoped variable
      result.push(helperInput[0]);
    }

    // invokes itself with a param of the previous array minus the first element
    helper(helperInput.slice(1));
  }

  helper(array);

  return result;
}

collectOddValues([1, 3, 4, 5, 6, 7, 9, 11, 12, 14, 15]);

```

