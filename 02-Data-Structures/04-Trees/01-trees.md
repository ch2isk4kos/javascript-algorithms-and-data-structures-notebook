# Data Strucutres: Trees

---

## Tree

A data structure that consists of nodes in a parent/child relationship. Nodes  cannot point to siblings like a graph can.

A tree must have a **root node** for it to be considered authentic.

**root**: highest singular node of the tree
**parent**: the converse notion of a child.
**child**: a node directly conneceted to another node when moving away from the root.
**siblings**: nodes who have the same parent.
**leaf**: a node with no children.
**edge**: the connection between one node and another.

Trees are **nonlinear** while linked lists are **linear**.

</br>

```js
/*

key:
◼︎ = node
                                       ◼︎  --> root
                             edge <-- /|\
                                     ◼︎ ◼︎ ◼︎  --> parent
                                    /| | |\
                                   ◼︎ ◼︎ ◼︎ ◼︎ ◼︎  --> child
                                  /|  /|\  |\
                                 ◼︎ ◼︎ ◼︎ ◼︎ ◼︎ ◼︎ ◼︎
*/
```

---
