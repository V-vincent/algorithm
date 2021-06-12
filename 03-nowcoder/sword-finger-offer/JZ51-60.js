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