# enqueueDequeue
o implement enqueue and dequeue operations using two stacks, you can use the concept of a "queue simulation" with two stacks. The idea is to use one stack for enqueueing elements (push operation) and the other stack for dequeueing elements (pop operation). When the dequeue stack is empty, you transfer all elements from the enqueue stack to the dequeue stack in reverse order to achieve the FIFO behavior.
Explanation:

    We define a QueueUsingTwoStacks class with two arrays enqueueStack and dequeueStack to store elements.
    The enqueue method simply pushes the elements into the enqueueStack, as it's the stack used for enqueueing.
    The dequeue method transfers elements from the enqueueStack to the dequeueStack if the latter is empty, ensuring the correct order for dequeuing (FIFO).
    The peek method is similar to dequeue but does not remove the element, just returns the next element to be dequeued.
    The isEmpty method checks if both stacks are empty.
    The size method returns the total number of elements in the queue.
    In this example, the QueueUsingTwoStacks class is utilized to perform enqueue and dequeue operations, ensuring the elements are processed in FIFO order.
