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
b.insert(52);
b.insert(9);
b.insert(19);
prettyPrint(b.root);
b.remove(9);
prettyPrint(b.root);
b.insert(9);
b.insert(10);
b.insert(21);
prettyPrint(b.root);
b.remove(11);
prettyPrint(b.root);
b.remove(23);
prettyPrint(b.root);
b.remove(12);
prettyPrint(b.root);

b.remove(8);
prettyPrint(b.root);
b.insert(7.6);
b.insert(56);
b.insert(55);
prettyPrint(b.root);
b.remove(54);
prettyPrint(b.root);
console.log(b.find(4));
b.levelOrder(console.log);
console.log("__________________________________");
b.preOrder(console.log);
console.log("__________________________________");
b.inOrder(console.log);
console.log("__________________________________");
b.postOrder(console.log);
console.log(b.levelOrder());
console.log(b.inOrder());
console.log(b.preOrder());
console.log(b.postOrder());
