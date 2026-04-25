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
        
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            
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

    inorder(node = this.root, result = []) {
        if (node !== null) {
            this.inorder(node.left, result);
            result.push(node.value);
            this.inorder(node.right, result);
        }
        return result;
    }

    preorder(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preorder(node.left, result);
            this.preorder(node.right, result);
        }
        return result;
    }

    postorder(node = this.root, result = []) {
        if (node !== null) {
            this.postorder(node.left, result);
            this.postorder(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    findMin(node = this.root) {
        if (node === null) return null;
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }

    findMax(node = this.root) {
        if (node === null) return null;
        while (node.right !== null) {
            node = node.right;
        }
        return node.value;
    }

    delete(value) {
        this.root = this.#deleteNode(this.root, value);
        return this;
    }

    #deleteNode(node, value) {
        if (node === null) return null;

        if (value < node.value) {
            node.left = this.#deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.#deleteNode(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            let minRight = node.right;
            while (minRight.left !== null) {
                minRight = minRight.left;
            }
            node.value = minRight.value;
            node.right = this.#deleteNode(node.right, minRight.value);
        }
        return node;
    }

    height(node = this.root) {
        if (node === null) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
}


const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log( tree.inorder())
console.log( tree.preorder())
console.log( tree.postorder())
console.log( tree.search(40))
console.log( tree.findMin())
console.log( tree.findMax())
console.log( tree.height())