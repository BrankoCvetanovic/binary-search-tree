import Tree from "./tree";

const a = [1, 2, 4, 3, 23, 12, 12341324, 54, 5, 6, 8, 7, 22, 11, 234];
const b = Tree(a);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
b.insert(19);
b.insert(53);
b.insert(9);
b.insert(19);
prettyPrint(b.root);
