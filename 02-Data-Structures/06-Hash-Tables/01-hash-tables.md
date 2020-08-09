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

## Hash Table: Hash Function

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
| "blue", #0000FF  | "golden yellow", #FFDF00 | "crimson", #990000  |  |  |  |  |  |

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
