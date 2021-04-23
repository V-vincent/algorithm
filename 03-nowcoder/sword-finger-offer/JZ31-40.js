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