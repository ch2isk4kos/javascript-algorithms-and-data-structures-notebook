# Data Structures: Tree Traversal

---

## Tree Traversal

<https://en.wikipedia.org/wiki/Tree_traversal>

A form of **graph traversal** - the process of visiting each vertex in a graph - and refers to the process of visiting (checking and/or updating) each node in a tree data structure, **exactly once**. Such traversals are classified by the order in which the nodes are visited. The following algorithms are described for a binary tree, but they may be generalized to other trees as well.

Also referred to as a **tree search** or **walking the tree**.

It's a systematic way of searching nodes in a tree.

With a standard Tree, there are many different was of traversal. Two common approaches to traversing a tree come in the form of:

* Breadth-first Search
* Depth-first Search
  * In Order
  * Pre Order
  * Post Order

These refer to the general directions.

---

## Breadth-first Search ( BFS )

<https://en.wikipedia.org/wiki/Breadth-first_search>

Iteratively checks across each layer of the tree from the parent down to its children.

It uses a **queue** - FIFO structure - and a **variable** to store the value of the node searched.

</br>

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // add node to tree

  insert(value) {
    let node = new Node(value);
    let current;

    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      current = this.root;

      while(true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find node in tree

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  breadthFirst() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(this.root);

    // while something is in the queue
    while(queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

}
```

### breadth-first breakdown

```js
let tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(24);

/*
BST {
  root:
    Node { value: 10,
      left: Node { value: 6, left: [Node], right: [Node] },
      right: Node { value: 15, left: null, right: [Node] } }
    }
*/

tree.breadthFirst();    //  [ 10, 6, 15, 2, 7, 24 ]
```

---

## Depth-first Search ( DFS )

<https://en.wikipedia.org/wiki/Depth-first_search>

Traverses nodes vertically down to the end of the tree before visiting child nodes.

</br>

### DFS: Pre Order

Visits the root node first. Then explores the entire left side before traversing the right side of the tree.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // add node to tree

  insert(value) {
    let node = new Node(value);
    let current;

    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      current = this.root;

      while(true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find node in tree

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // depth-first search: pre-order

  depthFirstPreOrder() {
    let order = [];
    let current = this.root;

    function traverse(node) {
      order.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return order;
  }

}
```

### depth-first: pre-order breakdown

```js
let tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(24);

/*
BST {
  root:
    Node { value: 10,
      left: Node { value: 6, left: [Node], right: [Node] },
      right: Node { value: 15, left: null, right: [Node] } }
    }
*/

tree.depthFirstPreOrder();    //  [ 10, 6, 2, 7, 15, 24 ]

/*

========================
    FIRST ITERATION
========================

  depthFirstPreOrder() {
    let order = [];
    let current = 10;

    function traverse({ value: 10, left: Node { value: 6, left: [Node], right: [Node] }, right: Node { value: 15, left: null, right: [Node] } }) {

      order.push(10);   // [ 10 ];

      if (node.left) traverse({ value: 6, left: [Node], right: [Node] });   // TRUE
      if (node.right) traverse(node.right);
    }

    traverse(10);
    return order;
  }

========================
    SECOND ITERATION
========================

    function traverse({ value: 6, left: [Node], right: [Node] }) {

      order.push(6);   // [ 10, 6 ];

      if (node.left) traverse(2);           // TRUE
      if (node.right) traverse(node.right);
    }

========================
    THIRD ITERATION
========================

    function traverse({ value: 2, left: null, right: null }) {

      order.push(2);   // [ 10, 6, 2 ];

      if (node.left) traverse(node.left);           // FALSE
      if (node.right) traverse(node.right);          // FALSE
    }

NOTE: traverse(2) pops off the stack then vertically moves back up to 6

========================
    FOURTH ITERATION
========================

    function traverse({ value: 6, left: [Node], right: [Node] }) {

      order.push(2);   // [ 10, 6, 2 ];

      if (node.left) traverse(node.left);                                      // FALSE
      if (node.right) traverse({ value: 2, left: null, right: null });          // TRUE
    }

========================
    FIFTH ITERATION
========================

    function traverse({ value: 6, left: [Node], right: [Node] }) {

      order.push(7);   // [ 10, 6, 2 , 7];

      if (node.left) traverse(node.left);                                      // FALSE
      if (node.right) traverse({ value: 2, left: null, right: null });          // TRUE
    }

NOTE: traverse(6) pops off the stack then vertically moves back up to root

========================
    SIXTH ITERATION
========================

    function traverse({ value: 10, left: Node { value: 6, left: [Node], right: [Node] }, right: Node { value: 15, left: null, right: [Node] } }) {

      order.push(15);   // [ 10, 6, 2 , 7, 15 ];

      if (node.left) traverse(node.left);                                      // FALSE
      if (node.right) traverse({ value: 15, left: null, right: [Node] });      // TRUE
    }

========================
    SEVENTH ITERATION
========================
  
  depthFirstPreOrder() {
    let order = [];
    let current = this.root;

    function traverse({ value: 15, left: null, right: [Node] }) {

      order.push(24);   // [ 10, 6, 2 , 7, 15, 24 ];

      if (node.left) traverse(node.left);          // FALSE
      if (node.right) traverse(node.right);        // FALSE
    }

    traverse(current);
    return [ 10, 6, 2 , 7, 15, 24 ];
  }

NOTE: traverse(24) pops off the stack then vertically moves back up to root

*/
```

</br>

### DFS: Post Order

Similar to DFS: Pre Order but it recursively traverses the entire tree down to its bottom-most children before visiting the parent nodes beginning on the left side then visiting the right side with the root node being visited last.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // add node to tree

  insert(value) {
    let node = new Node(value);
    let current;

    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      current = this.root;

      while(true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find node in tree

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // depth-first search: post-order

  depthFirstPostOrder() {
    let order = [];
    let current = this.root;

    // notice: the only difference of syntax is the placement
    // of the if statements and where you push into the queue.

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      order.push(node.value);
    }

    traverse(current);
    return order;
  }

}
```

### depth-first: post-order breakdown

```js
let tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(24);

/*
BST {
  root:
    Node { value: 10,
      left: Node { value: 6, left: [Node], right: [Node] },
      right: Node { value: 15, left: null, right: [Node] } }
    }
*/

tree.depthFirstPostOrder();    //  [ 2, 7, 6, 24, 15, 10 ]

```

</br>

### DFS: In Order

Recursively traverses the entire tree down to its bottom-most children before visiting the parent nodes beginning on the left side then vertically to the parent node and again down the right branch of the tree.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // add node to tree

  insert(value) {
    let node = new Node(value);
    let current;

    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      current = this.root;

      while(true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find node in tree

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // depth-first search: in-order

  depthFirstInOrder() {
    let order = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);

      order.push(node.value);

      if (node.right) traverse(node.right);

    }

    traverse(current);
    return order;
  }

}
```

### depth-first: in-order breakdown

```js
let tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(24);

/*
BST {
  root:
    Node { value: 10,
      left: Node { value: 6, left: [Node], right: [Node] },
      right: Node { value: 15, left: null, right: [Node] } }
    }
*/

tree.depthFirstPostOrder();    //  [ 2, 7, 6, 10, 15, 24 ]

```

---

## Breadth-first VS Depth-first

The time complexity of the breadth-first and depth-first are the same because you visit each node once. If you had 100 nodes in a treee, no matter which approach you take will always visit 100 nodes. The time is proportionate to `n` as it grows. However, the space that is used in a breadth-first approach could be a lot more than using a depth-first approach. A depth-first search doesn't store each node across the tree, only the nodes in a given branch all the way down the tree. A wider tree - as opposed to a deep tree - uses less space.

---

## Depth-first Search: pre-order VS post-order VS in-order

An **in-order** approach is genereally used on a bianry search trees where the data returns a set of nodes in their underlying order of traversal.

If you're attempting to clone or duplicate a tree, **pre-order** or **post-order** would be a beneficial approach. It starts with the root node of the tree and traverses each branch from the left and then right.

---

## Tree Traversal: Resources

**Tutorials Point**: Tree Traversal
<https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm>

**GeeksforGeeks**: Breadth-first Search
<https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/>

**Hacker Earth**: Breadth-first Search
<https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/tutorial/>

**Brilliant**: Bread-first Search (BFS)
<https://brilliant.org/wiki/breadth-first-search-bfs/>

**GeeksforGeeks**: Depth-first Search or DFS for a Graph
<https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/>

**Brilliant**: Depth-first Search (DFS)
<https://brilliant.org/wiki/depth-first-search-dfs/>

**DFS: In-Order Tree Traversal in 3 Minutes**
<https://www.youtube.com/watch?v=5dySuyZf9Qg>

**DFS: Pre-Order Tree Traversal in 3 Minutes**
<https://www.youtube.com/watch?v=1WxLM2hwL-U>

**DFS: Post-Order Tree Traversal in 2 Minutes**
<https://www.youtube.com/watch?v=4zVdfkpcT6U>
