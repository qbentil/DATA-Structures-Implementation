// Queue implementation

class Queue {
    
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }

    // Functions to be implemented
    // enqueue(item) : Adds an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // dequeue() : Removes an element from the queue
    dequeue() {
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    // peek : Returns the front element of the queue
    peek() {
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    // isEmpty() : Returns true if the queue is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // print() : Prints all the elements of the queue
    print() {
        let str = "";
        for(let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

    
} 