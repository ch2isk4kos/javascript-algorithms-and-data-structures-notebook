# Data Structures: Priority Queues

---

## Priority Queue

<https://en.wikipedia.org/wiki/Priority_queue>

An abstract data type similar to regular **queue** or **stack** data structure in which each element additionally has a "priority" associated with it. In a Priority Queue, an element with high priority is served before an element with low priority.

In some implementations, if two elements have the same priority, they are served according to the order in which they were enqueued, while in other implementations, ordering of elements with the same priority is undefined.

While priority queues are often implemented with Heaps, they are conceptually distinct from Heaps. A Priority Queue is a concept like a **list** or **map**; just as a list can be implemented with a linked list or an array, a Priority Queue can be implemented with a Heap or a variety of other methods such as an unordered array.

The logic behind a Priority Queue is to retrieve one node at a time - out of the structure - and _do something_ to it. Think of an emergency room that admits  patients based on the severity of their wound, i.e.: a broken leg would have priority over someone with the common cold.

### Naive Priorty Queue

Use a list to store all nodes.

```js
// List { priority: 3, priority: 1, priority: 5, priority: 4 }
```

Iterate over each each item to find the highest priorty node.
**NOTE:** a lower priorty number denotes a higher priority.

---

## Priority Queue: Solution

```js
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // add node to queue
  
  enqueue(value, priority) {
    let node = new Node(value, priority)
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while(idx > 0){
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element.priority >= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // remove node from queue

  dequeue() {
    // remove first node and replace with max node
    let min = this.values[0];
    let end = this.values.pop();

    // edge case
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  // adjust structure

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const node = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      // check to make sure children aren't out of bounds
      let leftChild, rightChild;
      let swap = null;

      // left child
      if (leftChild < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild.priority < node.priority) {
          swap = leftChildIndex;
        }
      }

      // right child
      if (rightChild < length) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap === null && rightChild.priority < node.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      // swap
      this.values[index] = this.values[swap];
      this.values[swap] = node;
      index = swap;
    }
  }
}
```

### breakdown

```js
let queue = new PriorityQueue();

queue.enqueue("head cold", 5);
queue.enqueue("broken arm", 2);
queue.enqueue("concussion", 1);
queue.enqueue("deep cut", 3);
queue.enqueue("flu", 4);

queue
/*
PriorityQueue {
  values: [
    Node { value: 'concussion', priority: 1 },
    Node { value: 'deep cut', priority: 3 },
    Node { value: 'broken arm', priority: 2 },
    Node { value: 'head cold', priority: 5 },
    Node { value: 'flu', priority: 4 }
  ]
}
*/

queue.dequeue();  // Node { value: 'concussion', priority: 1 }

queue
/*
PriorityQueue {
  values: [
    Node { value: 'flu', priority: 4 },
    Node { value: 'deep cut', priority: 3 },
    Node { value: 'broken arm', priority: 2 },
    Node { value: 'head cold', priority: 5 }
  ]
}
*/

```

---
