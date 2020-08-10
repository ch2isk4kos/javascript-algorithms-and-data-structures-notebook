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

### recursive

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
