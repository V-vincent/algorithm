// JZ11	二进制中1的个数	数学	中等
// 题目描述
// 输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。
// 示例1
// 输入
// 10
// 返回值
// 2

// 按位逻辑操作符遵循下面的规则：
// （1）操作数被转换为32为二进制数，超过32位的数字会被丢弃（会导致精度丢失）:
// 转换前: 111001101111 10100000 00000000 01100000 00000001
// 转换后:              10100000 00000000 01100000 00000001
// （2）第一个操作数与第二个操作数的每个二进制位一一对应
// （3）返回值是一个新的以10进制形式表示数字
// 按位与&: a & b，a和b均是二进制取值，只有a和b都为1时，结果才为1，否则为0
// 9       00000000 00000000 00000000 00001001
// 14      00000000 00000000 00000000 00001110
// 9 & 14  00000000 00000000 00000000 00001000  8

// 按位或|: a | b，a和b均是二进制取值，只有a和b有一个为1时，结果就为1，否则为0
// 9       00000000 00000000 00000000 00001001
// 14      00000000 00000000 00000000 00001110
// 9 | 14  00000000 00000000 00000000 00001111  15

// 按位异或^: a ^ b，a和b均是二进制取值，a和b取值不同时，结果为1，否则为0
// 9       00000000 00000000 00000000 00001001
// 14      00000000 00000000 00000000 00001110
// 9 ^ 14  00000000 00000000 00000000 00000111  7

// 按位非~: ~a，对a求反码
// 9       00000000 00000000 00000000 00001001
// ~9      11111111 11111111 11111111 11110110  -10

// 左移<<: 左移a << b，将a向左移动b位，移出的数字被丢弃，右侧用0补充，例如，9 << 2：
// 9       00000000 00000000 00000000 00001001
// 9 << 2  00000000 00000000 00000000 00100100  36

// 有符号右移>>: a >> b会将a向右移动b位，移出的数字被丢弃，拷贝最左侧的位以填充左侧，符号不会被改变
// 9       00000000 00000000 00000000 00001001
// 9 >> 2  00000000 00000000 00000000 00000010  2

// -9      11111111 11111111 11111111 11110111
// -9 >> 2 11111111 11111111 11111111 11111101  -3

// 无符号右移>>>: a >>> b会将a向右移动b位，移出的数字被丢弃，左侧用0填充，符号可能被改变
// 9        00000000 00000000 00000000 00001001
// 9 >>> 2  00000000 00000000 00000000 00000010  2

// -9       11111111 11111111 11111111 11110111
// -9 >>> 2 00111111 11111111 11111111 11111101  1073741821
// -9 >>> 0 01111111 11111111 11111111 11110111  4294967205

function NumberOf1(n) {
  let sum = 0;
  while (n) {
    sum++;
    n = n & (n - 1);
  }
  return sum
}

// JZ12	数值的整数次方	数学	中等
// 题目描述
// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

// 保证base和exponent不同时为0
// 示例1
// 输入
// 2,3
// 返回值
// 8.00000
function Power(base, exponent) {
  // return base ** exponent;
  return Math.pow(base, exponent);
}

// JZ13	调整数组顺序使奇数位于偶数前面	数组	较难
// 题目描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
// 示例1
// 输入
// [1,2,3,4]
// 返回值
// [1,3,2,4]
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
function reOrderArray(array) {
  let even = [];
  let odd = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }
  return odd.concat(even);
}

// JZ14	链表中倒数第k个结点	链表	中等
// 题目描述
// 输入一个链表，输出该链表中倒数第k个结点。
// 如果该链表长度小于k，请返回空。
// 示例1
// 输入
// {1,2,3,4,5},1 
// 返回值
// {5}
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
// 数组的解决方式
function FindKthToTail(pHead, k) {
  let arr = [];
  while (pHead) {
    arr.push(pHead);
    pHead = pHead.next;
  }
  if (k > arr.length) {
    return null
  } else {
    return arr[arr.length - k]
  }
}
// 链表的方式
function FindKthToTail(pHead, k) {
  let first = pHead, res = pHead;
  let n = 0;
  while (k > 0) {
    if (!first) return null;
    else {
      k--;
      first = first.next;
    }
  }
  while (first) {
    res = res.next;
    first = first.next;
  }
  return res;
}

