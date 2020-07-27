# Data Structures: Linked Lists

---

## Linked Lists

<https://en.wikipedia.org/wiki/Linked_list>

A linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.

A linked list is made up of **nodes** and each node has a **value** and a **pointer** to another node or _null_. It is a data structure that uses properties named `head`, `tail` and `length` to keep track of its surrounding nodes.

`head` is the beginning of the list
`tail` is the end
`length` is the amount of nodes

```js
/*
                Singly Linked List


    HEAD            LENGTH = 4           TAIL
     .⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤.
     │                                    │
   -----        -----       -----       -----
  │  1  │ -->  │  3  │ --> │  5  │ --> │  7  │--> null
   -----        -----       -----       -----
    node         node        node        node
*/
```

---

## Linked Lists VS Arrays

A linked list is an ordered list of data but differs from an array.

With an **array**, each item is mapped to an index.

A **linked list** consists of `n` amount of elements with no indices that point to the next element. In order to move to the 5th element, you first have to go through elements 1-4.

</br>

| **Lists** | **Arrays**|
| ----------- | --------- |
| Don't have indices | Indexed in order |
| Connected via nodes with a next pointer | Insertion/Deletion is expensive |
| Random Access is not prohibited | Can be accessed by a specific index |

</br>

Linked Lists are more convenient over arrays in terms of the insertion, deletion or modification of nodes.
