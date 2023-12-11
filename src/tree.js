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
  const root = buildTree(sortedArr, 0, sortedArr.length - 1);

  function insert(value, node = this.root) {
    if (node.data === value) {
      node = root;
      return;
    }
    if (value < node.data) {
      if (node.left == null) {
        node.left = Node(value);
        return;
      }
      insert(value, node.left);
    } else {
      if (node.right == null) {
        node.right = Node(value);
        return;
      }
      insert(value, node.right);
    }
  }
  let prev = root;
  function remove(value, node = this.root) {
    if (node.data === value) {
      if (node.left === null && node.right === null) {
        if (node.data > prev.data) {
          prev.right = null;
        } else {
          prev.left = null;
        }
      } else if (node.left && node.right) {
        let closestValue = node.right;
        let prevClosestValue = node;
        while (closestValue.left !== null) {
          prevClosestValue = closestValue;
          closestValue = closestValue.left;
        }
        if (closestValue.right) {
          prevClosestValue.left = closestValue.right;
        } else {
          prevClosestValue.left = null;
        }
        if (node === root) {
          node.data = closestValue.data;
          return;
        }
        if (node.data > prev.data) {
          prev.right.data = closestValue.data;
        } else {
          prev.left.data = closestValue.data;
        }
      } else if (node.right) {
        prev.left = node.right;
      } else {
        prev.left = node.left;
      }
      return;
    }
    if (value < node.data) {
      prev = node;
      remove(value, node.left);
    } else {
      prev = node;
      remove(value, node.right);
    }
  }

  function find(value, node = this.root) {
    if (node === null) {
      return "This data doesn`t exist in BT";
    }
    if (node.data === value) {
      const answer = node;
      return answer;
    }
    if (value < node.data) {
      return find(value, node.left);
    }
    return find(value, node.right);
  }
  function levelOrder(callback = null, startNode = this.root) {
    if (!this.root) return;

    const result = [];

    if (!callback) {
      callback = (data) => {
        result.push(data);
      };
    }

    const queue = [];
    queue.push(startNode);

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

  function height(node) {
    if (node == null) return 0;
    {
      const lHight = height(node.left);
      const rHight = height(node.right);
      if (lHight > rHight) {
        return lHight + 1;
      }
      return rHight + 1;
    }
  }

  function depth(node) {
    let dep = 0;

    const q = [];

    q.push(this.root);
    q.push(null);
    let temp = this.root;
    while (temp !== node) {
      temp = q.shift();

      if (temp == null) dep += 1;

      if (temp != null) {
        if (temp.left) q.push(temp.left);

        if (temp.right) q.push(temp.right);
      } else if (q.length > 0) q.push(null);
    }
    return dep;
  }

  function isBalanced(node = this.root) {
    if (node == null) {
      return true;
    }
    const left = height(node.left);
    const right = height(node.right);
    if (Math.abs(left - right) > 1) {
      return false;
    }
    return isBalanced(node.left) && isBalanced(node.right);
  }

  function rebalance() {
    const newArray = this.inOrder();
    this.root = buildTree(newArray, 0, newArray.length - 1);
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
    height,
    depth,
    isBalanced,
    rebalance,
  };
}
