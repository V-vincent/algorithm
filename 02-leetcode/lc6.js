// 6. Z 字形变换
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
//  

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"
//  

// 提示：

// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000

var convert = function (s, numRows) {
  // 只有一行？直接上车走人啦
  if (numRows == 1) return s;
  // 方向盘：true就往下走，false就往右上走
  let option = true;
  // 二维数组，一个数组存储一行数据
  let dp = [];
  // 从第一个车厢开始上客人
  let line = 0;
  for (let i = 0; i < s.length; i++) {
    if (!dp[line]) dp[line] = []; // 没有车厢就先加一个空车厢进去
    // 按照顺序上车
    dp[line].push(s[i]);
    // 一个车厢上一个客人，上了客人之后移动车厢
    if (option) line++; 
    else line--;
    // 边际条件：到车头就回正（true），到车尾就往后（false）
    if (line + 1 > numRows - 1) option = false;
    else if (line - 1 < 0) option = true;
  }
  // 下车，拼装字符串
  let str = '';
  for (let i = 0; i < dp.length; i++) {
    str += dp[i].join('');
  }
  return str;
};