// 二叉树

// 先序遍历：中左右
var preOrderTree = (root) => {
  let res = [];
  const dfs = (root) => {
    if (root) {
      res.push(root.val);
      dfs(root.left);
      dfs(root.right);
    }
  }
  dfs(root);
  return res;
}
var preOrderTree = (root) => {
  let res = [];
  let stack = [root];
  while (stack.length) {
    let item = stack.pop();
    res.push(item);
    if (item.left) stack.push(item.left);
    if (item.right) stack.push(item.right);
  }
  return res;
}

// 94.二叉树的中序遍历
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 中序遍历：左中右
// 递归
var inorderTraversal = function (root) {
  let res = [];
  const dfs = (root) => {
    if (!root) return null;
    dfs(root.left);
    res.push(root.val);
    dfs(root.right);
  }
  dfs(root)
  return res;
};
// 栈
var inorderTraversal = function (root) {
  let res = [];
  let stack = [];
  while (root) {
    stack.push(root)
    root = root.left;
  }
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    node = node.right;
    while (node) {
      stack.push(node);
      node = node.left
    }
  }
  return res;
};

// 后序遍历：左右中
var poseterOrderTree = (root) => {
  let res = [];
  const dfs = (root) => {
    if (root) {
      dfs(root.left);
      dfs(root.right);
      res.push(root.val);
    }
  }
  dfs(root);
  return res;
}

// 判断是否是相同的二叉树
var isSameTree = (root1, root2) => {
  const dfs = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    return root1.val == root2.val && dfs(root1.left, root2.left) && dfs(root1.right, root2.right);
  }
  return dfs(root1, root2);
}

// 101. 对称二叉树
// https://leetcode-cn.com/problems/symmetric-tree/
// 递归
var isSymmetric = function (root) {
  const dfs = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    return root1.val == root2.val && dfs(root1.left, root2.right) && dfs(root1.right, root2.left);
  }
  return dfs(root.left, root.right)
};
// 栈
var isSymmetric = function (root) {
  if (!root) return true;
  let leftStack = [], rightStack = [];
  let curLeft = root.left;
  let curRight = root.right;
  while (curLeft || curRight || leftStack.length || rightStack.length) {
    while (curLeft) {
      leftStack.push(curLeft);
      curLeft = curLeft.left;
    }
    while (curRight) {
      rightStack.push(curRight);
      curRight = curRight.right;
    }
    if (leftStack.length !== rightStack.length) return false;
    let left = leftStack.pop();
    let right = rightStack.pop();
    if (left.val !== right.val) return false;
    curLeft = left.right;
    curRight = right.left;
  }
  return true;
};
// 队列
var isSymmetric = function (root) {
  if (!root) return true;
  let queue = [[root.left, root.right]];
  while (queue.length) {
    let temLen = queue.length;
    for (let i = 0; i < temLen; i++) {
      let [left, right] = queue.shift();
      if ((!left && right) || (left && !right)) return false;
      if (left && right) {
        if (left.val !== right.val) return false;
        queue.push([left.left, right.right]);
        queue.push([left.right, right.left]);
      }
    }
  }
  return true;
};

// 104. 二叉树的最大深度
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
var maxDepth = function (root) {
  const dfs = (root) => root ? Math.max(dfs(root.left), dfs(root.right)) + 1 : 0;
  return dfs(root);
};

// 124. 二叉树中的最大路径和
// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
var maxPathSum = function (root) {
  let max = -Infinity;
  const dfs = (root) => {
    if (!root) return 0;
    let left = Math.max(dfs(root.left), 0);
    let right = Math.max(dfs(root.right), 0);
    max = Math.max(left + right + root.val, max);
    return Math.max(left, right) + root.val;
  }
  dfs(root)
  return max;
};

// 226.翻转二叉树
// https://leetcode-cn.com/problems/invert-binary-tree/
var invertTree = function (root) {
  const dfs = (root) => {
    if (!root) return null;
    [root.left, root.right] = [dfs(root.right), dfs(root.left)]
    return root;
  }
  return dfs(root);
};

// 538.把二叉搜索树转换为累加树
// https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
var convertBST = function (root) {
  let sum = 0;
  let dfs = (root) => {
    if (!root) return null;
    if (root.right) dfs(root.right);
    root.val += sum;
    sum = root.val;
    if (root.left) dfs(root.left);
  }
  dfs(root)
  return root;
};

// 543.二叉树的直径
// https://leetcode-cn.com/problems/diameter-of-binary-tree/
var diameterOfBinaryTree = function (root) {
  let max = 0;
  const dfs = (root) => {
    if (!root) return null;
    let left = dfs(root.left);
    let right = dfs(root.right);
    max = Math.max(left + right + 1, max);
    return Math.max(left, right) + 1;
  }
  dfs(root)
  return max - 1;
};

// 617.合并二叉树
// https://leetcode-cn.com/problems/merge-two-binary-trees/
var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) {
    return root1 || root2
  }
  root1.val = root1.val + root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right)
  return root1;
};