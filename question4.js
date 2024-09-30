// Imagine you are developing a navigation system for a delivery robot that needs to navigate through a city to deliver packages efficiently. The city is represented as a graph, where each point is a location, and the edges between points represent the routes that the robot can take. Each edge has a weight associated with it, representing the distance or time required to travel from one point to another. The goal is to use Dijkstra's algorithm in JavaScript to calculate the shortest path for the robot, optimizing package delivery.

// In this scenario, the graph representing the city is as follows:

// Point A connects to Point B with a weight of 5.

// Point A connects to Point C with a weight of 2.

// Point B connects to Point D with a weight of 4.

// Point B connects to Point E with a weight of 2.

// Point C connects to Point B with a weight of 8.

// Point C connects to Point E with a weight of 7.

// Point D connects to Point E with a weight of 6.

// Point D connects to Point F with a weight of 3.

// Point E connects to Point F with a weight of 1.

// Sample Input:  A: { B: 5, C: 2 },   B: { D: 4, E: 2 },   C: { B: 8, E: 7 },   D: { E: 6, F: 3 },   E: { F: 1 },   F: {}, const startNode = "A"; const endNode = "F";

// Sample Output: Shortest path: A -> B -> E -> F and Distance: 8

class PriorityQueue {
  constructor() {
    this.elements = [];
  }
  enqueue(element, priority) {
    const item = { element, priority };
    let added = false;

    for (let i = 0; i < this.elements.length; i++) {
      if (item.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, item);
        added = true;
        break;
      }
    }

    if (!added) {
      this.elements.push(item);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

function dijkstra(graph, start, end) {
  const queue = new PriorityQueue();
  const distances = {};
  const previous = {};

  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }

  distances[start] = 0;
  queue.enqueue(start, 0);

  while (!queue.isEmpty()) {
    const { element: current } = queue.dequeue();

    if (current === end) break;

    for (let neighbor in graph[current]) {
      const distance = distances[current] + graph[current][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = current;
        queue.enqueue(neighbor, distance);
      }
    }
  }

  const path = [];
  let current = end;
  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    path,
    distance: distances[end],
  };
}

const graph = {
  A: { B: 5, C: 2 },
  B: { D: 4, E: 2 },
  C: { B: 8, E: 7 },
  D: { E: 6, F: 3 },
  E: { F: 1 },
  F: {},
};

const startNode = "A";
const endNode = "F";

const result = dijkstra(graph, startNode, endNode);
const path = result.path.join(" -> ");

console.log(`Shortest path: ${path}`);
console.log(`Distance: ${result.distance}`);
