// You are an aspiring computer scientist tasked with creating a function that can find the shortest path between two locations in a graph. The graph represents various locations and the roads connecting them, with each road having a specific distance associated with it. Your goal is to create a function called bfsShortestPath (graph, source, target) that takes in the graph, the source node (representing the traveler's current location), and the target node (representing the traveler's destination). The function should return an array representing the shortest path from the source to the target.

// The graph is represented using an adjacency list. This means that each location in the graph is a node, and the roads connecting them are represented as edges. The adjacency list stores the neighboring nodes for each node, allowing you to traverse the graph efficiently. Your task is to create a bfsShortestPath function, utilizing the Breadth-First Search (BFS) algorithm to find the shortest path from the source to the target. The function should return an array that represents the shortest path, starting from the source and ending at the target.

// Sample Input: A: ['B', 'C'],   B: ['A', 'D', 'E'],   C: ['A', 'F'],   D: ['B'],   E: ['B', 'F'],   F: ['C', 'E'], in the format of Vertices: (neighboring nodes) and source node will be A and Destination node will be F

// Sample Output: Shortest path from A to F: [ 'A', 'C', 'F' ]

function bfsShortestPath(graph, source, target) {
  // Queue to store nodes to be visited
  const queue = [];
  queue.push([source]);

  // Visited nodes to keep track of visited locations
  const visited = new Set();
  visited.add(source);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    // If the current node is the target, return the path
    if (current === target) {
      return path;
    }

    // Explore neighbors of the current node
    const neighbors = graph[current];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }

  // If no path is found, return null
  return null;
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const source = "A";
const target = "F";

const shortestPath = bfsShortestPath(graph, source, target);
console.log(`Shortest path from ${source} to ${target}:`, shortestPath);
