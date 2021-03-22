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
function reConstructBinaryTree(pre, vin) {

}