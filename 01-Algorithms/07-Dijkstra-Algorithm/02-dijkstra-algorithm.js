class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value: value, priority: priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

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

  // Dijkstra Algorithm

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // build initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // while there is a vertex to visit...
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === finish) {
        // build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        // loop through each neighbor...
        for (let neighbor in this.adjacencyList[smallest]) {
          let next = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let option = distances[smallest] + next.weight;

          if (option < distances[next.node]) {
            // updates new smallest distance to neighbor
            distances[next.node] = option;
            // udpates previous node - how you go to neighbor
            previous[next.node] = smallest;
            // enqueue the queue with new priority
            nodes.enqueue(next.node, option);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.adjacencyList
/*

{ 
  A: [ { node: 'B', weight: 4 }, { node: 'C', weight: 2 } ],
  B: [ { node: 'A', weight: 4 }, { node: 'E', weight: 3 } ],
  C: [ 
    { node: 'A', weight: 2 },
    { node: 'D', weight: 2 },
    { node: 'F', weight: 4 } 
    ],
  D: [ 
    { node: 'C', weight: 2 },
    { node: 'E', weight: 3 },
    { node: 'F', weight: 1 } 
    ],
  E: [ 
    { node: 'B', weight: 3 },
    { node: 'D', weight: 3 },
    { node: 'F', weight: 1 }
    ],
  F: [ 
    { node: 'C', weight: 4 },
    { node: 'D', weight: 1 },
    { node: 'E', weight: 1 }
    ] 
}

*/

graph.dijkstra("A", "E");     //  [ 'A', 'C', 'D', 'F', 'E' ]
