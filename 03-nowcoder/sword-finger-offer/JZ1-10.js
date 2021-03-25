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

// JZ7	斐波那契数列	数组	入门
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n≤39

// 示例1
// 输入
// 4
// 返回值
// 3
// 斐波那契数列：第n项等于前两项相加之和
function Fibonacci(n) {
  if (n <= 1) return n;
  let pre1 = 1;
  let pre2 = 0;
  let res;
  for (let i = 2; i <= n; i++) {
    res = pre1 + pre2;
    pre2 = pre1;
    pre1 = res;
  }
  return res;
}

// JZ8	跳台阶	递归	中等
// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
function jumpFloor1(number) {
  if (number <= 2) return number;
  let pre1 = 2;
  let pre2 = 1;
  let temp;
  for (let i = 3; i <= number; i++) {
    temp = pre1 + pre2;
    pre2 = pre1;
    pre1 = temp;
  }
  return temp;
}
function jumpFloor(number) {
  if (number <= 2) return number;
  let dp = [0, 1, 2];
  for (let i = 3; i <= number; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[number];
}

// JZ9	变态跳台阶	贪心	简单
// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
// 示例1
// 输入
// 3
// 返回值
// 4
function jumpFloorII(number) {
  if (number <= 2) return number;
  let dp = [0, 1, 2];
  for (let i = 3; i <= number; i++) {
    dp[i] = dp.reduce((pre, cur) => pre + cur, 0) + 1;
  }
  return dp[number];
  // if (number <= 2) return number;
  // return 2 ** (number - 1);
}

// JZ10	矩形覆盖	递归	中等
// 题目描述
// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

// 比如n=3时，2*3的矩形块有3种覆盖方法
// 示例1
// 输入
// 4
// 返回值
// 5

// jz8跳台阶的换一种问法
function rectCover(number) {
  if (number <= 2) return number;
  let pre1 = 2;
  let pre2 = 1;
  let temp;
  for (let i = 3; i <= number; i++) {
    temp = pre1 + pre2;
    pre2 = pre1;
    pre1 = temp;
  }
  return temp;
}