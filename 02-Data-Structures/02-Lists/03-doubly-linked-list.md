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
    this.length = 0;
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

  // replace the value of a node

  set(index, value) {
    let node = this.get(index);

    if (node !== null) {
      node.value = value;
      return true;
    }

    return false;
  }

  // add node to position

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let node = new Node(value);
    let getNode = this.get(index - 1);
    let insertNode = getNode.next;

    getNode.next = node, node.prev = getNode;
    node.next = insertNode, insertNode.prev = node;

    this.length++

    return true;
  }

  // remove node by position

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let nodeToRemove = this.get(index);
//  ********************************
    let prevNode = nodeToRemove.prev;
    let postNode = prevNode;
//  ********************************

    // or

    // ******************************************
    // nodeToRemove.prev.next = nodeToRemove.next;
    // nodeToRemove.next.prev = nodeToRemove.prev;
    // ******************************************

    nodeToRemove.next = null;
    nodeToRemove.prev = null;

    this.length--;
    return node;
  }
}
```

```js

let list = new DoublyLinkedList();

list.push('hello');
list.push('wrld');
list.push('!');
list.unshift('oh');
list.pop();
list.shift();
list.get(0);
list.set(1, 'world');
list.insert(2, '!');
list.remove(2);

```

---

## Doubly Linked List: Big O

</br>

| insertion | removal | searching | accessing |
| ----------- | --------- | ----------- | ----------- | ----------- |
| Constant: O( 1 ) | Best: O( 1 ) or Worst: O( n ) | Constant: O( n ) | Constant: O( n ) |

</br>

Doubly linked lists are beneficial when you need to access and insert nodes in a reverse manner.

Browser history functionality could be created with Doubly Linked Lists.

More efficient than Singly Linked Lists for finding nodes but takes up more memory.

---

## Doubly Linked Lists: Resources

**GeeksforGreeks: Doubly Linked Lists**
<https://www.geeksforgeeks.org/doubly-linked-list/>

**Tutorials Point: Doubly Linked Lists**
<https://www.tutorialspoint.com/data_structures_algorithms/doubly_linked_list_algorithm.htm>
