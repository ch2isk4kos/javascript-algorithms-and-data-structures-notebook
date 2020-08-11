# Algorithms: Dijkstra's Shortest Path First

---

## Edsger W. Dijkstra (May 30, 1930 - August 6, 2002)

<https://en.wikipedia.org/wiki/Edsger_W._Dijkstra>

A Dutch computer scientist, programmer, software engineer, systems scientist, science essayist and pioneer in computing science. A theoretical physicist by training, he worked as a programmer at the Mathematisch Centrum (Amsterdam) from 1952 to 1962.

Dijkstra helped advance the field of Computer Science from an art to an academic discipline.

---

## History of Dijkstra's Algorithm

<https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm>

An algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist **Edsger W. Dijkstra** in 1956 and published three years later.

Dijkstra's Algorithm searches for the shortest path between two vertices on a graph.

One of the most popular alogrithms amongst Computer Scientists and one of the more widely used algorithms to date.

**NOTE:** not to be confused with Dykstra's Projection Algorithm.

There are two _prerequisite_ data structures involved: **Graph** and **Priority Queue**.

</br>

### Use Cases

* **GPS** - finding fastest route
* **Network Routing** - finds shortest open path for data
* **Biology** - used to model the spread of viruses among humans
* **Airline Tickets** - find cheapest route to a destination
* many others

---

## Breaking Down Dijkstra's Algorithm

1. Everytime you wish to visit a node, choose the node with the smallest known distance to visit first.

2. Once you visited node with the smallest known distance, check each of its neighboring nodes.

3. For each neighboring node, calculate the distance by summing the total edges that lead to the neighboring node from the node you began with.

4. If the total new distance to a node is less than the previous total, store a new shorter distance for that node.

</br>

### Find the Shortest Path from A to D

</br>

![Weight Graph](<https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzytools.zybooks.com%2FzyAuthor%2FDiscreteMath%2F25%2FIMAGES%2Fembedded_image631dlA2bWxfUcxrFTcOic5s8ihoKMqUyEvIoS5dJtw-GPk_10_Bs2ItdkpPk.png&f=1&nofb=1>)

</br>

### First Iteration: initial state

| Vertex | Shortest Distance From A |
| ------ | ------------------------ |
| **A**  | 0                        |
| **B**  | infinity                 |
| **C**  | infinity                 |
| **D**  | infinity                 |
| **E**  | infinity                 |
| **F**  | infinity                 |

</br>

```js
/*

VISITED = ["A"]

PREVIOUS:
{
  A: null
  B: null
  C: null
  D: null
  E: null
  F: null
}

*/
```

#### Check Neighboring Nodes of A

The distance between:

A and B is less than infinity.
A and F is less than infinity.
A and C is less than infinity.
A and E is less than infinity.

Pick the smallest distance: **2**

| Vertex | Shortest Distance From A |
| ------ | ------------------------ |
| **A**  | 0                        |
| **B**  | ~~infinity~~, 6          |
| **C**  | ~~infinity~~, 7          |
| **D**  | infinity                 |
| **E**  | ~~infinity~~, 2          |
| **F**  | ~~infinity~~, 3          |

</br>

```js
/*

VISITED = ["A"]

PREVIOUS:
{
  A: null
  B: ["A"]
  C: ["A"]
  D: null
  E: ["A"]
  F: ["A"]
}

*/
```

</br>

### Second Iteration: Check Neighboring Nodes of E

</br>

![Weight Graph](<https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzytools.zybooks.com%2FzyAuthor%2FDiscreteMath%2F25%2FIMAGES%2Fembedded_image631dlA2bWxfUcxrFTcOic5s8ihoKMqUyEvIoS5dJtw-GPk_10_Bs2ItdkpPk.png&f=1&nofb=1>)

</br>

The distance between:

~~A has already been visited.~~
E and C is less than infinity.
E and D is less than infinity.
E and F is less than infinity.

Pick the smallest distance: **3**

