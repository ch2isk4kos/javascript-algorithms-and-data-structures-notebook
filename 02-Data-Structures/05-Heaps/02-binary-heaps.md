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

  remove() {

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

// MaxBinaryHeap { values: [ 34, 33, 24, 15, 8, 7, 16, 2 ] }

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
