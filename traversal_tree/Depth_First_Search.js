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
  DFSpreOrder() {
    let current = this.root;
    let data = [];

    (function helper(node) {
      data.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    })(current);
    return data;
  }
  DFSpostOrder() {
    let current = this.root;
    let data = [];

    (function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      data.push(node.value);
    })(current);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
const preOrder = tree.DFSpreOrder();
const postOrder = tree.DFSpostOrder();
console.log(tree);
