class Graph {
    constructor(){
        this.values = []
        this.matrix = [] // [ [0, 0], [0, 0] ]
    }
    add(value){
        if (this.values.some(el=>el==value)) return;
        this.values.push(value)
        for (let i = 0; i <= this.matrix.length; i++){
            if (i == this.matrix.length){
                this.matrix.push(new Array(this.values.length).fill(0))
                break
            }
            this.matrix[i].push(0)
        }
    }
    connect(value1,value2){
        this.matrix[this.values.indexOf(value1)][this.values.indexOf(value2)] = 1
    }
    listConnection(){ // this is for test now
        const arr = []
        for (let i = 0; i < this.matrix.length; i++){
            for (let j = 0; j < this.matrix.length; j++){
                if (this.matrix[i][j]) arr.push([this.values[i],this.values[j]])
            }
        }
        return arr
    }
    connected(vert1, vert2){
        const v1 = this.values.indexOf(vert1);
        const v2 = this.values.indexOf(vert2);
        return Boolean(this.matrix[v1][v2])
    }
    separate(vert1, vert2){
        try{
            const v1 = this.values.indexOf(vert1);
            const v2 = this.values.indexOf(vert2);
            this.matrix[v1][v2] = 0
            this.matrix[v2][v1] = 0
            return this.listConnection()
        }catch(err){
            return -1
        }
        
    }
    disconnect(vert){
        const v = this.values.indexOf(vert)
        for (let i = 0; i<this.matrix.length; i++){
            this.matrix[v][i] = 0
            this.matrix[i][v] = 0
        }
        return this.listConnection()
    }
    remove(vert){
        const i = this.values.indexOf(vert)
        this.disconnect(vert)
        this.matrix.splice(i,1);
        this.values.splice(i,1);
        return this.listConnection()
    }
}

const grph = new Graph()
grph.add(1)
grph.add(2)
grph.add(3)
grph.add(3)
grph.add(5)
grph.add(7)
grph.add(9)
grph.add(8)
grph.connect(1,2)
grph.connect(1,3)
grph.connect(5,7)

// console.log()
console.log(grph.listConnection(),grph.values)
// console.table(grph.matrix)