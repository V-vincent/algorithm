// JZ21	栈的压入、弹出序列	栈	中等
// 题目描述
// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
// 示例1
// 输入
// [1,2,3,4,5],[4,3,5,1,2]
// 返回值
// false
function IsPopOrder(pushV, popV) {
  if (pushV.length !== popV.length) return false;
  let stack = [];
  let index = 0, cur = 0;
  while (index < pushV.length) {
    stack.push(pushV[index]);
    index++;
    while (stack.length && stack[stack.length - 1] === popV[cur]) {
      stack.pop();
      cur++;
    }
  }
  return !stack.length;
}

// JZ22	从上往下打印二叉树	队列树	困难
// 题目描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
// 示例1
// 输入
// {5,4,#,3,#,2,#,1}
// 返回值
// [5,4,3,2,1]

// 思路分析
// 广度优先遍历
function PrintFromTopToBottom(root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  let index = 0;
  while (index < queue.length) {
    let temp = queue[index++];
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
    res.push(temp.val);
  }
  return res;
}

// JZ23	二叉搜索树的后序遍历序列	栈树	较难
// 题目描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回true,否则返回false。假设输入的数组的任意两个数字都互不相同。（ps：我们约定空树不是二叉搜素树）
// 示例1
// 输入
// [4,8,6,12,16,14,10]
// 返回值
// true
// 思路
// 1.最后一个元素是根元素
// 2.比根元素小的是左子树，比根元素大的是右子树

// slice(start, end); 截取从第start个到第end个元素，不会改变原数组
// splice(index,howmany,item1,.....,itemX) 方法向/从数组中添加/删除项目，然后返回被删除的项目，会改变原始数组
// index 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
let sequence = [4, 8, 6, 12, 16, 14, 10]
function VerifySquenceOfBST(sequence) {
  let len = sequence.length;
  if (len === 1) return true;
  if (len === 0) return false;
  let root = sequence[len - 1];
  // 分左右
  let leftIndex = 0;
  for (let i = 0; i < len - 1; i++) {
    if (sequence[i] < root) {
      leftIndex++;
    } else {
      break;
    }
  }
  // 右边树有小于根元素的直接返回false
  for (let i = leftIndex + 1; i < len - 1; i++) {
    if (sequence[i] < root) {
      return false;
    }
  }
  // 全左或全右
  if (leftIndex === 0 || leftIndex === len - 1) {
    return VerifySquenceOfBST(sequence.slice(0, len - 1))
  } else {
    return VerifySquenceOfBST(sequence.slice(0, leftIndex)) && VerifySquenceOfBST(sequence.slice(leftIndex, len - 1))
  }
}

// JZ24	二叉树中和为某一值的路径	树	较难
// 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// 示例1
// 输入
// {10,5,12,4,7},22
// 返回值
// [[10,5,7],[10,12]]
// 示例2
// 输入
// {10,5,12,4,7},15
// 返回值
// []
// 思路：递归遍历，到没有子节点，之后求和对比
function FindPath(root, expectNumber) {
  let res = [];
  if (!root) return res;
  function dfs(root, path) {
    path.push(root.val);
    if (!root.left && !root.right) {
      let sum = path.reduce((pre, cur) => {
        return pre + cur;
      }, 0);
      if (sum === expectNumber) {
        res.push(path)
      }
    }
    if (root.left) dfs(root.left, [...path]);
    if (root.right) dfs(root.right, [...path])
  }
  dfs(root, [])
  return res;
}
