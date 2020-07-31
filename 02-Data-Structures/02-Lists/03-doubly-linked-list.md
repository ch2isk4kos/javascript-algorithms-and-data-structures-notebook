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

  // add to beginning of list
  
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

  // remove from end of list
  
  pop() {
    if (!this.head) return undefined;

    let node = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }

    this.length--;
    return node;
  }

  // remove from beginning of list
  
  shift() {
    if (!this.head) return undefined;

    let node = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }

    this.length--;
    return node;
  }

  // add to beginning of list
  
  unshift(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // access node by position

 get(index) {
    let count, current;

    if (index < 0 || index >= this.length) return undefined;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      console.log('STARTED FROM BEGINNING');

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;

      console.log('STARTED FROM END');

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
}

let list = new DoublyLinkedList();
list.push('hello');
list.push('world');
list.push('!');
list.unshift('oh');
list.pop();
list.shift();

```
