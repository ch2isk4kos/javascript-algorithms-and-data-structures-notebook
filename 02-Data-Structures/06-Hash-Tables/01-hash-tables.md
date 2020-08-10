# Data Structures: Hash Tables

---

## Hash Table

<https://en.wikipedia.org/wiki/Hash_table>

A data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a **hash code**, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

**NOTE:** a hash table is similar to an array but the keys are not ordered by index.

Ideally, the hash function will assign each key to a unique **bucket**, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions are always accommodated in some way.

Unlike arrays, hash tables are efficient when:

* finding values
* inserting values
* inserting new values
* removing values

Also referred to as a **Hash Map**.

</br>

| Language | Hash Table |
| ----------- | --------- |
| Python | dictionaries |
| JavaScript | objects and maps |
| Java | maps |
| Go | maps |
| Scala | maps |
| Ruby | hashes |

</br>

**NOTE:** there are some restrictions with objects but they take the form of a hash table.

---

## Hash Table: Hash Functions

<https://en.wikipedia.org/wiki/Hash_function>

If you're using an array to implement a hash table - when looking up values, you'll need a way to convert keys into valid array indices. To aquire this functionality - use what is referred to as a **Hash Function**.

Any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called **hash values**, **hash codes**, **digests**, or simply **hashes**. The values are used to index a fixed-size table called a hash table. Use of a hash function to index a hash table is called **hashing** or **scatter storage addressing**.

```js
hash("blue")   // 0
hash(#FFDF00)  // 1
hash("crimson")    // 2
```

| 0 | 1 | 2 |
| ----------- | --------- | ----------- |
| "blue", #0000FF  | "golden yellow", #FFDF00 | "crimson", #990000  |

</br>

🗣ROCK CHALK JAYHAWK

```python
# Python has a built in hash method

hash("Kansas Jayhawks");          # 6066059440938518963
hash("Rock Chalk Jayhawk");       # 5706366610436769526
hash("KU");                       # -732096421873222899

```

</br>

A good **Hash Function** must be:

1. **fast** ⇢ constant time: O( n )
2. **deterministic** ⇢ pure function
3. **uniformly distributed** ⇢ no cluster outputs at specified indices

</br>

### Hash Function: Converting Strings to Numeric Values

```js
// converting a string to a valid numeric value in JavaScript

"string".charCodeAt(index);   // built-in function

"c".charCodeAt(0);            // 99
"chris".charCodeAt(1);        // 104
"chris".charCodeAt(2);        // 114
"chris".charCodeAt(3);        // 105
"chris".charCodeAt(4);        // 115

// subtracting 96 from the statement will output its alphabetic position

"a".charCodeAt(0) - 96;       // 1
"z".charCodeAt(0) - 96;       // 26

// calculating a strings alphanumric code

let total = 0

total += "chris".charCodeAt(0) - 96;    // 3  
total += "chris".charCodeAt(1) - 96;    // 11
total += "chris".charCodeAt(2) - 96;    // 29
total += "chris".charCodeAt(3) - 96;    // 38
total += "chris".charCodeAt(4) - 96;    // 57

```

</br>

### Hash Function: Naive Solution

```js
// hash function

function hash(key, arrayLength) {
  let total = 0;

  for (let char of key) {
    // map character of string to it's alphabetic position
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

// ***************** === *******************

function hash(key, arrayLength) {
  let total = 0;

  for (let i = 0; i < key.length; i++) {
    // map character of string to it's alphabetic position
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

hash("blue", 10);     // 0
hash("red", 10);      // 7
hash("yellow", 10);   // 2

```

</br>

**The Problems with this Solution**:

1. only hashes strings
2. not constant time - linear in key length
3. could be more arbitrary

</br>

### Hash Function: Naive Solution with Prime Number

