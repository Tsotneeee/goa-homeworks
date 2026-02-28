// level 246:
//? 1) დაასრულეთ LinkedList კლასის იმპლემენტაცია, საწყისი ჩაგდებულია რესურსებში, 
//? ასევე რესურსებში მითითებულია თუ რა ოპერაციები უნდა ჰქონდეს მას.

//! singly linked list
//? შეტრიალება
//? ჩამატება თავში და ბოლოში
//? შეცვლა კონკრეტული ნოუდის
//? შუაში ჩამატება/წაშლა
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkdeList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//         this.tail = null;
//     }

//     //* O(1)
//     pushBack(value) {
//         const newNode = new Node(value);

//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }
//     //* O(1)
//     pushFront(value) {
//         const newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;

//         if (!this.tail) {
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     //* O(n)
//     popBack() {

//         if(!this.head) {
//             return;
//         }
//         if(this.head == this.tail ) {
//             this.head = null;
//             this.tail = null;
//         }
//         let current = this.head;

//         while (current.next != this.tail) {
//             current = current.next;
            
//         }
//         current.next = null;
//         this.tail = current;

//         this.size--;
//     }
//       head   X  Y  tail
//     //* O(1)
//     popFront() {
//         if(!this.head) {
//             return;
//         }
//         this.head = this.head.next;
//         if(!this.size) {
//             this.tail = null;
//         }
//         this.size--;
//     }
// };

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //* O(1)
    pushBack(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    //* O(1)
    pushFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
        this.size++;
    }

    //* O(n)
    popBack() {
        if (!this.head) return;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.size--;
    }

    //* O(1)
    popFront() {
        if (!this.head) return;

        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.size--;
    }

	//* სიის შეტრიალება.
    //* O(n)
    reverse() {
        let prev = null;
        let current = this.head;
        this.tail = this.head;

		//*       head  - 1 - 2 - 3 - tail
	
        while (current) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head = prev;
    }

	//* ცვლის კონკრეტული ნოუდის მნიშვნელობას.
    //* O(n) 
    setAt(index, value) {
        if (index < 0 || index >= this.size) return false;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current.value = value;
        return true;
    }

	//* ჩასმა სიის შუაში კონკრეტულ პოზიციაზე.
    //* O(n) 
    insertAt(index, value) {
        if (index < 0 || index > this.size) return false;
        if (index === 0) return this.pushFront(value);
        if (index === this.size) return this.pushBack(value);

        const newNode = new Node(value);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return true;
    }

	//* წაშლა სიის შუაში კონკრეტული პოზიციიდან.
    //* O(n) - შუაში წაშლა ინდექსით
    removeAt(index) {
        if (index < 0 || index >= this.size) return false;
        if (index === 0) return this.popFront();
        if (index === this.size - 1) return this.popBack();

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.size--;
        return true;
    }

    //* სია კონსოლზე სანახავად
    print() {
        let current = this.head;
        let list = '';
        while (current) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'null');
    }
};

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    pushBack(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

}