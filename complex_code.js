/* complex_code.js */

// This code is an implementation of a binary search tree with additional functionality

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

  // Insert a new node into the tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper function to recursively insert a node
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Perform an in-order traversal of the tree
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Helper function to recursively perform in-order traversal
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }

  // Perform a pre-order traversal of the tree
  preOrderTraversal(callback) {
    this.preOrderTraversalNode(this.root, callback);
  }

  // Helper function to recursively perform pre-order traversal
  preOrderTraversalNode(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraversalNode(node.left, callback);
      this.preOrderTraversalNode(node.right, callback);
    }
  }

  // Perform a post-order traversal of the tree
  postOrderTraversal(callback) {
    this.postOrderTraversalNode(this.root, callback);
  }

  // Helper function to recursively perform post-order traversal
  postOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, callback);
      this.postOrderTraversalNode(node.right, callback);
      callback(node.value);
    }
  }

  // Search for a specific value in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper function to recursively search for a value
  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  // Get the minimum value in the tree
  getMinValue() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  // Get the maximum value in the tree
  getMaxValue() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.value;
  }
}

// Usage example:

const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("In-order traversal:");
bst.inOrderTraversal((value) => console.log(value));

console.log("Pre-order traversal:");
bst.preOrderTraversal((value) => console.log(value));

console.log("Post-order traversal:");
bst.postOrderTraversal((value) => console.log(value));

console.log("Search for 40:", bst.search(40));
console.log("Search for 90:", bst.search(90));

console.log("Minimum value:", bst.getMinValue());
console.log("Maximum value:", bst.getMaxValue());