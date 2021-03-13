// HJ31	【中级】单词倒排	字符串排序	困难
// 题目描述
// 对字符串中的所有单词进行倒排。

// 说明：

// 1、构成单词的字符只有26个大写或小写英文字母；

// 2、非构成单词的字符均视为单词间隔符；

// 3、要求倒排后的单词间隔符以一个空格表示；如果原字符串中相邻单词间有多个间隔符时，倒排转换后也只允许出现一个空格间隔符；

// 4、每个单词最长20个字母；

// 输入描述:
// 输入一行以空格来分隔的句子

// 输出描述:
// 输出句子的逆序

// 示例1
// 输入
// I am a student
// 输出
// student a am I
function hj31() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.on('line', input => {
    if (input) sort(input);
  })

  function sort(input) {
    let str = input.replace(/[^a-zA-Z]/g, ' ').trim();
    let arr = str.split(' ').filter(item => {
      return item != ''
    });
    console.log(arr.reverse().join(' '))
  }
}

// HJ32	【中级】字符串运用-密码截取	字符串	较难
// 题目描述
// Catcher是MCA国的情报员，他工作时发现敌国会用一些对称的密码进行通信，比如像这些ABBA，ABA，A，123321，但是他们有时会在开始或结束时加入一些无关的字符以防止别国破解。比如进行下列变化 ABBA->12ABBA,ABA->ABAKK,123321->51233214　。因为截获的串太长了，而且存在多种可能的情况（abaaab可看作是aba,或baaab的加密形式），Cathcer的工作量实在是太大了，他只能向电脑高手求助，你能帮Catcher找出最长的有效密码串吗？

// 本题含有多组样例输入。

// 输入描述:
// 输入一个字符串

// 输出描述:
// 返回有效密码串的最大长度

// 示例1
// 输入
// ABBA
// 输出
// 4
function hj32() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.on('line', input => {
    if (input) getMaxString(input);
  })

  function getMaxString(input) {
    let res = '';
    for (let i = 0; i < input.length - 1; i++) {
      let odd = getMaxStr(input, i, i);
      let even = getMaxStr(input, i, i + 1);
      let temp = odd.length > even.length ? odd : even;
      res = temp.length > res.length ? temp : res;
    }
    console.log(res.length);
  }

  function getMaxStr(str, left, right) {
    while (left >= 0 && right < str.length && str[left] == str[right]) {
      left--;
      right++;
    }
    return str.slice(left + 1, right);
  }
}

// HJ33	整数与IP地址间的转换	字符串	较难
// 题目描述
// 原理：ip地址的每段可以看成是一个0-255的整数，把每段拆分成一个二进制形式组合起来，然后把这个二进制数转变成
// 一个长整数。
// 举例：一个ip地址为10.0.3.193
// 每段数字             相对应的二进制数
// 10                   00001010
// 0                    00000000
// 3                    00000011
// 193                  11000001

// 组合起来即为：00001010 00000000 00000011 11000001,转换为10进制数就是：167773121，即该IP地址转换后的数字就是它了。

// 本题含有多组输入用例，每组用例需要你将一个ip地址转换为整数、将一个整数转换为ip地址。

// 输入描述:
// 输入 
// 1 输入IP地址
// 2 输入10进制型的IP地址

// 输出描述:
// 输出
// 1 输出转换成10进制的IP地址
// 2 输出转换后的IP地址

// 示例1
// 输入
// 10.0.3.193
// 167969729
// 输出
// 167773121
// 10.3.3.193
function hj33() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  let n = 0;
  rl.on('line', input => {
    if (n == 0) {
      ipToNumber(input);
      n++;
    } else {
      numberToIp(input);
      n--;
    }
  })

  function ipToNumber(input) {
    let num = ''
    let arr = input.split('.').map(item => {
      num += parseInt(item).toString(2).padStart(8, '0')
    })
    console.log(parseInt(num, 2));
  }

  function numberToIp(input) {
    let num = parseInt(input).toString(2).padStart(32, '0');
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(parseInt(num.substr(i * 8, 8), 2));
    }
    console.log(arr.join('.'))
  }
}

// HJ34	图片整理	字符串	中等
// 题目描述
// Lily上课时使用字母数字图片教小朋友们学习英语单词，每次都需要把这些图片按照大小（ASCII码值从小到大）排列收好。请大家给Lily帮忙，通过C语言解决。

// 本题含有多组样例输入。
// 输入描述:
// Lily使用的图片包括"A"到"Z"、"a"到"z"、"0"到"9"。输入字母或数字个数不超过1024。

// 输出描述:
// Lily的所有图片按照从小到大的顺序输出

// 示例1
// 输入
// Ihave1nose2hands10fingers
// 输出
// 0112Iaadeeefghhinnnorsssv
function hj34() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.on('line', input => {
    console.log(input.split('').sort().join(''))
  })
}

// HJ35	蛇形矩阵	数组	中等
// 题目描述
// 蛇形矩阵是由1开始的自然数依次排列成的一个矩阵上三角形。

// 例如，当输入5时，应该输出的三角形为：

// 1 3 6 10 15
// 2 5 9 14
// 4 8 13
// 7 12
// 11

// 请注意本题含有多组样例输入。

// 输入描述:
// 输入正整数N（N不大于100）

// 输出描述:
// 输出一个N行的蛇形矩阵。

// 示例1
// 输入
// 4
// 输出
// 1 3 6 10
// 2 5 9
function hj35() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.on('line', input => {
    if (input) getSnakeMatrix(parseInt(input));
  })
  // 输出蛇形矩阵
  function getSnakeMatrix(num) {
    let dp = [];
    let n = 1;
    for (let i = 0; i < num; i++) {
      for (let j = i; j >= 0; j--) {
        if (!dp[j]) dp[j] = [];
        dp[j].push(n++)
      }
    }
    for (let i = 0; i < num; i++) {
      console.log(dp[i].join(' '))
    }
  }
}