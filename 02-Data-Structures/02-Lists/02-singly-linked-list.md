# Data Structures: Singly Linked Lists

---

## Singly Linked Lists

Linked lists that contain nodes which have a data field as well as 'next' field, which points to the next node in line of nodes. Operations that can be performed on singly linked lists include insertion, deletion and traversal.

</br>

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// let first = new Node("Allow");
// first.next = new Node("Me");
// first.next.next = new Node("To");
// first.next.next.next = new Node("Re-introduce");
// first.next.next.next.next = new Node("Myself");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

}

let list = new SinglyLinkedList();
```

```js
list.push("Allow");
/*
SinglyLinkedList {
  head: Node { value: 'Allow', next: null },
  tail: Node { value: 'Allow', next: null },
  length: 1 }
*/
list.push("Me");
/*
SinglyLinkedList {
  head: Node { value: 'Allow', next: Node { value: 'Me', next: null } },
  tail: Node { value: 'Me', next: null },
  length: 2 }
*/
list.push("To");
/*
SinglyLinkedList {
  head: Node { value: 'Allow', next: Node { value: 'Me', next: [Node] } },
  tail: Node { value: 'To', next: null },
  length: 3 }
*/
list.push("Re-introduce");
/*
SinglyLinkedList {
  head: Node { value: 'Allow', next: Node { value: 'Me', next: [Node] } },
  tail: Node { value: 'Re-introduce', next: null },
  length: 4 }
*/
list.push("Myself");
/*
SinglyLinkedList {
  head: Node { value: 'Allow', next: Node { value: 'Me', next: [Node] } },
  tail: Node { value: 'Myself', next: null },
  length: 5 }
*/
```

---

## Singly Linked Lists: Resources

**GeeksforGeeks**
<https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/>
