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

graph.addVertex("New York");         //  Graph { adjacencyList: { 'New York': [] } }
graph.addVertex("New Jersey");       //  Graph { adjacencyList: { 'New York': [], 'New Jersey': [] } }
graph.addVertex("Oakland");          //  Graph { adjacencyList: { 'New York': [], 'New Jersey': [], 'Oakland': [] } }
graph.addVertex("San Fransisco");    //  Graph { adjacencyList: { 'New York': [], 'New Jersey': [], 'Oakland': [], 'San Fransisco': [] } }

graph.adjacencyList["New York"].push("New York City");
