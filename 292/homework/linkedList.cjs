class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head ? new Node(head) : null
    }
    add(val) {
        if (this.head == null) return this.head = new Node(val);
        return this.#_add(val,this.head)
    }
    #_add(val, currentNode){
        if (currentNode.next == null) return currentNode.next = new Node(val);
        return this.#_add(val, currentNode.next);
    }
    get(val) {
        if (this.head == null) return -1;
        return this.#_get(val, this.head)
    }
    #_get(val, currentNode) {
        if (currentNode == null) return -1;
        else if (currentNode.value == val) return currentNode;
        return this.#_get(val, currentNode.next)
    }
    arrify(currentNode = this.head, lst = []){
        lst.push(currentNode.value)
        if (currentNode.next == null) return lst;
        return this.arrify(currentNode.next, lst)
    }
    has(val){
        return this.#_has(val, this.head)
    }
    #_has(val, currentNode) {
        if (currentNode == null) return false;
        else if (currentNode.value == val) return true;
        return this.#_has(val,currentNode.next)
    }
    Head(){
        return this.head.value
    }
    peek(currentNode = this.head){
        if (currentNode.next == null) return currentNode.value;
        return this.peek(currentNode.next)
    }
}

// const lst = new LinkedList(5)
// lst.add(6)
// lst.add(7)

// console.log(lst.head)
// console.log(lst.Head())

module.exports = LinkedList;