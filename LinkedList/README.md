## LINKED LIST - DATA STRUCTURES AND ALGORITHMS

This is a simple implementation of a linked list in JavaScript. It is a simple data structure that is used to store a collection of elements. Each element in the list is called a node. Each node contains two things: the data and a reference to the next node. The last node in the list points to null.

## TERMINOLOGIES

- **Head** - The first node in the list
- **Tail** - The last node in the list
- **Node** - A single element in the list
- **data** - The data stored in the node. It can be any type of data such as a string, number, object, etc.

### Structure of a Node

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```

### Methods && Analysis

- **append(data)** - Adds a new node to the end of the list. It has a time complexity of O(n) and space complexity of O(1).
- **prepend(data)** - Adds a new node to the beginning of the list. It has a time complexity of O(1) and space complexity of O(1).
- **Find(data)** - Finds a node in the list. It has a time complexity of O(n) and space complexity of O(1).
- **insertAfter(data, toNodeData)** - Inserts a new node after a node containing the toNodeData. It has a time complexity of O(n) and space complexity of O(1).
- **delete(data)** - Deletes a node from the list. It has a time complexity of O(n) and space complexity of O(1).
- **print()** - Prints the data of each node in the list. It has a time complexity of O(n) and space complexity of O(1).

### Usage

```js
const LinkedList = require('./LinkedList');

const list = new LinkedList();

// Appending data of any type to the list
list.append(1);
list.append("New York");
list.append([1, 2, 3]);
list.append({ name: "John Doe" });
list.append(true);

// Prepending data of any type to the list
list.prepend("First Node");
list.prepend(0);

// Inserting data of any type after a node containing the data
list.insertAfter("New York", "New York City");
list.insertAfter(0, -1);

// Deleting a node from the list
list.delete("New York City");
list.delete(0);


// Printing the data of each node in the list
list.print();
```

### Output

```bash
First Node
-1
1
New York
[ 1, 2, 3 ]
{ name: 'John Doe' }
true
```

### Testing

```bash
node index.js
```

## Why Linked Lists?

- **Dynamic Size** - Linked lists can grow and shrink in size during runtime.
- **Efficient Insertion and Deletion** - Insertion and deletion of nodes in a linked list is very efficient. It has a time complexity of O(1) and space complexity of O(1).
- **No Contiguous Memory Allocation** - Linked lists do not require contiguous memory allocation. This means that the memory allocated for a node can be anywhere in the memory. This is unlike arrays where the memory allocated for the array must be contiguous.
- **No Memory Overhead** - Linked lists do not have any memory overhead. This means that the memory allocated for a node is only the size of the node. This is unlike arrays where the memory allocated for the array must be the size of the array plus the size of each element in the array.


## LinkedList vs Array

| LinkedList | Array |
|------------|-------|
| Dynamic Size | Fixed Size |
| Efficient Insertion and Deletion | Inefficient Insertion and Deletion |
| No Contiguous Memory Allocation | Contiguous Memory Allocation |
| No Memory Overhead | Memory Overhead |

## Resources

- [Linked List - GeeksforGeeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [Linked List - Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [Linked List - YouTube](https://www.youtube.com/watch?v=njTh_OwMljA)






