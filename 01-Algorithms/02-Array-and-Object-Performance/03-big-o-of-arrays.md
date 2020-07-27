# Array and Object Performance: Big O of Arrays

---

## Arrays: Ordered Lists

A data structure that instrinsically orders data with indices.
Each element has an index numeric value that corresponds to it.

```js

let candies = [ "fruit snacks", "peanut butter cups", "chocolate bar" ];

let values = [ {}, [], true, 24, "value" ];

```

---

## Use Cases

* When you need order
* when you need fast access/insertion and removal;
   fast - meaning constant time O(1)

---

## Big O of Arrays

* Access    -> O(1)
* Insertion -> depends...
* Removal   -> depends...
* Search    -> O(n)

---

## Access

Say you have an array of 10,000 elements,
if you tell JavaScript to access the 9,990th element
it doesn't count each index all the way up to 9,998.
it directly returns the index value.
so the size of the array doesn't matter.

---

## The Problem with Arrays

Inserting an item to the begining of an array;
the reason being due to the indices.

```js

//                    0                  1                  2
let candies = [ "fruit snacks", "peanut butter cups", "chocolate bar" ];

// if you tried to insert an item to the beginning of an array...

//                        ?                     0                  1                  2
candies = [ "chocolate covered cherries", "fruit snacks", "peanut butter cups", "chocolate bar" ];

// it would throw indices off alignment.

// re-indexing each element is not a trivial task.

```

### Insertion

Insertion at the beginning of an array is linear time: O(n)
meaning something has to happen essentially once for each element.

NOTE: That doesn't mean exactly one operation for each element.

It's just roughly the amount of time it takes to grow in proportion
to the size of `n`.

Moral of the Story:
Insertion at the beginning of an array is problematic;
as well as removal at the begining of an array.

```js

//                        0                     1                   2                 3
candies = [ "chocolate covered cherries", "fruit snacks", "peanut butter cups", "chocolate bar" ];

// if you were to remove the first element

//                ?                   ?                 ?
candies = [ "fruit snacks", "peanut butter cups", "chocolate bar" ];

// it would have to re-index each element insdie of the array.

```

---

## Array vs Object: Performance

### Similarites

* both have an acces of constant time: O(1)

---

## Remember

**.push( )** and **pop( )** are always faster than **.shift( )** and **unshift( )**

Accessing is fast no matter from where; whether index[0] or index[100]

There are times where adding to the beginning of an array can be effective.

---

## Big O of Array Methods

push( )    -->  Constant: O(1)
pop( )     -->   Constant: O(1)
shift( )   -->  Linear: O(n)
unshift( ) --> Linear: O(n)
concat( )  --> Linear: O(n)
slice( )   --> Linear: O(n)
splice( )  --> Linear: O(n)
sort( )    --> Quadratic: O(n log n)
forEach/map/filter/reduce/etc( ) --> Constant: O(n)

---
