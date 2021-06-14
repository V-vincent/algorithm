// JZ56 删除链表中重复的结点 链表 较难
// 描述
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
// 示例1
// 输入：
// {1,2,3,3,4,4,5}
// 返回值：
// {1,2,5}
function ListNode(x) {
  this.val = x;
  this.next = null;
}
function deleteDuplication(pHead) {
  if (pHead == null || pHead.next == null) return pHead;
  let obj = {};
  let pre = pHead;
  let res = new ListNode(-1);
  // 先obj存储每个节点出现的次数
  while (pre) {
    if (obj[pre.val]) {
      obj[pre.val]++;
    } else {
      obj[pre.val] = 1;
    }
    pre = pre.next;
  }
  let cur = pHead;
  let temp = res;
  // 节点数为1的才存在新的链表
  while (cur) {
    if (obj[cur.val] == 1) {
      temp.next = cur;
      temp = temp.next;
    } else {
      temp.next = null;
    }
    cur = cur.next;
  }
  return res.next;
}

// JZ58 对称的二叉树 树 困难
// 描述
// 请实现一个函数，用来判断一棵二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
// 示例1
// 输入：
// {8,6,6,5,7,7,5}
// 返回值：
// true
// 示例2
// 输入：
// {8,6,9,5,7,7,5}
// 返回值：
// false
function isSymmetrical(pRoot) {
  if (!pRoot) return true;
  function compare(left, right) {
    if (!left && !right) return true;
    if ((!left && right) || (left && !right)) return false;
    if (left.val != right.val) return false;
    return compare(left.left, right.right) && compare(left.right, right.left)
  }
  return compare(pRoot.left, pRoot.right);
}

// JZ59 按之字形顺序打印二叉树 树 栈 较难
// 描述
// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
// 示例1
// 输入：
// {8,6,10,5,7,9,11}
// 返回值：
// [[8],[10,6],[5,7,9,11]]
// 广度优先遍历，利用队列
function Print(pRoot) {
  if (!pRoot) return [];
  let res = [];
  let queue = [pRoot];
  let isRight = true;
  while (queue.length) {
    let temp = [];
    let len = queue.length;
    while (len) {
      // 取出最前面的元素加入到 temp 中
      let node = queue.shift();
      temp.push(node.val);
      // 把下一行加入队列中
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--; // 仅加入当前行，把当前行的元素都加入（len = 0）后要换方向
    }
    if (isRight) {
      res.push(temp)
    } else {
      res.push(temp.reverse())
    }
    // 遍历完每一行之后换方向
    isRight = !isRight;
  }
  return res;
}