| Vertex | Shortest Distance From A  |
| ------ | ------------------------- |
| **A**  | 0                         |
| **B**  | ~~infinity~~, 6           |
| **C**  | ~~infinity~~, 7           |
| **D**  | ~~infinity~~, 4           |
| **E**  | ~~infinity~~, ~~2~~       |
| **F**  | ~~infinity~~, 3           |

</br>

```js
/*

VISITED = ["A", "E"]

PREVIOUS:
{
  A: null
  B: ["A"]
  C: ["A", "E"]
  D: ["E"]
  E: ["A"]
  F: ["A", "E"]
}

*/
```

### Third Iteration: Check Neighboring Nodes of F

</br>

![Weight Graph](<https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzytools.zybooks.com%2FzyAuthor%2FDiscreteMath%2F25%2FIMAGES%2Fembedded_image631dlA2bWxfUcxrFTcOic5s8ihoKMqUyEvIoS5dJtw-GPk_10_Bs2ItdkpPk.png&f=1&nofb=1>)

</br>

The distance between:

~~A has already been visited.~~
~~E has already been visited.~~
F and D is less than infinity.

Pick the smallest distance: **3**

| Vertex | Shortest Distance From A  |
| ------ | ------------------------- |
| **A**  | 0                         |
| **B**  | ~~infinity~~, 6           |
| **C**  | ~~infinity~~, 7           |
| **D**  | ~~infinity~~, 1           |
| **E**  | ~~infinity~~, 2           |
| **F**  | ~~infinity~~, 3           |

</br>

```js
/*

VISITED = ["A", "E", "F"]

PREVIOUS:
{
  A: null
  B: ["A"]
  C: ["A"]
  D: ["F"]
  E: ["A"]
  F: ["E"]
}

*/
```

### Solution: The Shortest Path from A to D is through F

</br>

![Weight Graph](<https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzytools.zybooks.com%2FzyAuthor%2FDiscreteMath%2F25%2FIMAGES%2Fembedded_image631dlA2bWxfUcxrFTcOic5s8ihoKMqUyEvIoS5dJtw-GPk_10_Bs2ItdkpPk.png&f=1&nofb=1>)

</br>

The distance between:

~~E has already been visited.~~
~~F has already been visited.~~

| Vertex | Shortest Distance From A  |
| ------ | ------------------------- |
| **A**  | 0                         |
| **B**  | ~~infinity~~, 6           |
| **C**  | ~~infinity~~, 7           |
| **D**  | ~~infinity~~, 1           |
| **E**  | ~~infinity~~, 2           |
| **F**  | ~~infinity~~, 3           |

</br>

```js
/*

VISITED = ["A", "E", "F", "D"]

PREVIOUS:
{
  A: null
  B: ["A"]
  C: ["A"]
  D: ["F"]
  E: ["A"]
  F: ["E"]
}

*/
```

---

## Dijkstra Algorithm: Resources

**GeeksforGeeks:** Dijkstras Shortest Path Algorithm | Greedy Algo-7
<https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/>

**Brilliant:** Dijkstras Shortest Path Finder
<https://brilliant.org/wiki/dijkstras-short-path-finder/>

**CodinGame:** Shortest Paths with Dijkstras Algorithm
<https://www.codingame.com/playgrounds/1608/shortest-paths-with-dijkstras-algorithm/dijkstras-algorithm>

**Dr. Mike Pound:** Dijkstras Algorithm
<https://www.youtube.com/watch?v=GazC3A4OQTE>

**Sergiy Butenko:** Dijkstras Algorithm for Shortest Path Problem
<https://www.youtube.com/watch?v=9jY7bgnDV8w>

**Edsger W. Dijkstra - Lecture:** Reasoning About Programs - Solving 2 problems using programing - 1990
<https://www.youtube.com/watch?v=GX3URhx6i2E>

**Edsger W. Dijkstra:** The Power of Counting Arguments
<https://www.youtube.com/watch?v=0kXjl2e6qD0>
