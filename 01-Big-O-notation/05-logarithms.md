# Big O: Logarithms

---

Some algorithms that you will see have a Big O that isn't as simple as:

* O( **1** )
* O( **n** )
* O( **n^2** )

Some Big O expressions consist of more complex mathematical expressions.

One that appears often is the **Logarithm**.

* O( **log n** )

---

## Logarithm

The inverse of exponentiation.

In the same way that **`multiplication`** and **`division`** are a pair, **`logarithms`** and **`exponent exponentiation`** are a pair.

The most common Logarithms are BINARY meaning:

| base | exponent |
| :----: | ---- |
| 2 | 2 to ? power |
| 10 | 10 to ? power |
| e | a logarithm which the base is an irrational number: <br>**10** = log<sub>**e**</sub><sup>( 10 )</sup> = approx. **2.30258** |

</br>

---

## How-to Calculate A Logarithm

</br>

| log<sub>**n**</sub><sup>( value )</sup> | <sub>**n**</sub><sup>( exponent )</sup> = value|
| ----------- | --------- | ----------- |
| log<sub>**2**</sub><sup>( value )</sup> | 2<sup>( exponent )</sup> = value |
| log<sub>**10**</sub><sup>( value )</sup> | 10<sup>( exponent )</sup> = value |

</br>

| log<sub>**n**</sub><sup>( value )</sup> | question | answer |
| ----------- | --------- | ----------- |
| log<sub>**2**</sub><sup>( 8 )</sup> | 2<sup>( **?** )</sup> = 8 | 2<sup>( **3** )</sup>
| log<sub>**2**</sub><sup>( 1 )</sup> | 2<sup>( **?** )</sup> = 1 | 2<sup>( **1/2** )</sup>

</br>

**NOTE:**
Logarithms don't exclusively work with base 2.
You could have **log<sub>3</sub><sup></sup>** of something:

| log<sub>**n**</sub><sup>( value )</sup> | question | answer |
| ----------- | --------- | ----------- |
| log<sub>**3**</sub><sup>( 27 )</sup> | 3<sup>( **?** )</sup> = 27 | 3<sup>( **3** )</sup>

---

## Logarithms and Big O Notation

Big O is concerned with the _Big Picture_ so when dealing with Logarithms, you omit the base value and simplify it as **`log`**.

* log === log<sub>**2**</sub>

**_Base values don't matter in Big O_.**

---

## Big O: Logarithm Rule of Thumb

The binary logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

</br>

| operations | log( 8 ) | is the result greater than 1 ? |
| :----: | :----: | :----: |
| 1 | 8 / 2 | 4 - yes |
| 2 | 4 / 2 | 2 - yes |
| 3 | 2 / 2 | 1 - no|

**Answer:** log( 8 ) = 3

</br>

| operations | log( 25 ) | is the result greater than 1 ? |
| :----: | :----: | :----: |
| 1 | 25 / 2 | 12.5 - yes |
| 2 | 12.5 / 2 | 6.25 - yes |
| 3 | 6.25 / 2 | 3.125 - yes |
| 4 | 3.125 / 2 | 1.5625 - yes |
| **somewhere** | **between** | **4 and 5** |
| 5 | 1.5625 / 2 | 0.78125 - no |

**Answer:** log( 25 ) = 4.64

---

## Logarithm Complexity

An algorithm with log(n) time complexity is GREAT!
_see chart in snapshots_

**Common cases for logarithmic complexities include:**

* Certain search algorithms have logarithmic time complexity.
* Efficient sorting algorithms involve logarithms.
* Recursion sometimes involves logarithmic space complexity.
