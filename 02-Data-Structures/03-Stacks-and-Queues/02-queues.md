# Data Structures: Queues

---

## Queues

<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>

A collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of of entities from the other end of the sequence.

Similar to a stack. A data structure which primarily functions around insertion and removal of nodes. Unlike stacks, **Queues** follows a **FIFO** approach to it's  functionality.

Queues exists everywhere:

* Waiting in line at a deli counter or an amusement park
* Waiting in a PS4 lobby for a server to pick teams and begin the game
* Uploading/Downloading a file by torrent
* Waiting for the communal printer to process your papers

</br>

### FIFO: First In First Out

The first piece of data inside of a queue is always the first element removed.

---

## Writing a Queue from Scratch

A Linked List-based Queue

</br>

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add node to end of queue

  enqueue(value) {
    let node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this.size;
  }

  // remove first node added to the queue
  
  dequeue() {
    if (!this.first) return null;

    let current = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return current.value;
  }
}
```

```js
let queue = new Queue();

queue.enqueue(100)      // 1
queue.enqueue(101)      // 2
queue.enqueue(102)      // 3

queue.dequeue()         // 100
queue.dequeue()         // 101

queue
/*
Queue {
  first: Node { value: 102, next: null },
  last: Node { value: 102, next: null },
  size: 1 }
*/
```

---

## Queues: Big O

</br>

| insertion | removal | searching | accessing |
| ----------- | --------- | ----------- | ----------- | ----------- |
| Constant: O( 1 ) | Constant: O( 1 ) | Constant: O( n ) | Constant: O( n ) |

</br>

---

## Queues: Resources

**GeeksforGeeks**:
<https://www.geeksforgeeks.org/queue-data-structure/>

**Tutorials Point**:
<https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm>