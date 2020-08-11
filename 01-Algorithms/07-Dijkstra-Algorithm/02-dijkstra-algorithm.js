class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight: weight });
    this.adjacencyList[v2].push({ node: v1, weight: weight });
  }

}

let graph = new WeightedGraph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 7);
graph.addEdge("A", "C", 9);
graph.addEdge("B", "C", 2);

graph.adjacencyList
/*

{ 
  A: [ { node: 'B', weight: 7 }, { node: 'C', weight: 9 } ],
  B: [ { node: 'A', weight: 7 }, { node: 'C', weight: 2 } ],
  C: [ { node: 'A', weight: 9 }, { node: 'B', weight: 2 } ] 
}

*/