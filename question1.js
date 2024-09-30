// You are a network designer entrusted with the responsibility of designing a computer network for a small office. The office consists of multiple rooms, and your goal is to connect them using the least amount of cable, ensuring that each room is connected to the network. You need to analyze the office layout, identify the rooms, and plan the most efficient way to connect them with cables. The objective is to minimize the required cable length while ensuring every room is connected to the network.

// Your task is to apply Prim's graph-based algorithm, which starts with an initial room and progressively adds neighboring rooms with the shortest cable connections. By iteratively expanding the network, you will create a minimum-cost spanning tree that connects all the rooms in the office. Take on the role of the network designer, employ Prim's algorithm, and determine the minimum cost of connecting all the rooms in the office using the provided scenario.

// Sample Input:- new Edge(0, 1, 4),   new Edge(0, 7, 8),   new Edge(1, 2, 8),   new Edge(1, 7, 11),   new Edge(2, 3, 7),   new Edge(2, 8, 2),   new Edge(2, 5, 4),   new Edge(3, 4, 9),   new Edge(3, 5, 14),   new Edge(4, 5, 10),   new Edge(5, 6, 2),   new Edge(6, 7, 1),   new Edge(6, 8, 6),   new Edge(7, 8, 7) in the format of (edge pairs, weights) with a total number of 9 vertices.

// Sample Output: Minimum cost to connect all rooms: 37

// Created a class
class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

// This is a function that performs Prim's algorithm
function primsAlgorithm(edges, numVertices) {
  const visited = new Array(numVertices).fill(false);
  const key = new Array(numVertices).fill(Infinity);
  const parent = new Array(numVertices).fill(null);

  key[0] = 0;

  for (let count = 0; count < numVertices - 1; count++) {
    let minKey = Infinity;
    let minIndex = -1;

    for (let v = 0; v < numVertices; v++) {
      if (!visited[v] && key[v] < minKey) {
        minKey = key[v];
        minIndex = v;
      }
    }

    visited[minIndex] = true;

    for (let i = 0; i < edges.length; i++) {
      const { source, destination, weight } = edges[i];

      if (
        source === minIndex &&
        !visited[destination] &&
        weight < key[destination]
      ) {
        parent[destination] = minIndex;
        key[destination] = weight;
      }
    }
  }

  let totalCost = 0;
  for (let i = 1; i < numVertices; i++) {
    totalCost += key[i];
  }

  return totalCost;
}

// Edges and their assigned weights
const edges = [
  new Edge(0, 1, 4),
  new Edge(0, 7, 8),
  new Edge(1, 2, 8),
  new Edge(1, 7, 11),
  new Edge(2, 3, 7),
  new Edge(2, 8, 2),
  new Edge(2, 5, 4),
  new Edge(3, 4, 9),
  new Edge(3, 5, 14),
  new Edge(4, 5, 10),
  new Edge(5, 6, 2),
  new Edge(6, 7, 1),
  new Edge(6, 8, 6),
  new Edge(7, 8, 7),
];

const numVertices = 9;

const minimumCost = primsAlgorithm(edges, numVertices);
console.log("Minimum cost to connect all rooms:", minimumCost);

// output works - sends back 37
