# Data Structure: Binary Search Trees

---

## Binary Tree

<https://en.wikipedia.org/wiki/Binary_tree>

A tree data structure in which each node has at most two children which are referred to as left child and right child.

</br>

```js
/*

key:
◼︎ = node
                                       ◼︎
                                      / \
                                     ◼︎   ◼︎
                                    / \
                                   ◼︎   ◼︎
                                      / \
                                     ◼︎   ◼︎
*/
```

---

## Binary Search Tree ( BST )

<https://en.wikipedia.org/wiki/Binary_search_tree>

A **rooted binary tree** - an undirected graph in which any two vertic;es are connected by exactly on path - whose internal nodes each store a key greater than all the keys in the nodes left subtree and less than those in its right subtree. Also referred to as an **ordered** or **sorted** binary tree.

BST's are a special case of a binary tree. At most 2 children per node and sorted in a particular way. Every node that is less than the root node is sorted to the one side (left) and every node that is greater than the root is sorted on the other side (right). It then repeats on each child node.

</br>

```js
/*

key:
◼︎ = node
                                       10
                                      /  \
                                     9   15
                                    /   /  \
                                   7   11  20
                                      / \
                                     4  12
*/
```

---

## Binary Search Tree: Skeleton

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
}
```

---

## Binary Search Tree: Solution

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

}

let tree = new BST();
```