```js

function hash(key, arrayLength) {
  let total = 0;
  let PRIME_LENGTH = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * PRIME_LENGTH + value) % arrayLength;
  }
  return total;
}

hash("blue", 10);     // 0
hash("red", 10);      // 7
hash("yellow", 10);   // 2

```

</br>

`PRIME_LENGTH` is helpful in spreading out the keys more uniformly. It's helpful if the length of the input array is a prime length.

</br>

### Hash Function: Handling Collisions

Even with a large array and an efficient hash function, it's inevidable to have collisions. A collision is when two pieces of data are assigned the same position inside of the table.

There are many strategies when dealing with collisions. Two of the more common approaches are: **Separate Chaining** and **Linear Probing**.

</br>

#### 1. Separate Chaining

each index in the array storing the values of the table uses a more sophisticated data structure like another **array** or a **linked list**.

| 0 | 1 | 2 |
| ----------- | --------- | ----------- |
| [ "blue", #0000FF ]  | **[** [ "goldenyellow", #FFDF00 ] **,** | [ "crimson", #990000 ]  |
|   | [ "darkgrey", #A9A9A9 ] **]**|   |

</br>

#### 2. Linear Probing

checks to see if there is a collision before storing the value. If bucket is already occupied, moves to the next empty position.

| 0 | 1 | 2 | 3 |
| ----------- | --------- | ----------- | ----------- |
| [ "blue", #0000FF ]  | [ "goldenyellow", #FFDF00 ] | [ "crimson", #990000 ]  | [ "darkgrey", #A9A9A9 ] |
|   | ~~[ "darkgrey", #A9A9A9 ]~~ | ~~[ "darkgrey", #A9A9A9 ]~~  |

</br>

---

## Hash Table: Solution

```js
class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  // private hash function
  
  _hash(key) {
    let total = 0;
    let PRIME_LENGTH = 31;  // could be any large prime number

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_LENGTH + value) % this.keyMap.length;
    }
    return total;
  }

  // insert a key/value to table

  set(key, value) {
    // hashes key
    let index = this._hash(key);

    // stores key/value pair in the hash table array via separate chaining
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  // retreive value of key

  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {

        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }

      }
    }
    return undefined;
  }

  // prints an array of keys in table

  keys() {
    let array = [];

    // loop over table
    for (let i = 0; i < this.keyMap.length; i++) {
      // if there is something in the bucket
      if (this.keyMap[i]) {
        // loop over keys inside of the bucket
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // if the key is unique
          if (!array.includes(this.keyMap[i][j][0])) {
            // add key to `array`
            array.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return array;
  }

  // prints all values in table

  values() {
    let array = [];

    // loop over table
    for (let i = 0; i < this.keyMap.length; i++) {
      // if there is something in the bucket
      if (this.keyMap[i]) {
        // loop over values inside of the bucket
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // if the value is unique
          if (!array.includes(this.keyMap[i][j][1])) {
            // add value to `array`
            array.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return array;
  }

}

```

```js
let table = new HashTable();

table.set("blue", "#0000FF");
table.set("goldenyellow", "#FFDF00");
table.set("crimson", "#990000");

table.get("blue");              // '#0000FF'
table.keys();                   // [ 'blue', 'crimson', 'goldenyellow' ]
table.values();                 // [ '#0000FF', '#990000', '#FFDF00' ]
```

---

## Hash Table: Resources

**Tutorials Point**: Hash Tables
<https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm>

**Hacker Earth**: Basics of Hash Tables
<https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/>

**Princeton**: Hash Tables
<https://algs4.cs.princeton.edu/34hash/>

**Your Basic**: Hash Tables Explained [step-by-step example]
<https://yourbasic.org/algorithms/hash-tables-explained/>

**Everything Computer Science**: Hash Table
<https://everythingcomputerscience.com/discrete_mathematics/Data_Structures/Hash_Table.html>

**HackerRank**: Hash Tables
<https://www.youtube.com/watch?v=shs0KM3wKv8>
