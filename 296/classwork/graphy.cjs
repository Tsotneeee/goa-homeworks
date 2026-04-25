class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = {}; // { 9:[1,2], 3:[7,3]}
        this.isDirected = isDirected;
    }

    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }
    addEdge(node1, node2) {
        if (!this.adjacencyList[node1]) {
            this.addNode(node1);
        }
        if (!this.adjacencyList[node2]) {
            this.addNode(node2);
        }

        this.adjacencyList[node1].push(node2);

        if (!this.isDirected) {
            this.adjacencyList[node2].push(node1);
        }
    }
    removeEdge(node1, node2) {
        if (this.adjacencyList[node1]) {
            this.adjacencyList[node1] = this.adjacencyList[node1].filter(v => v !== node2);
        }
        if (!this.isDirected && this.adjacencyList[node2]) {
            this.adjacencyList[node2] = this.adjacencyList[node2].filter(v => v !== node1);
        }
    }
    removeNode(node) {
        if (!this.adjacencyList[node]) return;
        for (let idk of this.adjacencyList[node]) {
            this.removeEdge(node, idk);
        }
        delete this.adjacencyList[node];
    }
    bfs(node){
        const queue = []

    }
    dfs(node, res = [node], prev = new Set([node])){
        for (let i of this.adjacencyList[node]) {
            if (prev.has(i)) return res;
            this.dfs(i,res,prev);
            res.push(i)
        }
        return res
    }
}

const graph = new Graph(true)

graph.addNode(1)
graph.addNode(2)
graph.addNode(5)
graph.addNode(8)
// graph.addEdge(1,2)
graph.addEdge(1,5)
// graph.addEdge(2,5)
graph.addEdge(5,1)
graph.addEdge(5,8)

console.log(graph.dfs(1))