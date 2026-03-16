class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined; // Avoid duplicates
            
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // Search for a value in the tree
    search(value) {
        let current = this.root;
        
        while (current !== null) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // In-order traversal (Left, Root, Right) - gives sorted output
    inorder(node = this.root, result = []) {
        if (node !== null) {
            this.inorder(node.left, result);
            result.push(node.value);
            this.inorder(node.right, result);
        }
        return result;
    }

    // Pre-order traversal (Root, Left, Right)
    preorder(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preorder(node.left, result);
            this.preorder(node.right, result);
        }
        return result;
    }

    // Post-order traversal (Left, Right, Root)
    postorder(node = this.root, result = []) {
        if (node !== null) {
            this.postorder(node.left, result);
            this.postorder(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    // Find the minimum value
    findMin(node = this.root) {
        if (node === null) return null;
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }

    // Find the maximum value
    findMax(node = this.root) {
        if (node === null) return null;
        while (node.right !== null) {
            node = node.right;
        }
        return node.value;
    }

    // Delete a value from the tree
    delete(value) {
        this.root = this.deleteNode(this.root, value);
        return this;
    }

    deleteNode(node, value) {
        if (node === null) return null;

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // Node to delete found
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            // Node has two children
            let minRight = node.right;
            while (minRight.left !== null) {
                minRight = minRight.left;
            }
            node.value = minRight.value;
            node.right = this.deleteNode(node.right, minRight.value);
        }
        return node;
    }

    // Get height of the tree
    height(node = this.root) {
        if (node === null) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log("In-order:", tree.inorder());     // [20, 30, 40, 50, 60, 70, 80]
console.log("Pre-order:", tree.preorder());   // [50, 30, 20, 40, 70, 60, 80]
console.log("Post-order:", tree.postorder()); // [20, 40, 30, 60, 80, 70, 50]
console.log("Search 40:", tree.search(40));   // true
console.log("Min:", tree.findMin());          // 20
console.log("Max:", tree.findMax());          // 80
console.log("Height:", tree.height());        // 2