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