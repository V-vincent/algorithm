// JZ41	和为S的连续正数序列	穷举	中等
// 题目描述
// 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!
// 返回值描述:
// 输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
// 示例1
// 输入
// 9
// 返回值
// [[2,3,4],[4,5]]
function FindContinuousSequence(sum) {
  if (sum <= 1) return [];
  // 滑动窗口和
  let res = [];
  let num = Math.ceil(sum / 2);
  let index = 1;
  let temp = [], tempSum = 0;
  while (index <= num) {
    tempSum += index;
    temp.push(index);
    if (tempSum === sum) {
      res.push(temp);
      // 重置
      index = temp[0];
      temp = [];
      tempSum = 0
    } else if (tempSum > sum) {
      // 重置
      index = temp[0];
      temp = [];
      tempSum = 0
    }
    index++;
  }
  return res;
}

// JZ42	和为S的两个数字	双指针数组	中等
// 题目描述
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
// 返回值描述:
// 对应每个测试案例，输出两个数，小的先输出。
// 示例1
// 输入
// [1,2,4,7,11,15],15
// 返回值
// [4,11]
function FindNumbersWithSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= sum) return [];
    let temp = sum - array[i];
    if (array.indexOf(temp) > -1) {
      return [array[i], temp]
    }
  }
  return [];
}
function FindNumbersWithSum2(array, sum) {
  let left = 0, right = array.length - 1;
  while (left < right) {
    if (array[left] + array[right] > sum) right--;
    else if (array[left] + array[right] < sum) left++;
    else return [array[left], array[right]]
  }
  return [];
}

// JZ43  左旋转字符串   字符串   中等
// 描述
// 汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！
// 示例1
// 输入：
// "abcXYZdef",3
// 返回值：
// "XYZdefabc"
function LeftRotateString(str, n) {
  if (!str) return "";
  let num = n % str.length;
  return str.slice(num) + str.slice(0, num);
}

// JZ44  翻转单词序列 字符串 较难
// 描述
// 牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“nowcoder. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a nowcoder.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？
// 示例1
// 输入：
// "nowcoder. a am I"
// 返回值：
// "I am a nowcoder."
function ReverseSentence(str) {
  return str.split(' ').reverse().join(' ')
}
