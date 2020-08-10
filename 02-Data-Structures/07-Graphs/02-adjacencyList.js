/* 
This is an example of a undirected graph
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add vertex

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  // connect two vertices

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

let graph = new Graph();

graph.addVertex("New York");         //  Graph { adjacencyList: { 'New York': [] } }
graph.addVertex("New Jersey");       //  Graph { adjacencyList: { 'New York': [], 'New Jersey': [] } }
graph.addVertex("Oakland");          //  Graph { adjacencyList: { 'New York': [], 'New Jersey': [], 'Oakland': [] } }
graph.addVertex("San Fransisco");    //  Graph { adjacencyList: { 'New York': [], 'New Jersey': [], 'Oakland': [], 'San Fransisco': [] } }

graph.addEdge("New York", "Oakland");
/*
Graph {
  adjacencyList:
    { 
      'New York': [ 'Oakland' ],
      'New Jersey': [],
      'Oakland:' [ 'New York' ],
      'San Fransisco': []
    } 
}
*/

graph.addEdge("New Jersey", "San Fransisco");
/*
Graph {
  adjacencyList:
    { 
      'New York': [ 'Oakland' ],
      'New Jersey': [ 'San Fransisco' ],
      'Oakland': [ 'New York' ],
      'San Fransisco': [ 'New Jersey' ] 
    } 
}
*/