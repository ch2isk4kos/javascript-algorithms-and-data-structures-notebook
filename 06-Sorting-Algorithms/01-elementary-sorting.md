# Sorting Algorithms: Elementary Algorithms

---

## Sorting Algorithms

<https://en.wikipedia.org/wiki/Sorting_algorithm>

Refers to the process of rearranging the itmes in a collection so that items are in some kind of order.

* **Ascending or Descending a list of numbers**
* Displaying names alphabetically
* Grouping movies based on release year or revenue

```js
function sort(array) {
  return array;
}

sort([5, 2, 7, 6, 8, 1, 3, 9, 4]);

// > [1, 2, 3, 4, 5, 6, 7, 8, 9]

```

There are many ways to sort a collect and each approach has its advantages and disadvantages.

---

## Sorting Algorithms: Resources

Visualgo:
<https://visualgo.net/en>

15 Sorting Algorithms in 6 Minutes:
<https://www.youtube.com/watch?v=kPRA0W1kECg>

Comparison Sorting Algorithms:
<https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html>

Sorting Algorithms with Animations [ and Code Snippets ]:
<https://emre.me/algorithms/sorting-algorithms/>

---

## JavaScript Built-in Sorting Methods

JavaScript has a built-in method called `sort` that doesn't work the way you may think.

```js
// works as expected with strings:

["Structures", "Data", "Algorithms", "And"].sort();

// ["Algorithms", "And", "Data", "Structures"]
```

```js
// works different with numbers:

[3, 8, 24, 32, 2, 99, 25, 80, 15].sort();

// [15, 2, 24, 25, 3, 32, 8, 80, 99]

// notice the pattern
```

The default string order is according to string Unicode code points.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort>

Unicode is used to represent strings. So every item in the array is converted to a string and the sorted.

</br>

### Specify How You Want JavaScript to Sort

The JavaScript `sort` method accepts an optional _comparator_ function that lets it know what you want to sort.

The comparator analyzes a pair of elemens  (`a` and `b`)  and determines their sort order based on the return value.

```js
const nums = [3, 8, 24, 32, 2, 99, 25, 80, 15];

nums.sort(function(a, b) {
  return a - b;
});

// [ 2, 3, 8, 15, 24, 25, 32, 80, 99 ]
```

---

## Swapping

Many sorting algorithms involve some sort of swapping functionality to determine the order.

```js
// ES5
function swap(array, index1, index2) {
  let temp = array[index1];
  
  array[index1] = array[index2];
  array[index2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [ arr[idx1], arr[idx2] ] = arr[idx2], arr[idx1];
}
```

---

## Elementary Sorting Algorithms

* Bubble Sort
* Selection Sort
* Insertion Sort
