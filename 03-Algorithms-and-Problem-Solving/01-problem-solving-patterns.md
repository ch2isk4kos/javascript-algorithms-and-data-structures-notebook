# Algorithms and Problem Solving: Patterns

---

## Algorithm
A list of instructions or processes that accomplish a specific task. 

An algorithm could be:

* A set of mathematical steps to solve a problem
* Google's algorithm that performs search queries
* Facebook's algorithm for finding people you might know

---

## Solving Algorithms

**1. Devise a Plan**

1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve/Simplify
5. Look Back and Refactor

**2. Master Common Problem Solving Patterns**

* Frequency Counters
* Two Point Problems
* Divide and Conquer

---

## Understanding the Problem

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

## Concrete Examples

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