// JZ15	反转链表	链表	中等
// 题目描述
// 输入一个链表，反转链表后，输出新链表的表头。
// 示例1
// 输入
// {1,2,3}
// 返回值
// {3,2,1}
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  let prev = null;
  while (pHead) {
    let temp = pHead;
    pHead = pHead.next; // 循环跳出条件
    temp.next = prev; // 1的next是null，2的next是1，3的next是2
    prev = temp;
  }
  return prev
}

// JZ16	合并两个排序的链表	链表	简单
// 题目描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
// 示例1
// 输入
// {1,3,5},{2,4,6}
// 返回值
// {1,2,3,4,5,6}
function ListNode(x) {
  this.val = x;
  this.next = null;
}
function Merge(pHead1, pHead2) {
  let res = new ListNode(-1);
  let cur = res;
  while (pHead1 && pHead2) {
    if (pHead1.val > pHead2.val) {
      cur.next = pHead2;
      pHead2 = pHead2.next
    } else {
      cur.next = pHead1;
      pHead1 = pHead1.next
    }
    cur = cur.next;
  }
  let temp = pHead1 || pHead2;
  while (temp) {
    cur.next = temp;
    cur = cur.next;
    temp = temp.next;
  }
  return res.next;
}

// JZ17	树的子结构	树	较难
// 题目描述
// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
// 示例1
// 输入
// {8,8,#,9,#,2,#,5},{8,9,#,2}
// 返回值
// true
function HasSubtree(pRoot1, pRoot2) {
  if (!pRoot1 || !pRoot2) return false;
  if (!compareTree(pRoot1, pRoot2)) {
    return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
  }
  return true;

  function compareTree(root1, root2) {
    if (!root2) return true;
    if (!root1) return false;
    if (root1.val === root2.val) {
      return compareTree(root1.left, root2.left) && compareTree(root1.right, root2.right)
    }
    return false;
  }
}

// JZ18	二叉树的镜像	树	简单
// 操作给定的二叉树，将其变换为源二叉树的镜像。
// 比如：    源二叉树 
//             8
//            /  \
//           6   10
//          / \  / \
//         5  7 9 11
//         镜像二叉树
//             8
//            /  \
//           10   6
//          / \  / \
//         11 9 7  5
// 示例1
// 输入
// {8,6,10,5,7,9,11}
// 返回值
// {8,10,6,11,9,7,5}

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
* 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
* @param pRoot TreeNode类 
* @return TreeNode类
*/
function Mirror(pRoot) {
  if (!pRoot) return null;
  let res = new TreeNode(pRoot.val);
  res.left = Mirror(pRoot.right);
  res.right = Mirror(pRoot.left);
  return res;
}
function Mirror1(pRoot) {
  if (!pRoot) return null;
  let temp = pRoot.left;
  pRoot.left = pRoot.right;
  pRoot.right = temp;
  Mirror(pRoot.right);
  Mirror(pRoot.left);
  return pRoot;
}

// JZ19	顺时针打印矩阵	数组	较难
// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
// 示例1
// 输入
// [[1,2],[3,4]]
// 返回值
// [1,2,4,3]
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
arr = [[1, 2], [3, 4]];
arr = [[1, 2, 3, 4, 5]];
arr = [[1], [2], [3], [4], [5]];
arr = [[1, 2], [3, 4], [5, 6]];
function printMatrix(matrix) {
  if (!matrix.length) return matrix;
  let res = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  while (left <= right && top <= bottom) {
    // 左-右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    // 上-下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (left > right || top > bottom) break;
    // 右-左
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    // 下-上
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res
}