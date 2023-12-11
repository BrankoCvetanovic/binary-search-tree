import Tree from "./tree";
import { prettyPrint } from "./tools";

const array = [
  5, 73, 98, 18, 17, 95, 97, 63, 51, 22, 55, 38, 97, 52, 93, 30, 34, 30, 36, 21,
  57, 51, 41, 78, 47, 84, 82, 71, 95, 27,
];
const tree = Tree(array);

prettyPrint(tree.root);
console.log(tree.isBalanced());
tree.levelOrder(console.log);
console.log("___________________________");
tree.inOrder(console.log);
console.log("___________________________");
tree.postOrder(console.log);
console.log("___________________________");
tree.preOrder(console.log);
tree.insert(101);
tree.insert(123);
tree.insert(232);
prettyPrint(tree.root);
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
prettyPrint(tree.root);
