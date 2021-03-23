// JZ1	二维数组中的查找	数组	较难
// 题目描述
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// 示例1
// 输入
// 7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
// 返回值
// true
function Find(target, array) {
  let arr = array.flat(Infinity);
  return arr.indexOf(target) !== -1;
}


// JZ2	替换空格	字符串	较难
// 题目描述
// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
// 示例1
// 输入
// "We Are Happy"
// 返回值
// "We%20Are%20Happy"
function replaceSpace(s) {
  // return s.replace(new RegExp(" ", "gm"), '%20');
  // return s.split(' ').join('%20');
  return s.replace(/ /g, '%20')
}

// JZ3	从尾到头打印链表	链表	较难
// 题目描述
// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
// 示例1
// 输入
// {67,0,24,58}
// 返回值
// [58,24,0,67]
function printListFromTailToHead(head) {
  let arr = [];
  while (head) {
    arr.unshift(head.val);
    head = head.next;
  }
  return arr;
  // let arr = [];
  // while (head) {
  //   arr.push(head.val);
  //   head = head.next;
  // }
  // return arr.reverse()
}

// JZ4	重建二叉树	树dfs数组	中等
// 题目描述
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
// 示例1
// 输入
// [1,2,3,4,5,6,7],[3,2,4,1,6,5,7]
// 返回值
// {1,2,5,3,4,6,7}

// 分析：
// 输入：前序遍历、中序遍历（不含重复数字）-》对前序和中序遍历的理解
// 重建二叉树：-》递归代码的考察

// 二叉树的前序遍历：根左右
// 二叉树的中序遍历：左根右
// 二叉树的的后序遍历：左右根
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  if (!pre.length || !vin.length) return null;
  let val = pre[0]
  let node = new TreeNode(val);
  // 前序的第一个是根节点，则中序遍历以根节点分开
  let index = vin.indexOf(val);
  node.left = reConstructBinaryTree(pre.slice(1, index + 1), vin.slice(0, index));
  node.right = reConstructBinaryTree(pre.slice(index + 1), vin.slice(index + 1));
  return node;
}

// JZ5	用两个栈实现队列	栈	简单
// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
// 栈先进后出
// 队列先进先出
let inStack = [];
let outStack = [];
function push(node) {
  inStack.push(node);
}
function pop() {
  if (outStack.length) {
    return outStack.pop();
  }
  while (inStack.length) {
    outStack.push(inStack.pop())
  }
  return outStack.pop();
}

// JZ6	旋转数组的最小数字	二分	简单
// 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
// 示例1
// 输入
// [3,4,5,1,2]
// 返回值
// 1

// 局部有序：二分法变异
let rotateArray = [3, 4, 5, 6, 7, 1, 2];
function minNumberInRotateArray(rotateArray) {
  if (!rotateArray.length) return 0;
  let left = 0;
  let right = rotateArray.length - 1;
  let mid;
  while (left < right) {
    mid = left + parseInt((right - left) / 2);
    // 找最小值：最后left的值为最小值
    if (rotateArray[right] < rotateArray[mid]) {
      left = mid + 1;
    } else if (rotateArray[right] === rotateArray[mid]) {
      right--;
    } else {
      right = mid;
    }
  }
  return rotateArray[left];
}
console.log(minNumberInRotateArray(rotateArray));