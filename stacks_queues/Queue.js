class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }

  dequeue() {
    if (this.length === 0) return null;
    let removed = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = removed.next;
    this.length--;
    return removed.val;
  }
}

const queue = new Queue();
queue.enqueue("primeiro na fila");
queue.enqueue("segundo na fila");
queue.enqueue("terceiro na fila");
queue.enqueue("quarto na fila");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
