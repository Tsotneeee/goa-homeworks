const LinkedList = require('./linkedList.cjs') // linked list import

class Graph {
    constructor(){
        this.list = []
    }
    add(vert) {
        if (this.list.length > 0 && this.list.some(el=>el.Head() == vert)) return -1;
        return this.list.push(new LinkedList(vert))
    }
    has(vert) {
        return this.list.some(el=>el.head.value == vert)
    }
    addEdge(v1, v2) {
        if (!this.has(v1) || !this.has(v2)) return -1;
        const node = this.list.find((val,ind)=>{if (val.head.value == v1)return val.head});
        node.add(v2)
        return node
    }
    hasEdge(v1,v2) {
        if (!this.has(v1) || !this.has(v2)) return -1;
        const node = this.list.find((val,ind)=>{if (val.head.value == v1)return val.head});
        return node.has(v2)
    }
    get(vert) {
        return this.list.find(el=>el.head.value == vert)
    }
    get length() {
        return this.list.length
    }
    print(val){
        const res = [val]
        const prev = new Set([val])
        this.#_print(this.get(val).head, res, prev)
        return res
    }
    #_print(currentNode, res, prev){
        if (currentNode == null) return res;
        const node = this.get(currentNode.value)
        if (node && !prev.has(currentNode.value)) {
            res.push(currentNode.value)
            prev.add(currentNode.value)
            this.#_print(node.head, res, prev)
        }
        return this.#_print(currentNode.next, res, prev)
    }
}

// const G = new Graph()
// G.add(9)
// G.add(10)
// G.add(8)
// G.add(1)
// G.add(2)
// G.add(6)
// G.addEdge(9, 10)
// G.addEdge(10,9)
// G.addEdge(10,8)
// G.addEdge(1,8)
// G.addEdge(2,8)
// G.addEdge(2,1)

// console.log(G.hasEdge(8,1))
// console.log(JSON.parse(JSON.stringify(G.list)))
// console.log(G.print(8))