// 20. 有效的括号
// https://leetcode-cn.com/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4
// 输入：s = "([)]"
// 输出：false

// 示例 5：
// 输入：s = "{[]}"
// 输出：true

// 提示：
// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

// 题解1，用对象记录
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  let stack = [];
  for (let i = 0, len = s.length; i < len; i++) {
    if (obj[s[i]]) {
      stack.push(obj[s[i]]);
    } else {
      if (stack.pop() !== s[i]) return false;
    }
  }
  return stack.length === 0;
};

// 题解2：map
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  let stack = [];
  for (let i = 0, len = s.length; i < len; i++) {
    if (map.get(s[i])) {
      stack.push(s[i])
    } else {
      if (s[i] !== map.get(stack.pop())) return false;
    }
  }
  return !stack.length;
};

// 题解3：正则
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
    if (s.includes('()')) s.replace('()', '');
    if (s.includes('[]')) s.replace('[]', '');
    if (s.includes('{}')) s.replace('{}', '');
  }
  return !s.length;
};