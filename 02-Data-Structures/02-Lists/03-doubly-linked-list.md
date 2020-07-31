# Data Structures: Doubly Linked Lists

---

## Doubly Linked List

<https://en.wikipedia.org/wiki/Doubly_linked_list>

Same functionality of a singly linked list with an additional pointer on each node which directs to the previous node, making it possible to traverse the list in the opposite direction as well.

The drawback to a doubly linked list is the additional memory it takes to execute but the upside is it's flexibility.

</br>

```js
/*
                         Doubly Linked List


              HEAD            LENGTH = 4           TAIL
              .⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤.
              │                                    │
            -----  next  -----  next -----  next -----
  null <-- │  1  │ -->  │  3  │ --> │  5  │ --> │  7  │ --> null
            -----  <--   -----  <--  -----  <--  -----  
                   prev         prev        prev
*/
```

</br>

### Doubly Linked List: Skeleton

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }
}
```

---

## Doubly Linked List: Solution

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

let list = new DoublyLinkedList();

```
