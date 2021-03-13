// 5. 最长回文子串
// 难度中等

// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"

// 示例 4：
// 输入：s = "ac"
// 输出："a"
//  
// 提示：
// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成

// 思路分析
// 看回文子串，它得有一个中心，就像中位数一样，当个数是奇数时，它的中心就是中间那个；当个数是偶数是中心就是中间那两个的平均数
// 那回文子串也一样，有两种情况：
// 1、"aba"这种情况它的中心就是"a"
// 2、"abba"这种情况它的中心就是"bb"

// 我们知道了回文子串中心的两种情况了，那么怎么去找它的最长回文子串呢？
// 这里我的思路是从中心开始，往两边走，先对比左右两边第一个，相等的话，左边往左走，右边往右走，直到尽头或者不相等，就可以返回以这个点为中心时的回文子串了；
// 再一比较就可以得出最长回文子串了
// 这个是中心扩展法

var longestPalindrome = function (s) {
  let len = s.length;
  if (len <= 1) return s;
  let res = '';
  for (let i = 0; i < len - 1; i++) {
    // 中心只有一个的情况
    let odd = getPlalindrome(s, i, i);
    // 中心有两个的情况
    let even = getPlalindrome(s, i, i + 1);
    // 对比两个中心那个子串比较长
    let temp = odd.length > even.length ? odd : even;
    // 对比当前子串和之前最长子串那个比较长
    res = temp.length > res.length ? temp : res;
  }
  return res
};
// 找到回文子串
function getPlalindrome(str, left, right) {
  // 限制条件比较简单，超出边界或者不相等就跳出循环了
  while (left >= 0 && right < str.length && str[left] == str[right]) {
    left--;
    right++;
  }
  // console.log(left, right);
  // 像"abaa"，以b为中心时，此时left=-1；right = 3
  // 所以left要+1，而slice的第二个参数是数组片断结束处的数组下标，所以不用-1；
  // "abaa".slice(0, 3) = "aba"
  return str.slice(left + 1, right);
}
longestPalindrome('aba')
// function getMaxString(s) {
//   let res = '';
//   for (let i = 0; i < s.length - 1; i++) {
//     let odd = getPlalindrome(s, i, i);
//     let even = getPlalindrome(s, i, i + 1);
//     let temp = odd.length > even.length ? odd : even;
//     res = temp.length > res.length ? temp : res;
//   }
//   console.log(res.length);
// }
// 找到回文子串