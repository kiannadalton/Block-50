// You are a cab driver in Boston, and you receive a request to pick up a passenger from a specific location. Your task is to find all possible routes to reach the passenger's location using the Depth First Search (DFS) algorithm in JavaScript. You need to implement the Depth First Search algorithm to find all possible routes from your current location (the starting node) to the passenger's location (the target node). Your goal is to provide a list of all possible routes. Implement the dfsAllRoutes(graph, source, target) function in JavaScript that takes the graph, the source node (your current location), and the target node (the passenger's location) as input. The function should return an array of all possible routes from the source to the target.

// Sample Input:  A: ["B", "C"],   B: ["A", "D", "E"],   C: ["A", "F"],   D: ["B"],   E: ["B", "F"],   F: ["C", "E"],  in the format of Vertices: (neighboring nodes) and source node will be A and Destination node will be F.

// Sample Output: All possible routes from A to F: [ [ 'A', 'B', 'E', 'F' ], [ 'A', 'C', 'F' ] ]

//The below is a function for a DFS graph with parameters that inclide  graph, source, and target destinations.
function dfsAllRoutes(graph, source, target) {
  const routes = [];

  function dfs(current, path) {
    if (current === target) {
      routes.push([...path, current]);
      return;
    }

    path.push(current);
    //visits each neighboring nodes
    const neighbors = graph[current];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!path.includes(neighbor)) {
        dfs(neighbor, path);
      }
    }

    path.pop();
  }

  dfs(source, []);

  return routes;
}

// The Nodes and their neighbors
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
//initialize nodes with source and destination
const source = "A";
const target = "F";

const allRoutes = dfsAllRoutes(graph, source, target);
//prints the all possible outputs
console.log(`All possible routes from ${source} to ${target}:`, allRoutes);

// output works - ABEF, ACF
