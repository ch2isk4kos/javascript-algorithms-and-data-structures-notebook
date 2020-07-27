# Big O: Space Complexity

---

## Pre-Requisite

Time Complexity and how to analyze the runtime of an alogorithm as the size of input increases.

---

## Space Complexity

The amount of memory an algorithm takes up as the size
of the input increases.

As `n` grows - if you're approaching infinity -
the size of the input itself which is `n` is going to grow itself.

---

## Auxiliary Space Complexity

Refers to memory required by the algorithm only,
not including space taken up by the inputs.

A focus on what happens inside of the algorithm.

---

## Space Complexity in JS: Rules

**1.** Most primitives (booleans, numbers, unidentified, null)
are constant space, so it doesn't matter what the size
of the input is (1 or 1000). Whether a boolean is true or false
takes up the same amount of space.

**2.** Strings require O(n) space (where `n` is the string length)

**3.** Reference types are generally O(n); where **`n`** is the **length** - for arrays  or the **number of keys** - for objects

**example:**
If the length of an array is 4 compared to another array that is 2.
It takes up twice as much space as the shorter array.

---

## Constant Space: O(1)

```js
function sum(arr) {
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    total += arr[i];
  }
  return total;
}
/*

The function `sum` takes an array and sums up all of its elements.

So what is the thing that takes up space?

No matter what the array length is, you have one variable called `total` - a number.
Then you're looping through and adding the value of each element to that number.
Inside of the for loop, you have another variable set to a number.

No matter what the size of the array of `n` - in this case `arr` -
as it grows - might be a thousand items or a million items -
it doesn't have an impact on the space that's taken up because you
only have two variables and they exist no matter what.

You're not adding new variables based on the lenght, you're mearly adding to it,
which means that you have Constant Space.

*/
```

</br>

## Linear Space: O(n)

```js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
/*

The function `double` takes an array of numbers and multiples 2 to all of its elements.

It makes a new array
Loops over the length of the given array
And pushes each item muliplied by 2 into the new array.

What does this mean for space complexity?

As the input length grows and approaches infinity - which JS cannot handle btw -
the new array gets longer and longer in proportion to the length `n`.

So if `n` is 10 items - the new array would be 10 items.

Moral of the Story:
the space that gets taken up is directly proportionate
to `n` which is the input array.

*/
```
