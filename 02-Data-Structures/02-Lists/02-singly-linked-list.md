# Data Structures: Singly Linked Lists

---

## Singly Linked Lists

Linked lists that contain nodes which have a data field as well as 'next' field, which points to the next node in line of nodes. Operations that can be performed on singly linked lists include insertion, deletion and traversal.

</br>

### `push` method

Inserting a node onto the end of list

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
list.push("!");
/*
SinglyLinkedList {
  head: Node { value: 'Allow', next: Node { value: 'Me', next: [Node] } },
  tail: Node { value: '!', next: null },
  length: 6 }
*/
```

</br>

### `pop` method

removing a node from the end of the list

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    // traversing through the list
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    console.log("current: ", current.value);
    console.log("new tail: ", newTail.value);
    console.log("previous length: ", this.length);

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    console.log("new length: ", this.length);

    return current
  }
}
```

```js
list.pop();

/*
current:  !
new tail:  york
previous length: 6
new length: 5
Node { value: '!', next: null }
*/
```

</br>

### `shift` method

Removing a new node from the beginning of the list.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current
  }

  shift() {
    if (!this.head) return undefined;

    let nodeToRemove = this.head;

    this.head = nodeToRemove.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return nodeToRemove;
  }
}
```

```js
list

/*
SinglyLinkedList {
  head: Node { value: 10, next: Node { value: 15, next: [Node] } },
  tail: Node { value: 34, next: null },
  length: 5 }
*/

list.shift();

/*
Node {
  value: 10,
  next: Node { value: 15, next: Node { value: 22, next: [Node] } } }
*/

```

### `unshift` method

Adding a node to the beginning of the list.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current
  }

  shift() {
    if (!this.head) return undefined;

    let nodeToRemove = this.head;

    this.head = nodeToRemove.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return nodeToRemove;
  }

  unshift(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }
}
```

```js
list.unshift('* clears throat *');

/*

SinglyLinkedList {
  head: Node { value: '* clears throat *', next: Node { value: 'Allow', next: [Node] } },
  tail: Node { value: 'Myself', next: null },
  length: 6
}

*/
```

</br>

### `get` method

Retrieving a node by its position in the list.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current
  }

  shift() {
    if (!this.head) return undefined;

    let nodeToRemove = this.head;

    this.head = nodeToRemove.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return nodeToRemove;
  }

  unshift(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let current = this.head;

    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }
}
```

```js
let list = new SinglyLinkedList();

list.push("Eat");
/*
SinglyLinkedList {
  head: Node { value: 'Eat', next: null },
  tail: Node { value: 'Eat', next: null },
  length: 1
}
*/

list.push("Sleep");
/*
SinglyLinkedList {
  head: Node { value: 'Eat', next: Node { value: 'Sleep', next: null } },
  tail: Node { value: 'Sleep', next: null },
  length: 2
}
*/

list.push("Code");
/*
SinglyLinkedList {
  head: Node { value: 'Eat', next: Node { value: 'Sleep', next: [Node] } },
  tail: Node { value: 'Code', next: null },
  length: 3
}
*/

list.get(0);  // Node { value: 'Eat', next: Node { value: 'Sleep', next: Node { value: 'Code', next: null } } }
list.get(2);  // Node { value: 'Code', next: null }
list.get(3);  // null

```

</br>

### `set` method

Modifying the value of a node based on its position in the list.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current
  }

  shift() {
    if (!this.head) return undefined;

    let nodeToRemove = this.head;

    this.head = nodeToRemove.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return nodeToRemove;
  }

  unshift(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let current = this.head;

    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    let node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
}
```

```js
/**/
let list = new SinglyLinkedList();

list.push("*")
/*
SinglyLinkedList {
  head: Node { value: '*', next: null },
  tail: Node { value: '*', next: null },
  length: 1 }
*/

list.push("!")
/*
SinglyLinkedList {
  head: Node { value: '*', next: Node { value: '!', next: null } },
  tail: Node { value: '!', next: null },
  length: 2 }
*/

list.push("$")
/*
SinglyLinkedList {
  head: Node { value: '*', next: Node { value: '!', next: [Node] } },
  tail: Node { value: '$', next: null },
  length: 3 }
*/

list
/*
SinglyLinkedList {
  head: Node { value: '*', next: Node { value: '!', next: [Node] } },
  tail: Node { value: '$', next: null },
  length: 3 }
*/

list.set(2, '#')    // true

list
/*
SinglyLinkedList {
  head: Node { value: '*', next: Node { value: '!', next: [Node] } },
  tail: Node { value: '#', next: null },
  length: 3
}
*/
```

---

## Singly Linked Lists: Resources

**GeeksforGeeks**
<https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/>

**HackerEarth**
<https://www.hackerearth.com/practice/data-structures/linked-list/singly-linked-list/tutorial/>