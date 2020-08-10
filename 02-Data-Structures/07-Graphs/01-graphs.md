# Data Structures: Graphs

---

## Graph

<https://en.wikipedia.org/wiki/Graph_(data_structure)>

An abstract data type that is meant to implement the undirected graph and directed graph concepts from the field of graph theory within mathematics.

A graph data structure consists of a finite - and possibly mutable - **set of vertices** - also called **nodes** or **points** - together with a set of unordered pairs of these vertices for an _undirected graph_ or a set of ordered pairs for a _directed graph_. These pairs are known as **edges** - also called **links** or **lines** - and for a _directed graph_ are also known as **arrows**. The vertices may be part of the graph structure, or may be external entities represented by integer indices or references.

A graph data structure may also associate to each edge some edge value, such as a symbolic label or a numeric attribute (cost, capacity, length, etc.).

A collection of nodes and connections between them. No parent node or starting and end positions.

### Use Cases

* Social Networking
* Location / Mapping
* Routing Algorithms
* Visual Hierarchy
* File System Optimization
* **Just About Everywhere**

### Types of Graphs

* **Vertex** - a node
* **Edge** - connection between nodes
* **Weighted** - values assigned to distances between vertices.
* **Unweighted** - no values assigned to distances between vertices.
* **Directed** - one way connection between vertices.
* **Undirected** - two way connections between vertices.

---

## Graph: Adjacency Matrix

<https://en.wikipedia.org/wiki/Adjacency_matrix>

A square matrix used to represent a finite graph. The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph.

A **matrix** is a 2-Dimensional structure usually implemented - but not always -  with nested arrays.

</br>

**key:**
0 = no edge
1 = edgee

| - | A | B | C | D | E | F |
| --- | --- | --- | --- | --- | --- | --- |
| **A** | 0 | **1** | 0 | 0 | 0 | **1** |
| **B** | **1** | 0 | **1** | 0 | 0 | 0 |
| **C** | 0 | **1** | 0 | **1** | 0 | 0 |
| **D** | 0 | 0 | **1** | 0 | **1** | 0 |
| **E** | 0 | 0 | 0 | **1** | 0 | **1** |
| **F** | **1** | 0 | 0 | 0 | **1** | 0 |

</br>

---

## Graph: Adjacency List

<https://en.wikipedia.org/wiki/Adjacency_list>

A collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a vertex in the graph.

Uses an array or a list to log edges.

</br>

### array

| - | 0 | 1 | 2 | 3 | 4 | 5 |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **[** | [ 1, 5 ] **,** | [ 0, 2 ] **,** | [ 1, 3 ] **,** | [ 2, 4 ] **,** | [ 3, 5 ] **,** | [ 4, 0 ] **,** | **]**

</br>

### list

| { |  |
| --- | --- |
| **A:** | [ "B", "F" ] **,** |
| **B:** | [ "A", "C" ] **,** |
| **C:** | [ "B", "D" ] **,** |
| **D:** | [ "C", "E" ] **,** |
| **E:** | [ "D", "F" ] **,** |
| **F:** | [ "E", "A" ] **,** |
| **}** |  |

</br>

---
