// 7. 整数反转
// 难度 简单
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。
//  

// 示例 1：

// 输入：x = 123
// 输出：321
// 示例 2：

// 输入：x = -123
// 输出：-321
// 示例 3：

// 输入：x = 120
// 输出：21
// 示例 4：

// 输入：x = 0
// 输出：0
//  

// 提示：

// -2^31 <= x <= 2^31 - 1

var reverse = function (x) {
  const border = 2 ** 31; // or Math.pow(2, 31)
  const max = border - 1;
  const min = -border;

  let isNegative = x < 0 ? true : false;
  let res = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  res = isNegative ? -res : res;
  if (res > max || res < min) {
    return 0
  }
  return res;
};

var reverse = function (x) {
  let res = 0;
  while (x != 0) {
    res = res * 10 + x % 10;
    x = parseInt(x / 10);
  }
  return (res | 0) === res ? res : 0;
}



// 9. 回文数
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
// 示例 1：
// 输入：x = 121
// 输出：true
// 示例 2：
// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3：
// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。
// 示例 4：

// 输入：x = -101
// 输出：false
// 提示：

// -2^31 <= x <= 2^31 - 1
// 进阶：你能不将整数转为字符串来解决这个问题吗？
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  let str = String(x);
  let len = str.length / 2;
  let left, right;
  if (str.length % 2 === 0) {
    left = str.slice(0, len);
    right = str.slice(len).split('').reverse().join('');
  } else {
    left = str.slice(0, parseInt(len));
    right = str.slice(parseInt(len) + 1).split('').reverse().join('');
  }
  return left == right;
};

// Math.log10(x)获取数量级：Math.log10(100) = 2；Math.log10(1000) = 3
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let n = 10 ** Math.floor(Math.log10(x));
  while (n > 1 && x > 0) {
    if (Math.floor(x / n) !== x % 10) return false;
    x = Math.floor((x % n) / 10);
    n /= 100;
  }
  return true;
};