class Graph {
    constructor(){
        this.matrix = []
    }
    add(vert){
        this.matrix[vert] = []
    }
    addEdge(vert1, vert2){
        this.matrix[vert1][vert2] = 1
        this.matrix[vert2][vert1] = 1 // so its undirected. (turns out i can use my brain)
    }
    checkEdge(vert1, vert2) {
        if (!this.matrix[vert1] || !this.matrix[vert2]) return -1
        return (this.matrix[vert1][vert2] || 0) || ((this.matrix[vert2][vert1] || 0)) // second one was so unneeded
    }
    listConnected(){
        const len = this.matrix.length
        const res = []
        for (let i = 0; i < len; i++){
            if (!this.matrix[i]) continue;
            for (let j = 0; j < len; j++){
                if (res.some((el,ind)=>i==el[1]&&j == el[0])) continue;
                if (this.matrix[i][j] == 1) res.push([i, j]);
            }
        }
        return res
    }
    checkVertice(vert){
        if (vert >= this.matrix.length) return false;
        return Boolean(this.matrix[vert])
    }
    get len(){
        return this.matrix.length
    }
}

// const G = new Graph()
// G.add(10)
// G.add(8)
// G.add(7)
// G.add(7)
// G.add(1)
// G.add(2)
// G.add(6)
// G.add(9)
// G.addEdge(10,8)
// G.addEdge(10,9)
// G.addEdge(1,8)
// G.addEdge(1,1) // so this is self loop
// G.addEdge(2,1)
// G.addEdge(6,7) // DONT

// console.log(G.matrix)
// console.log(G.listConnected())
// console.log(G.checkVertice(30))
// console.table(G.matrix)