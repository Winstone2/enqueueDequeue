class QueueUsingTwoStacks {
    constructor() {
        this.enqueueStack = [];
        this.dequeueStack = [];
    }

    enqueue(item) {
        this.enqueueStack.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        // If the dequeue stack is empty, transfer elements from the enqueue stack
        if (this.dequeueStack.length === 0) {
            while (this.enqueueStack.length > 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        }

        return this.dequeueStack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        // If the dequeue stack is empty, transfer elements from the enqueue stack
        if (this.dequeueStack.length === 0) {
            while (this.enqueueStack.length > 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        }

        return this.dequeueStack[this.dequeueStack.length - 1];
    }

    isEmpty() {
        return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
    }

    size() {
        return this.enqueueStack.length + this.dequeueStack.length;
    }
}
const myQueue = new QueueUsingTwoStacks();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.peek());    // Output: 20
console.log(myQueue.size());    // Output: 2
console.log(myQueue.isEmpty()); // Output: false

myQueue.enqueue(40);
console.log(myQueue.dequeue()); // Output: 20
console.log(myQueue.dequeue()); // Output: 30
console.log(myQueue.isEmpty()); // Output: false

myQueue.enqueue(50);
console.log(myQueue.peek());    // Output: 40
console.log(myQueue.size());    // Output: 1
console.log(myQueue.isEmpty()); // Output: false
