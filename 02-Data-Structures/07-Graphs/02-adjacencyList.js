/* 
This is an example of a undirected graph
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // adding a vertex

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
}

let graph = new Graph();

graph.addVertex("Get Money");       //  Graph { adjacencyList: { 'Get Money': [] } }
