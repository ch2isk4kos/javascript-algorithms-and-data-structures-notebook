# Array and Object Performance: Big O of Objects

---

## Objects: Unordered Key Values

Objects are unordered data structures that use stored in key/value pairs.

```js

let player = {
  first: "Lebron",
  last: "James",
  number: "23",
  team: "Lakers",
  postitions: ["PG", "SG", "SF", "PF"]
}

```

---

## Use Cases

* when you don't need order
* when you need fast access/insertion and removal;
  fast - meaning constant time O( 1 )

---

## Big O of Object

* access     O( 1 )
* insertion  O( 1 )
* removal    O( 1 )
* searching  O( n )

JavaScript is able to:

* add something into an object
* store a new piece of data in constant time
* retrieve, update and remove something in constant time

Searching is O( n ) -> linear time

Not searching in terms of checking the value of a key: that's constant time.

Searching in the scope of checking to see if a given piece of information
is in a value somewhere.

---

## Big O of Object Methods

* Object.keys    -> O( n ) as the number of items grows - each item is visited once and added to an array
* Object.values  -> O( n ) if you have 100 keys in your object - it'll take 100 operations to complete the task
* Object.entries -> O( n ) takes longer with havinng to search for key and value but big picture runs in linear time.
* hasOwnProperty -> O( 1 ) constant time

hasOwnProperty( ) is different.
you pass in a property or key of: "name"
returns `true` or `false`

hasOwnProperty is constant time.
if you're able to access information in constant time - you have a key of "name" and you want the value -
you can also check to see if a key exists in essentially the same amount of time.

---

## In Summation

Objects are really quick for essentially everything,
however there is no order.

Work well in a multitude of situations.

Perform all operations:

Constant Time: O( 1 )

* accessing
* inserting
* updating
* removing

Linear Time: O( n )

* searching