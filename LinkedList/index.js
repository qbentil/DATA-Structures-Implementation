class LinkedList {
  append(value) {
    const newNode = { value, next: null };
    // if the list is empty, set the head and tail to the new node
    if (!this.head) {
      this.head = newNode;
    }

    // if tail exists, set tail.next to newNode
    if (this.tail) {
      this.tail.next = newNode;
    }

    // Update the tail to the new node
    this.tail = newNode;
  }
  // time complexity: O(n)
  // space complexity: O(n)

  prepend(value) {
    const newNode = { value, next: null };
    // if the list is empty, set the head and tail to the new node
    if (this.head) {
      newNode.next = this.head;
    }

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  remove(value) {
    // if the list is empty, return
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  find(value) {
    const elements = this.toArray();
    return elements.find((element) => element.value === value);
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    // if the node doesn't exist, return null
    if (existingNode) {
      const newNode = { value, next: existingNode.next };
      existingNode.next = newNode;
    }

    return null;
  }

  print() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const linkedList = new LinkedList();
linkedList.append("Bentil");
linkedList.append(false);
// prepend
linkedList.prepend("John");

// remove
linkedList.remove("Bentil");

linkedList.insertAfter("Minash", false);

console.log(linkedList.print());
