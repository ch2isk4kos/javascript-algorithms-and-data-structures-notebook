# Data Structures: Binary Heaps

---

## Binary Heap

<https://en.wikipedia.org/wiki/Binary_heap>

A Binary Heap is defined as a binary tree with two additional constraints:

**Shape property**: a binary heap is a complete binary tree; all levels of the tree - except possibly the last one (deepest) - are fully filled and the last level of the tree is not complete, the nodes of that level are filled from left to right.

**Heap property**: the key stored in each node is either greater than or equal to (≥) or less than or equal to (≤) the keys in the node's children, according to some total order.

A Binary Heap is compact as possible. All the children of each node are as full as they can be and left children are filled out first.

Binary Heaps are used to make implement what is referred to as a **Priority Queue**.

Also used for **Graph Traveral**.

### Max Binary Heap

Parent nodes are always larger than child nodes. Each parent has at most two children.

You add values to a Max Binary Heap by inserting to the bottom of the tree and **bubble up** by taking the inserted value and comparing it to its parent. If the value is greater than its parent, they switch positions.

### Min Binary Heap

Parent nodes are always smaller than child nodes.

### Bubble Up

Moving a node from the end up to the correct location.

### Sink Down

The procedure for removing the root node from the heap - effectively extracting the maximum element of a Max Heap or the minimum element of a Min Heap.

Restoring the properties is referred to any of the following:

* Bubble Down
* Percolate Down
* Sift Down
* Trickle Down
* Heapify Down
* Cascade Down
* Extract Min/Max

---

## Binary Heap: Storing

The easy way of storing data in a Binary Heap is by using a **list** or an **array**.

### search for the children of a parent node

For any index of an array `n`:
The left child is stored at `2n + 1`
The right child is stored at `2n + 2`

### search for the parent of a child node

For any child node at index `n`:
Its parent is at index `( n - 1 ) / 2` rounded down.

---

## Binary Heap: Solution

```js
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // add node to heap
  
  insert(node) {
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while(idx > 0){
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if(element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // remove node from heap

  extractMax() {
    // remove first node and replace with max node
    let max = this.values[0];
    let end = this.values.pop();

    // edge case
    if (this.values > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  // adjust heap structure

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

        if (leftChild > node) {
          swap = leftChildIndex;
        }
      }

      // right child
      if (rightChild < length) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap === null && rightChild > node) ||
          (swap !== null && rightChild > leftChild)
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
let heap = new MaxBinaryHeap();

heap.insert(2);
heap.insert(7);
heap.insert(8);
heap.insert(15);
heap.insert(16);
heap.insert(24);
heap.insert(33);
heap.insert(34);

heap  // MaxBinaryHeap { values: [ 34, 33, 24, 15, 8, 7, 16, 2 ] }

heap.extractMax();  // 34

heap  // MaxBinaryHeap { values: [ 2, 33, 24, 15, 8, 7, 16 ] }
```

---

## Binary Heap: Resources

**GeeksforGeeks**: Binary Heaps
<https://www.geeksforgeeks.org/binary-heap/>

**CMU**: Binary Heaps
<https://www.cs.cmu.edu/~adamchik/15-121/lectures/Binary%20Heaps/heaps.html>

**Tutorials Point**: Binary Heaps
<https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_binary_heap.htm>

**Stanford**: Binary Heaps
<https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1206/lectures/heaps/>
