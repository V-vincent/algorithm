// JZ31	整数中1出现的次数（从1到n整数中1出现的次数）	数学	中等
// 题目描述
// 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数
// 例如，1~13中包含1的数字有1、10、11、12、13因此共出现6次

// 示例1
// 输入
// 13
// 返回值
// 6

// 思路：计算每个位数上面1的数量
function NumberOf1Between1AndN_Solution(n) {
  let res = 0; // 1出现的次数
  for (let i = 1; i <= n; i *= 10) { // i代表位数
    let high = Math.floor(n / (i * 10)); // 更高位数字
    let low = n % i; // 更低位数字
    let cur = Math.floor((n / i) % 10); // 当前位数字
    // 根据当前位数字来区分计算
    if (cur === 0) {
      res += high * i;
    } else if (cur === 1) {
      res += high * i + (low + 1)
    } else {
      res += (high + 1) * i
    }
  }
  return res;
}

// JZ32	把数组排成最小的数	数组	较难
// 题目描述
// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
// 示例1
// 输入
// [3,32,321]
// 返回值
// "321323"
function PrintMinNumber(numbers) {
  // 这个就是冒泡排序吧
  let len = numbers.length;
  while (len > 1) {
    for (let i = 0; i < len - 1; i++) {
      if (parseInt(numbers[i] + '' + numbers[i + 1]) > parseInt(numbers[i + 1] + '' + numbers[i])) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
      }
    }
    len--;
  }
  return numbers.join('');
  // numbers.sort((a, b) => {
  //   return `${a}${b}` > `${b}${a}` ? 1 : -1;
  // })
  // return numbers.join('');
}

// JZ33	丑数	数学二分	较难
// 题目描述
// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
// 示例1
// 输入
// 7
// 返回值
// 8
function GetUglyNumber_Solution(index) {
  if (index < 7) return index;
  let res = [1];
  let p2 = 0, p3 = 0, p5 = 0;
  for (let i = 1; i < index; i++) {
    let num = Math.min(res[p2] * 2, res[p3] * 3, res[p5] * 5);
    if (num === res[p2] * 2) p2++;
    if (num === res[p3] * 3) p3++;
    if (num === res[p5] * 5) p5++;
    res.push(num);
  }
  return res[index - 1];
}

// JZ34	第一个只出现一次的字符位置	字符串	简单
// 题目描述
// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数）
// 示例1
// 输入
// "google"
// 返回值
// 4
function FirstNotRepeatingChar(str) {
  // let obj = {};
  // for (let i = 0; i < str.length; i++) {
  //   if (obj[str[i]]) obj[str[i]]++;
  //   else obj[str[i]] = 1;
  // }
  // for (let i = 0; i < str.length; i++) {
  //   if (obj[str[i]] == 1) return i;
  // }
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return i;
  }
  return -1;
}

// JZ36	两个链表的第一个公共结点	链表	中等
// 题目描述
// 输入两个链表，找出它们的第一个公共结点。
// （注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）
function FindFirstCommonNode(pHead1, pHead2) {
  if (!pHead1 || !pHead2) return null;
  let p1 = pHead1, p2 = pHead2;
  // 双指针法
  // 初始化：指针p1指向链表pHead1头结点，指针p2指向链表pHead2头结点
  // 如果p1 == p2， 说明找到了第一个公共的头结点，直接返回即可。
  // 否则，p1 != p2，则++p1，++p2
  while (p1 !== p2) {
    // 如果链表长度不相同
    p1 = p1 ? p1.next : pHead2; // p1 + p2作为链表pHead1的新长度
    p2 = p2 ? p2.next : pHead1; // p2 + p1作为链表pHead2的新长度
  }
  return p1;
}

// JZ37	数字在排序数组中出现的次数	数组二分	中等
// 题目描述
// 统计一个数字在升序数组中出现的次数。
// 示例1
// 输入
// [1,2,3,3,3,3,4,5],3
// 返回值
// 4
function GetNumberOfK(data, k) {
  // 二分法
  let len = data.length;
  // 找第一个小于k的值的位置
  let leftS = 0, rightS = len - 1;
  while (leftS <= rightS) {
    let mid = leftS + Math.floor((rightS - leftS) / 2);
    if (data[mid] >= k) {
      rightS = mid - 1;
    } else {
      leftS = mid + 1;
    }
  }
  // 找第一个大于k的值的位置
  let leftB = leftS, rightB = len - 1;
  while (leftB <= rightB) {
    let mid = leftB + Math.floor((rightB - leftB) / 2);
    if (data[mid] <= k) {
      leftB = mid + 1;
    } else {
      rightB = mid - 1;
    }
  }
  return leftB - leftS;
}