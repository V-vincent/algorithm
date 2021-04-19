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

// JZ25	复杂链表的复制	链表	较难
// 题目描述
// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），
// 请对此链表进行深拷贝，并返回拷贝后的头结点。
// （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
function RandomListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}
function Clone(pHead) {
  if (!pHead || !pHead.next) return pHead;
  let cur = pHead;
  let map = new Map();
  // 复制每一个节点并存储
  while (cur) {
    let node = new RandomListNode(cur.label);
    map.set(cur, node);
    cur = cur.next;
  }
  cur = pHead;
  // 把节点连起来
  while (cur) {
    map.get(cur).next = map.get(cur.next);
    map.get(cur).random = map.get(cur.random);
    cur = cur.next
  }
  return map.get(pHead);
}

// JZ27	字符串的排列	字符串动态规划	较难
// 题目描述
// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
// 输入描述:
// 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
// 示例1
// 输入
// "ab"
// 返回值
// ["ab","ba"]
// 递归实现
function Permutation(str) {
  let set = new Set();
  let dfs = (pre, str) => {
    if (str.length === 0) {
      return set.add(pre + str);
    }
    for (let i = 0; i < str.length; i++) {
      dfs(pre + str[i], str.slice(0, i) + str.slice(i + 1))
    }
  }
  dfs('', str);
  return Array.from(set);
}

// JZ28	数组中出现次数超过一半的数字	数组哈希	简单
// 题目描述
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
// 示例1
// 输入
// [1,2,3,2,2,2,5,4,2]
// 返回值
// 2
function MoreThanHalfNum_Solution(numbers) {
  let len = numbers.length;
  if (!len) return 0;
  let obj = {};
  for (let i = 0; i < len; i++) {
    if (obj[numbers[i]]) {
      obj[numbers[i]]++;
    } else {
      obj[numbers[i]] = 1;
    }
    if (obj[numbers[i]] > (len / 2)) return numbers[i];
  }
  return 0;
}

// JZ29	最小的K个数	堆排序分治	中等
// 题目描述
// 给定一个数组，找出其中最小的K个数。例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。如果K>数组的长度，那么返回一个空的数组
// 示例1
// 输入
// [4,5,1,6,2,7,3,8],4 
// 返回值
// [1,2,3,4]
// 先排序再截取
function GetLeastNumbers_Solution(input, k) {
  if (input.length < k) return [];
  let res = input.sort((a, b) => a - b).splice(0, k)
  return res;
}

// JZ30	连续子数组的最大和	动态规划分治	简单
// 题目描述
// 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为 O(n).
// 示例1
// 输入
// [1,-2,3,10,-4,7,2,-5]
// 返回值
// 18
// 说明
// 输入的数组为{1,-2,3,10,—4,7,2,一5}，和最大的子数组为{3,10,一4,7,2}，因此输出为该子数组的和 18。 
function FindGreatestSumOfSubArray(array) {
  let max = array[0];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = (sum + array[i]) > array[i] ? (sum + array[i]) : array[i];
    max = sum > max ? sum : max;
  }
  return max;
}