class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    return ++this.length;
  }

  pop() {
    if (this.length === 0) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    let removed = this.first;
    this.first = removed.next;
    this.length--;
    return removed.val;
  }
}

const stack = new Stack();
stack.push("primeiro");
stack.push("segundo");
stack.push("terceiro");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
