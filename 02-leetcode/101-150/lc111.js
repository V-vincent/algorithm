// 111. 二叉树的最小深度
// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：2
// 示例 2：

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5
//  

// 提示：

// 树中节点数的范围在 [0, 105] 内
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
var minDepth = function (root) {
  // 如果是null，返回0
  if (root == null) {
    return 0;
  }
  console.log(root)
  // 有节点就是1兜底
  if (root.left && root.right) {
    // 左右子树都存在，左右子树递归结果的较小值
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  } else if (root.left) {
    // 左子树存在，右子树不存在
    return 1 + minDepth(root.left);
  } else if (root.right) {
    // 右子树存在，左子树不存在
    return 1 + minDepth(root.right);
  } else {
    // 左右子树都不存在，光是当前节点的高度1
    return 1;
  }
};
var root = [3, 9, 20, null, null, 15, 7];
console.log(minDepth(root));