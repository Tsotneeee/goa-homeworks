class Node {
    constructor(value){
        this.value = value;
        this.left = null,
        this.right = null
    }
}

class BinarySearchTree {
    constructor(root = null){
        this.root = new Node(root) || root
    }
    insert(value, currentNode = this.root){
        if (!this.root){
            this.root = new Node(value)
        }
        if (currentNode.value > value){
            if (!currentNode.left) return currentNode.left = new Node(value);
            this.insert(value,currentNode.left)
        } else {
            if (!currentNode.right) return currentNode.right = new Node(value);
            this.insert(value,currentNode.right)
        }
        return this.root
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
    inOrder(currentNode = this.root, lst = []){
        if (!currentNode) return;
        this.inOrder(currentNode.left, lst)
        lst.push(currentNode.value)
        this.inOrder(currentNode.right, lst)
        return lst
    }
    preOrder(currentNode = this.root, lst = []){
        if (!currentNode) return;
        lst.push(currentNode.value)
        this.inOrder(currentNode.left, lst)
        this.inOrder(currentNode.right, lst)
        return lst
    }
    postOrder(currentNode = this.root, lst = []){
        if (!currentNode) return;
        this.inOrder(currentNode.left, lst)
        this.inOrder(currentNode.right, lst)
        lst.push(currentNode.value)
        return lst
    }
    levelOrder(){
        let lst = []
        for (let i = 0; i <= this.height(); i++){
            this.#levelOrderNode(this.root, i, lst)
        }
        return lst
    }
    #levelOrderNode(currentNode, i, lst){
        if (currentNode == null) return;
        if (i == 0) return lst.push(currentNode.value);
        this.#levelOrderNode(currentNode.left, i - 1, lst)
        this.#levelOrderNode(currentNode.right, i - 1, lst)
    }
}

const tr = new BinarySearchTree(5)
tr.insert(4)
tr.insert(9)
tr.insert(10)
tr.insert(6)

console.log(tr.postOrder())