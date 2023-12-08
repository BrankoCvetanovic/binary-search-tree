import Node from "./node";
import mergeSort from "./merge-sort";

function buildTree(array, start, end) {
  if (start > end) {
    return null;
  }
  const mid = Math.ceil((start + end) / 2);
  const node = Node(array[mid]);

  node.left = buildTree(array, start, mid - 1);
  node.right = buildTree(array, mid + 1, end);
  return node;
}

export default function Tree(array) {
  const sortedArr = mergeSort(array);
  const root = buildTree(sortedArr, 0, array.length - 1);

  let curr = root;
  function insert(value) {
    if (curr.data === value) {
      curr = root;
      return;
    }
    if (value < curr.data) {
      if (curr.left == null) {
        curr.left = Node(value);
        curr = root;
        return;
      }
      curr = curr.left;
      insert(value);
    } else {
      if (curr.right == null) {
        curr.right = Node(value);
        curr = root;
        return;
      }
      curr = curr.right;
      insert(value);
    }
  }
  let prev = root;
  function remove(value) {
    if (curr.data === value) {
      if (curr.left === null && curr.right === null) {
        if (curr.data > prev.data) {
          prev.right = null;
        } else {
          prev.left = null;
        }
      } else if (curr.left && curr.right) {
        let closestValue = curr.right;
        let prevClosestValue = curr;
        while (closestValue.left !== null) {
          prevClosestValue = closestValue;
          closestValue = closestValue.left;
        }
        if (closestValue.right) {
          prevClosestValue.left = closestValue.right;
        } else {
          prevClosestValue.left = null;
        }
        if (curr === root) {
          curr.data = closestValue.data;
          return;
        }
        if (curr.data > prev.data) {
          prev.right.data = closestValue.data;
        } else {
          prev.left.data = closestValue.data;
        }
      } else if (curr.right) {
        prev.left = curr.right;
      } else {
        prev.left = curr.left;
      }
      curr = root;
      return;
    }
    if (value < curr.data) {
      prev = curr;
      curr = curr.left;
      remove(value);
    } else {
      prev = curr;
      curr = curr.right;
      remove(value);
    }
  }

  function find(value) {
    if (curr === null) {
      return "This data doesn`t exist in BT";
    }
    if (curr.data === value) {
      const answer = curr;
      return answer;
    }
    if (value < curr.data) {
      curr = curr.left;
      return find(value);
    }
    curr = curr.right;
    return find(value);
  }
  function levelOrder(callback = null) {
    if (!this.root) return;

    const result = [];

    if (!callback) {
      callback = (data) => {
        result.push(data);
      };
    }

    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    return result;
  }

  function preOrder(callback = null, rootNode = this.root) {
    if (!this.root) return;

    const result = [];

    if (!callback) {
      callback = (data) => {
        result.push(data);
      };
    }

    const stack = [];
    stack.push(rootNode);

    while (stack.length > 0) {
      const node = stack.pop();
      callback(node.data);
      if (node.right !== null) {
        stack.push(node.right);
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
    }
    return result;
  }

  function inOrder(callback = null, node = this.root) {
    const result = [];

    if (node === null) {
      return result;
    }

    if (!callback) {
      callback = (data) => {
        result.push(data);
      };
    }

    inOrder(callback, node.left);
    callback(node.data);
    inOrder(callback, node.right);

    return result;
  }

  function postOrder(callback = null, node = this.root) {
    const result = [];
    if (node === null) {
      return;
    }

    if (!callback) {
      callback = (data) => {
        result.push(data);
      };
    }

    postOrder(callback, node.left);
    postOrder(callback, node.right);
    callback(node.data);

    return result;
  }

  return {
    root,
    insert,
    remove,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
  };
}
