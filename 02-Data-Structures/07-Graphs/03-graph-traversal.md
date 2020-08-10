# Data Structures: Graph Traversal

---

## Graph Traversal

<https://en.wikipedia.org/wiki/Graph_traversal>

Refers to the process of visiting (checking and/or updating) each vertex in a graph. Such traversals are classified by the order in which the vertices are visited. Tree traversal is a special case of graph traversal.

Graph Traversal deals with visiting, updating and checking vertices in a graph.

**NOTE:** a tree is are special subset of a graph for any given node there is **one** path to visit that node.

</br>

### Use Cases

* Peer to Peer Networking
* Web Crawlers
* Finding "closest" matches/recommendations
* Shortest path problems
  * GPS Navigation
  * Solving Mazes
  * AI ( Shortest path to win the game )

---

## Graph Traversal: Depth-first Search

<https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/>

Exploring as far down one edge as possible before backtracking.

</br>

### depth-first:  recursive

Uses the **call stack** to keep track of the direction of search

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(v) {
    for (let i = 0; i < this.adjacencyList[v].length;  i++) {
      const vertex = this.adjacencyList[v].pop();
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[v];
  }

  // depth-first recursive search

  recursiveDFS(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    // IIFE
    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      console.log('vertex', adjacencyList[vertex]);

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(start);

    return result;
  }
}
```

```js
let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");


graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

graph.recursiveDFS("A")  //   [ 'A', 'B', 'D', 'E', 'C', 'F' ]
```

</br>

### depth-first: iterative

Uses an **internal list** or **array** to keep track of direction of search

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(v) {
    for (let i = 0; i < this.adjacencyList[v].length;  i++) {
      const vertex = this.adjacencyList[v].pop();
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[v];
  }

  // depth-first iterative search

  iterativeDFS(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let current;

    visited[start] = true;

    while (stack.length) {
      current = stack.pop();
      result.push(current);

      this.adjacencyList[current].forEach(next => {
        if (!visited[next]) {
          visited[next] = true;
          stack.push(next);
        }
      })
    }

    return result;
  }
}
```

```js
let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");


graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

graph.iterativeDFS("A");     //   [ 'A', 'C', 'E', 'F', 'D', 'B' ]
```

---

## Graph Traversal: Breadth-first Search

<https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/>

Visits the next or neighboring vertices at the current height/depth of the graph.

</br>

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(v) {
    for (let i = 0; i < this.adjacencyList[v].length;  i++) {
      const vertex = this.adjacencyList[v].pop();
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[v];
  }

  // breadth-first iterative search

  iterativeBFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let current;

    visited[start] = true;

    while (queue.length) {
      current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach(next => {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      })
    }

    return result;
  }
}
```

```js
let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");


graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

graph.iterativeBFS("A");     //   [ 'A', 'B', 'C', 'D', 'E', 'F' ]

/*

QUEUE: ["A"]
RESULT: []

====================================
            FIRST ITERATION
====================================

"A" unshifts into `current` and gets pushed to `result`

QUEUE: ["A"]
RESULT: []

then adds the `neighbors` of "A" into `queue`

QUEUE: ["B", "C"]
RESULT: ["A"]

====================================
            SECOND ITERATION
====================================

then "B" unshifts into `current` and gets pushed to `result`

QUEUE: ["C"]
RESULT: ["A", "B"]

then adds the `neighbors` of "B" into `queue`

QUEUE: ["C", "D"]
RESULT: ["A", "B"]

NOTE: since "A" has already been visited, it doesn't get added to `queue`

====================================
            THIRD ITERATION
====================================

then "C" unshifts into `current` and gets pushed to `result`

QUEUE: ["D"]
RESULT: ["A", "B", "C"]

then adds the `neighbors` of "C" into `queue`

QUEUE: ["D", "E"]
RESULT: ["A", "B", "C"]

NOTE: since "A" has already been visited, it doesn't get added to `queue`

====================================
            FOURTH ITERATION
====================================

then "D" unshifts into `current` and gets pushed to `result`

QUEUE: ["E"]
RESULT: ["A", "B", "C", "D"]

then adds the `neighbors` of "D" into `queue`

QUEUE: ["E", "F"]
RESULT: ["A", "B", "C", "D",]

NOTE: since "E" has already been visited, it doesn't get added to `queue`

====================================
            FIFTH ITERATION
====================================

then "E" unshifts into `current` and gets pushed to `result`

QUEUE: ["F"]
RESULT: ["A", "B", "C", "D", "E"]

then adds the `neighbors` of "D" into `queue`

QUEUE: ["E", "F"]
RESULT: ["A", "B", "C", "D",]

NOTE: since "B" has already been visited, it doesn't get added to `queue`
      and "E" is already in the queue.

====================================
            SIXTH ITERATION
====================================

then "F" unshifts into `current` and gets pushed to `result`

QUEUE: []
RESULT: ["A", "B", "C", "D", "E", "F"]

NOTE: since each vertice has already been visited, it breaks the loop

*/
```
