import Node from "./node";
import mergeSort from "./merge-sort";

function buildTree(array, start, end) {
  if (start > end) {
    return null;
  }
  const mid = parseInt((start + end) / 2);
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
    if (curr.data == value) {
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
        curr.left = Node(value);
        curr = root;
        return;
      }
      curr = curr.right;
      insert(value);
    }
  }

  function remove(value) {}

  return {
    root,
    insert,
  };
}
