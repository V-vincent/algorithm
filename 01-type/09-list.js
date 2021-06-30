// 单个链表节点
class ListNode {
  constructor(value, next) {
    this.value = value || 0;
    this.next = next || null;
  }
}
// 所有链表的节点
class LinkList {
  constructor(arr) {
    this.list = LinkList.arrToList(arr)
  }

  // 数组转链表的一个方法
  static arrToList(arr) {
    if (!Array.isArray(arr) && !arr.length) {
      throw 'the param is not a array!'
    }
    let head = new ListNode(arr[0])
    let current = head
    arr.slice(1).forEach((item) => {
      let node = new ListNode(item)
      current.next = node
      current = node
    })
    return head
  }

  // 遍历链表
  forEach() {
    let current = this.list
    let arr = []
    // 一直遍历节点
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }

  // 插入节点
  // k 表示位置 node 节点
  insert(node, k = 0) {
    let current = this.list;
    let i = 0;
    // 1 2 4 插入 3
    while (current) {
      if (i === k) {
        // 把后面的指向拿到缓存起来
        let behind = current.next;
        // 当前节点指向插入节点
        current.next = node;
        // 插入节点再指向后面的节点
        node.next = behind;
      }
      current = current.next;
      i++
    }
    return this.list;
  }

  // 反转链表
  reverse() {
    let cur = this.list;
    let pre = null;
    // 遍历当前链表
    while (cur !== null) {
      // 将当前指针指向前一个  并且 得记住当前后面的节点
      let temp = cur.next;
      // 将当前节点指向上一个节点
      cur.next = pre;
      // 改变上一个节点
      pre = cur;
      cur = temp;
    }
    return pre;
  }

  // 判断是不是回文链表
  // 判断当前链表是不是回文链表
  isParionList() {
    let current = this.list
    let res = []
    while (current) {
      res.push(current.val)
      current = current.next
    }
    // 利用数组reverse 方法
    return res.reverse().toString() == res.toString()
  }

  // 求两个链表相交的地方
  static getIntersectionNode(headA, headB) {
    // 用一个集合去存储每个节点
    const set = new Set()
    let current = headA
    while (current) {
      set.add(current)
      current = current.next
    }
    current = headB
    while (current) {
      // 如果存在节点相同 就返回就好
      if (set.has(current)) {
        return current
      }
      current = current.next
    }
    return current
  }

}