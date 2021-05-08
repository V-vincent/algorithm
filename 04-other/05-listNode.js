// 写一个单向链数据结构的 js 实现并标注复杂度
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  head = null
  tail = null
  size = 0

  // 时间复杂度O(n)
  get = index => {
    if (index < 0) return -1
    let node = this.head
    for (let i = 0; i < index; i++) {
      if (!node) return -1
      node = node.next
    }
    return node ? node.val : -1
  }

  // 时间复杂度O(1)
  addAtHead = val => {
    const node = new ListNode(val)
    if (!this.head) {
      this.head = this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  // 时间复杂度O(1)
  addAtTail = val => {
    const node = new ListNode(val)
    if (!this.tail) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  // 时间复杂度O(n)
  addAtIndex = (index, val) => {
    const node = new ListNode(val)
    if (index > this.size) return
    if (index === this.size) return this.addAtTail(val)
    if (index <= 0) return this.addAtHead(val)
    let head = this.head
    for (let i = 1; i < index; i++) {
      if (!head) return
      head = head.next
    }
    node.next = head.next
    head.next = node
    this.size++
  }

  // 时间复杂度O(n)
  deleteAtIndex = index => {
    let head = this.head
    if (!head || index >= this.size || index < 0) return
    if (index === 0) {
      if (this.size === 1) {
        this.head = this.tail = null
      } else {
        this.head = this.head.next
      }
      this.size--
      return
    }
    for (let i = 1; i < index; i++) {
      if (!head) return
      head = head.next
    }
    if (!head) return
    if (head.next) {
      if (head.next === this.tail) {
        this.tail = head
        head.next = null
      } else {
        head.next = head.next.next
      }
    } else {
      this.head = this.tail = null
    }
    this.size--
  }
}
