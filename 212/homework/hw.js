/* stack არის მონაცემთა სტრუქტურა სადაც მხოლოდ ბოლო ელემენტზე წვდომა შეიძლება */

// list ში ყველა ელემენტთან წვდომა შეიძლება stack ში კი მხოლოდ ბოლო ელემენტზე

class Stack {
    #data = [];
    constructor(stackData = ["hello"]){
        this.#data = stackData;
    }
    push(newEl){
        this.#data.push(newEl);
    }
    pop(){
        this.#data.pop();
    }
    get size(){
        return this.#data.length;
    }
    peek(){
        return this.#data[this.size - 1];
    }
    isEmpty(){
        return this.size == 0;
    }
    clear(){
        this.#data = [];
    }
    get print(){
        return `${this.#data.join(" ")}`;
    }
    reverser(){
        const top = this.peek();
        if (typeof top !== 'string' || top === undefined) return '';
        return top.split('').reverse().join('');
    }
}

const stack = new Stack();

// stack.push("hello");
// console.log(stack.print);

console.log(stack.reverser());

