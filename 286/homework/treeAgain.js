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
        if (this.root === null){
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
    inOrder(currentNode = this.root, lst = []){ // this is literaly homework 4-2
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
    diameter(currentNode = this.root){
        if (!currentNode) return 0
        
        let maxDiameter = 0
        
        const getDiameterHelper = (node) => {
            if (!node) return 0
            
            const leftHeight = getDiameterHelper(node.left)
            const rightHeight = getDiameterHelper(node.right)
            
            // Diameter through this node
            const diameterThroughNode = leftHeight + rightHeight
            maxDiameter = Math.max(maxDiameter, diameterThroughNode)
            
            // Return height of the current node
            return 1 + Math.max(leftHeight, rightHeight)
        }
        getDiameterHelper(currentNode)
        return maxDiameter
    }
    isBst(){ //todo: well im lazy thats why. will do it later
        let arr = this.inOrder();
        const sorted = arr.toSorted((a,b)=>a-b)
        for (let i = 0; i<arr.length; i++) if (arr[i] != sorted[i]) return false
        return true
    }
    stringify(){
        return JSON.stringify(this)
    }
    parse(str){
        return JSON.parse(str)
    }
    findNode(val, currentNode = this.root){
        if (val < currentNode.value){
            if (currentNode == null) return -1;
            if (currentNode.value == val) return currentNode;
            return this.findNode(val, currentNode.left)
        }else{
            if (currentNode == null) return -1;
            if (currentNode.value == val) return currentNode;
            return this.findNode(val, currentNode.right)
        }
    }
    #findParent(val, currentNode = this.root){
        if (val < currentNode.value){
            if (currentNode.left == null) return -1;
            if (currentNode.left.value == val) return currentNode;
            return this.#findParent(val, currentNode.left)
        }else{
            if (currentNode.right == null) return -1;
            if (currentNode.right.value == val) return currentNode;
            return this.#findParent(val, currentNode.right)
        }
    }
    delete(val, currentNode = this.root){
        // Find the node and its parent
        const nodeToDelete = this.findNode(val)
        if (nodeToDelete === -1) return false // Node not found
        
        const parent = this.#findParent(val)
        
        // Case 1: Node has no children (leaf node)
        if (!nodeToDelete.left && !nodeToDelete.right){
            if (parent === -1){ // Deleting root
                this.root = null
            } else if (parent.left === nodeToDelete){
                parent.left = null
            } else {
                parent.right = null
            }
            return true
        }
        
        // Case 2: Node has only right child
        if (!nodeToDelete.left){
            if (parent === -1){ // Deleting root
                this.root = nodeToDelete.right
            } else if (parent.left === nodeToDelete){
                parent.left = nodeToDelete.right
            } else {
                parent.right = nodeToDelete.right
            }
            return true
        }
        
        // Case 3: Node has only left child
        if (!nodeToDelete.right){
            if (parent === -1){ // Deleting root
                this.root = nodeToDelete.left
            } else if (parent.left === nodeToDelete){
                parent.left = nodeToDelete.left
            } else {
                parent.right = nodeToDelete.left
            }
            return true
        }
        
        // Case 4: Node has both children
        // Find inorder successor (smallest in right subtree)
        let successor = nodeToDelete.right
        let successorParent = nodeToDelete
        
        while(successor.left){
            successorParent = successor
            successor = successor.left
        }
        
        // Replace node's value with successor's value
        nodeToDelete.value = successor.value
        
        // Delete the successor (which has at most one right child)
        if (successorParent === nodeToDelete){
            nodeToDelete.right = successor.right
        } else {
            successorParent.left = successor.right
        }
        
        return true
    }
    isBalanced(){
        return this.#checkBalance(this.root) !== -1;
    }
    #checkBalance(currentNode){
        // Empty tree is balanced
        if (currentNode == null) return 0;
        
        // Check left subtree
        const leftHeight = this.#checkBalance(currentNode.left);
        if (leftHeight === -1) return -1; // Left subtree is unbalanced
        
        // Check right subtree
        const rightHeight = this.#checkBalance(currentNode.right);
        if (rightHeight === -1) return -1; // Right subtree is unbalanced
        
        // Check balance factor at current node (AVL condition: |leftHeight - rightHeight| <= 1)
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        
        // Return height of current node
        return 1 + Math.max(leftHeight, rightHeight);
    }
}

const tr = new BinarySearchTree(5)
tr.insert(4)
tr.insert(9)
tr.insert(10)
tr.insert(6)
tr.insert(20)
tr.insert(30)

// tr.delete(4)
console.log(tr.isBalanced())

/*
        5
       / \
      4   9
         / \
        6   10  
             \
              20
                \
                 30
*/