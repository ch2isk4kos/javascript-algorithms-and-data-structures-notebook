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
Its parent is at index `( n - 1 ) / 2`
