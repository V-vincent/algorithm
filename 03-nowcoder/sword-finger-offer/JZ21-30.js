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