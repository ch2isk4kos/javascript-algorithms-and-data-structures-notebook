# Sorting Algorithms: Radix Sort

---

## Comparative VS Non-Comparative Sort

</br>

### Comparative

<https://en.wikipedia.org/wiki/Comparison_sort>

### Non-Comparative

<https://en.wikipedia.org/wiki/Integer_sorting>

<http://pages.cs.wisc.edu/~paton/readings/Old/fall08/LINEAR-SORTS.html>

<http://athena.csus.edu/~cookd/130/notes/CSC%20130%20-%20Summer%202020%20-%207%20-%20Non-Comparative%20Sorting.pdf>

---

## Radix Sort

<https://en.wikipedia.org/wiki/Radix_sort>

A non-comparative sorting algorithm that creates and distributes elements into **buckets** according to their **radix**.

In a positional number system, a **radix** - or base - is the number of unique digits, including zero, used to represent numbers. In the decimal system, the radix is 10 because it uses the 10 digits from 0 to 9.

It never makes comparisons between elements.

With Radix sort - also known as **Bucket sort** or **Digital sort** - for elements with more than one significant digit, the _bucketing process_ is repeated for each digit, while preserving the ordering of the prior step, until all digits have been considered.

It's an algorithm that sorts on lists of numbers. It's generally used with binary numbers. You can convert strings and images as well to binary, so it's possible to sort other types of data. But the data you're working with at the time of sorting needs to be a number.

Radix sort exploits the fact that information - about the size of a number - is encoded in the number of digits. More digits mean a bigger number.

Example: a four digit number will always be greater than a two digit number.

```js
let array = [ 1024, 25, 1956, 2001, 500, 7, 7960, 201, 96, 1999];

/*

The first digit from the right most digit
determines which bucket the number gets placed in

NOTE: this is not the sorting process

            [ 1024, 25, 1956, 2001, 500, 7, 7960, 201, 96, 1999 ]
                 -   -     -     -    -  -     -    -   -     -
buckets:

       7960      201                            1956
        500     2001            1024      25      96      7        1999
      |_____| |_____| |_| |_| |______|  |____| |_____|  |___| |_| |_____|
         0       1     2   3      4        5      6       7    8     9

Which then formulates a new list:

            [ 500, 7960, 2001, 201, 1024, 25, 96, 1956, 7, 1999 ]
                -     -     -    -     -   -   -     -  -     -

The process then repeats starting one position over from the left:

            [ 500, 7960, 2001, 201, 1024, 25, 96, 1956,  7, 1999 ]
               -     -     -    -     -   -   -     -   -     -
buckets:
           7
         201
        2001         25                                  1999
        500        1024           1956    7960             96
      |_____| |_| |_____| |_| |_| |____| |_____| |_| |_| |_____|
         0     1     2     3   4     5      6     7   8     9

New list:
            [ 500, 2001, 201,  7, 1024, 25, 1956, 7960, 96, 1999 ]
               -     -    -   -     -   -     -     -   -     -

The process then repeats starting one position over from the left:

            [ 500, 7960, 2001, 201, 1024, 25, 96, 1956,  7, 1999 ]
              -     -     -    -     -   -   -     -   -     -
buckets:
           7
          96
          25                                            1999
        1024                                            1956
        2001        201             500                 7960
      |_____| |_| |_____| |_| |_| |_____| |_| |_| |_| |______|
         0     1     2     3   4     5     6   7   8      9

New list:
            [ 2001, 1024,  25,  96,   7, 201, 500, 7960, 1956, 1999 ]

NOTE: this process goes on for however many digits the largest number has (4)

buckets:
         500
         201
          96    1999
          25    1956
           7    1024    2001                   7960  
       |____| |_____| |_____| |_| |_| |_| |_| |____| |_| |______|
         0       1       2     3   4   5   6    7     8      9

New list:
            [ 7, 25, 96, 201, 500, 1024, 1956, 1999, 7960 ]


*/
```

---

## Radix Sort: Helpers

In order to write the main algorithm of Radix Sort, you need to write helper methods to faciliate the process.

</br>

### `getPosition(number, position)`

returns the digit of the input `number` at the given input `position` value.

</br>

```js
function getPosition(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

getPosition(12345, 0);   // 5
getPosition(12345, 1);   // 4
getPosition(12345, 2);   // 3
getPosition(12345, 3);   // 2
getPosition(12345, 4);   // 1
getPosition(12345, 5);   // 0
```

```js
getPosition(7323, 2);

/*

The value in 'position 2' is 3.
In a base ten system - 3 is in the 100s place

function getDigit(7323, 2) {
         Math.floor(Math.abs(7323) / Math.pow(10, 2)) % 10;
         Math.floor(73) % 10;
  return 3;
}

7323 / 100 => 73.23 % 10 => 70 Remainder 3 = 3

*/

```

</br>

### `getDigitCount(number)`

returns the number of digits of the input number.

</br>

```js
function getDigitCount(number) {
  if (number === 0) return 1;
  // log10: 10 to ? power gives us the input number?
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

getDigitCount(1);      // 1
getDigitCount(25);     // 2
getDigitCount(314);    // 3
```

```js
getDigitCount(423);

/*

10 to ? power equals the input number of 423?

function getDigitCount(423) {
  if (number === 0) return 1;
         Math.floor(Math.log10(Math.abs(423))) + 1;
         Math.floor(Math.log10(423)) + 1;
         Math.floor(2.6263403673750423) + 1;
         2 + 1;
  return 3
}

Math.log10(423) => Math.floor(2.6263403673750423) => 2 + 1 = 3 digits

*/

```

</br>

### `getMaxDigits(array)`

given an array of numbers, returns the number of digits of the largest number(s) in the list.

</br>

```js
function getMaxDigits(array) {
  let maxDigits = 0;
  
  for(let i = 0; i < array.length; i++) {
    //          Math.max(a, b) returns the greater of the two input numbers
    maxDigits = Math.max(maxDigits, getDigitCount(array[i]));
  }

  return maxDigits;
}

getMaxDigits([15000, 1500, 150]);     // 5
getMaxDigits([7, 77, 7777, 777]);     // 4
getMaxDigits([10, 24, 36, 44]);       // 2
```

```js
getMaxDigits(array);

/*

Math.max() => returns whichever of the two numbers is greater.

*/

```

---

## Radix Sort: Resources

Brilliant: Radix Sort
<https://brilliant.org/wiki/radix-sort/>

GeeksforGeeks: Radix Sort
<https://www.geeksforgeeks.org/radix-sort/>
