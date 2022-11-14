class Stack {
    constructor() {
        this.stack = [];
    }
    
    push(item) {
        this.stack.push(item);
    }
    
    pop() {
        return this.stack.pop();
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
