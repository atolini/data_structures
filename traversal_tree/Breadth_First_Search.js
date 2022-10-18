class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current) {
      if (value === current.value) {
        return current;
      } else {
        if (value > current.value) current = current.right;
        else if (value < current.value) current = current.left;
      }
    }
    return undefined;
  }
  BFS() {
    let queue = []
    let data = []
    queue.push(this.root)

    while(queue.length) {
        node = queue.shift()
        data.push(node.value)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return data
    }
  }
}
