# Algorithms and Problem Solving: Devising A Plan

---

## Algorithm
A list of instructions or processes that accomplish a specific task. 

An algorithm could be:

* A set of mathematical steps to solve a problem
* Google's algorithm that performs search queries
* Facebook's algorithm for finding people you might know

---

## Solving Algorithms

**Devise a Plan**

1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve/Simplify
5. Look Back and Refactor

**Master Common Problem Solving Patterns**

* Frequency Counters
* Two Point Problems
* Divide and Conquer

---

## 1. Understanding the Problem

Many of these strategies derive from **George Polya**, author of `How To Solve It`.

#### Ask Yourself Questions

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should result from the solution?
4. Can the outputs be determined by the inputs?
5. Do I have enough information to sovle the problem?
6. How should I label the data involved in this problem?

```js

// ==============================================================
// WRITE A FUNCTION WHICH TAKES TWO NUMBERS AND RETURNS THEIR SUM
// ==============================================================

// 1. Can I restate the problem in my own words?
"implement addition"

/*
2. What are the inputs that go into the problem?
  * integers?
  * floats?
  * how about a string to represent a large number?

3. What are the outputs that should result from the solution?
  * integer?
  * floaat?
  * string?
*/

// 4. Can the outputs be determined by the inputs?
// 5. Do I have enough information to sovle the problem?
// 6. How should I label the data involved in this problem? 
```

---

## 2. Concrete Examples

#### Start with Simple Examples

```js

// ==============================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS THE COUNT
//                  OF EACH CHARACTER IN THE STRING
// ==============================================================

// what would you have to invoke?
characterCount("zzzz")  // { z: 4 }
characterCount("hello") // { h: 1, e: 1, l: 2, o: 1 }
characterCount("world") // { w: 1, o: 1, r: 1, l: 1, d: 1 }

```

#### More Complex Examples

```js

// ==============================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS THE COUNT
//                  OF EACH CHARACTER IN THE STRING
// ==============================================================

characterCount("my favorite number is 1839302392") // could this output?

characterCount("hello hi") // would this count as an input?

```

#### Empty Values

```js

// ==============================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS THE COUNT
//                  OF EACH CHARACTER IN THE STRING
// ==============================================================

characterCount("") // what would happen? 

// null? 
// false? 
// undefined? 
// error?

```

#### Invalid Inputs

```js

// ==============================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS THE COUNT
//                  OF EACH CHARACTER IN THE STRING
// ==============================================================

characterCount(365) // what would happen? 

```

---

## 3. Breaking Down the Problem

Write down the actual steps of the problem in semi-pseudo code

```js

// ==============================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS THE COUNT
//                  OF EACH CHARACTER IN THE STRING
// ==============================================================

function characterCount(string) {
  // create an object to return
  
  /* 
  loop over input string; for each character:
    * if the character is already a key - add one to count
    * if the character is not a key - add it and set value to 1
    * if the character is a number/letter AND is already a key - add one to count
    * if the character is a number/letter AND not a key - add it and set value to 1
    * if character is something other than letter/number - don't do anything
  */

  // return an object with each character and its value
}

```

---

## 4. Solve or Simplify

Solve the problem if you can but if you can't, solve a smaller portion of the problem.

Ignore the processes that are more challenging and handle the code that you're already familiar with first.

This will help gain insight to the more difficult parts.


```js

// ==============================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS THE COUNT
//                  OF EACH CHARACTER IN THE STRING
// ==============================================================

function characterCount(string) {
  
  // create an object to return
  const result = {};
  
  // loop over input string; for each character:
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    // if the character is already a key - add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      // if the character is not a key - add it and set value to 1
      result[char] = 1;
    }
  }
  // return an object with each character and its value
  return result;
}

```

---

## 5. Refactor

Solve the problem if you can but if you can't, solve a smaller portion of the problem. Ignore the processes that are more challenging and handle the code that you're already familiar with first. This will help gain insight to the more difficult parts.



#### Refactoring Questions

* Can you check the result?
* Can you derive the result differently?
* Do you understand it at a glance?
* Could you use the result or method for some other problem?
* Are there improvements that could be made to the performance of your solution?
* Are there other ways to refactor your solution?
* How has this problem been solved before?


```js

// ==============================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS THE COUNT
//                  OF EACH CHARACTER IN THE STRING
// ==============================================================

function characterCount(str) { 
  // create an object to return
  const obj = {};
  // loop over input string; for each character:
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // check to see if the current str[i] is alpha numeric
    if (/[a-z0-9]/.test(char)) {
      // if the character is already a key - add one to count
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        // if the character is not a key - add it and set value to 1
        obj[char] = 1;
      }
    }
  }
  // return an object with each character and its value
  return obj;
}
```

</br>

#### Refactor Again If Need Be

```js
// ==============================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS THE COUNT
//                  OF EACH CHARACTER IN THE STRING
// ==============================================================

function characterCount(str) { 
  const obj = {};
  
  for (let char of str) {
    char = char.toLowerCase();
   
    if (/[a-z0-9]/.test(char)) {
      // accesses a corresponding value of a character in the object.
      obj[char] = ++obj[char] || 1;
      // if truthy - a value already exists - it increments the value by 1
      // else it assigns a value of 1 to the character
    }
  }
  return obj;
}
```

</br>

#### And Again...

```js
// ==============================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS THE COUNT
//                  OF EACH CHARACTER IN THE STRING
// ==============================================================

function characterCount(str) { 
  const obj = {};
  
  for (let char of str) {
    char = char.toLowerCase();
   
    if (isAlphaNumeric(char)) {     // invokes the function below
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  
  if (!(code > 47 && code < 58) &&  // numeric 0-9
      !(code > 64 && code < 91) &&    // upper alpha (A-Z)
      !(code > 96 && code < 123)) {   // lower alpha (a-z)
      return false;
    }
  return true;
}
```



