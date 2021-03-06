/* 
This is an example of a undirected - adjacent list - graph 
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // insert vertex

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  // connect two vertices

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // remove connection of two vertices

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  // remove vertex from graph

  removeVertex(v) {
    for (let i = 0; i < this.adjacencyList[v].length;  i++) {
      const vertex = this.adjacencyList[v].pop();
      this.removeEdge(v, vertex);
    }

    delete this.adjacencyList[v];
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

graph.addEdge("New York", "New Jersey");
/*
Graph {
  adjacencyList:
    { 
      'New York': [ 'Oakland', 'New Jersey' ],    <-- LOOK!!!
      'New Jersey': [ 'San Fransisco' ],
      'Oakland': [ 'New York' ],
      'San Fransisco': [ 'New Jersey' ] 
    } 
}
*/

graph.removeEdge("New York", "New Jersey");
/*
Graph {
  adjacencyList:
    { 
      'New York': [ 'Oakland' ],                  <-- LOOK!!!
      'New Jersey': [ 'San Fransisco' ],
      'Oakland': [ 'New York' ],
      'San Fransisco': [ 'New Jersey' ] 
    }
}
*/

graph.removeVertex("New Jersey");
/*
Graph {
  adjacencyList:
    { 
      'New York': [ 'Oakland' ],
      'Oakland': [ 'New York' ],
      'San Fransisco': [] 
    }
}
*/