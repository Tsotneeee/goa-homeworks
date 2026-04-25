import fs from 'fs';

class Node {
    constructor(value){
        this.value = value,
        this.left = null,
        this.right = null
    }
}

class binarySearchTree {
    constructor(root = null){
        this.root = new Node(root)
    }
    insert(value, startingNode = this.root) {
        const newNode = new Node(value)
        if (this.root == null){
            this.root.value = value
        }

        if (value < startingNode.value){
            if (startingNode.left == null) return startingNode.left = newNode;
            this.insert(value,startingNode.left)

        } else {
            if (!startingNode.right) return startingNode.right = newNode;
            this.insert(value, startingNode.right)
        }
        return this
    }
    min(startNode = this.root){
        if (!startNode.left) return startNode.value;
        return this.min(startNode.left)
    }
    max(startNode = this.root){
        if (!startNode.right) return startNode.value;
        return this.max(startNode.right)
    }
    height(currentNode = this.root){
        if (!currentNode) return -1
        return 1 + Math.max(this.height(currentNode.left),this.height(currentNode.right))
    }
    depth(targetValue){
        let current = this.root;
        let count = 0;
        while(current){
            if (targetValue == current.value) return count;
            count++
            if (targetValue < current.value) current = current.left;
            if (targetValue > current.value) current = current.right;
        }
        return -1
    }
    size(currentNode = this.root){
        if (currentNode == null) return 0;
        return 1 + (this.size(currentNode.left) + this.size(currentNode.right))
    }
    // levelOrder(){
    //     let lst = []
    //     for (let i = 0; i <= this.height(); i++){
    //         this.#levelOrderNode(this.root, i, lst)
    //     }
    //     return lst
    // }
    // #levelOrderNode(currentNode, i, lst){
    //     if (currentNode == null) return;
    //     if (i == 0) return lst.push(currentNode.value);
    //     this.#levelOrderNode(currentNode.left, i - 1, lst)
    //     this.#levelOrderNode(currentNode.right, i - 1, lst)
    // }
}

function outPutTree(tree){
    const strTree = JSON.stringify(tree,null,4)
    fs.writeFileSync('282/homework/treee.json',strTree)
    return JSON.parse(strTree)
}

const tr = new binarySearchTree(5)
tr.insert(2)
tr.insert(1)
tr.insert(4)
tr.insert(6)
tr.insert(7)
tr.insert(10)

class TreeReturns {
    static inOrder(currentNode, lst = []){
        if (currentNode.left != null) this.inOrder(currentNode.left, lst);
        lst.push(currentNode.value)
        if (currentNode.right != null) this.inOrder(currentNode.right, lst);
        return lst
    }
    static preOrder(currentNode, lst = []){
        lst.push(currentNode.value)
        if (currentNode.left != null) this.preOrder(currentNode.left, lst);
        if (currentNode.right != null) this.preOrder(currentNode.right, lst);
        return lst
    }
    static postOrder(currentNode, lst = []){
        if (currentNode.left != null) this.postOrder(currentNode.left, lst);
        if (currentNode.right != null) this.postOrder(currentNode.right, lst);
        lst.push(currentNode.value)
        return lst
    }
    static #height(currentNode){
        if (!currentNode) return -1
        return 1 + Math.max(this.#height(currentNode.left),this.#height(currentNode.right))
    }
    static levelOrder(tree){
        let lst = []
        for (let i = 0; i <= this.#height(tree.root); i++){
            this.#levelOrderNode(tree.root, i, lst)
        }
        return lst
    }
    static #levelOrderNode(currentNode, i, lst){
        if (currentNode == null) return;
        if (i == 0) return lst.push(currentNode.value);
        this.#levelOrderNode(currentNode.left, i - 1, lst)
        this.#levelOrderNode(currentNode.right, i - 1, lst)
    }
}

console.log(TreeReturns.levelOrder(tr))