let inputArr = [];

// HJ1 字符串最后一个单词的长度 字符串 较难
// 计算字符串最后一个单词的长度，单词以空格隔开。
// 示例1
// 输入
// hello nowcoder
// 输出
// 8
function hj1(str) {
  let arr = str.split(" ");
  console.log(arr[arr.length - 1].length);
}

// HJ2	计算字符个数	字符串 哈希	较难
// 题目描述
// 写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字母，然后输出输入字符串中该字母的出现次数。不区分大小写。
// 输入描述:
// 第一行输入一个由字母和数字以及空格组成的字符串，第二行输入一个字母。
// 输出描述:
// 输出输入字符串中含有该字符的个数。
// 示例1
// 输入
// ABCabc
// A
// 输出
// 2
function hj2(input) {
  inputArr.push(input);
  if (inputArr.length === 2) {
    let str = inputArr[0].toLowerCase();
    let val = inputArr[1].toLowerCase();
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === val) num++;
    }
    console.log(num)
  }
}

// HJ3	明明的随机数	数组	较难
// 明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了N个1到1000之间的随机整数（N≤1000），对于其中重复的数字，只保留一个，把其余相同的数去掉，不同的数对应着不同的学生的学号。然后再把这些数从小到大排序，按照排好的顺序去找同学做调查。请你协助明明完成“去重”与“排序”的工作(同一个测试用例里可能会有多组数据(用于不同的调查)，希望大家能正确处理)。
// 注：测试用例保证输入参数的正确性，答题者无需验证。测试用例不止一组。
// 当没有新的输入时，说明输入结束。
// 输入描述:
// 注意：输入可能有多组数据(用于不同的调查)。每组数据都包括多行，第一行先输入随机整数的个数N，接下来的N行再输入相应个数的整数。具体格式请看下面的"示例"。
// 输出描述:
// 返回多行，处理后的结果
// 示例1
// 输入
// 3
// 2
// 2
// 1
// 11
// 10
// 20
// 40
// 32
// 67
// 40
// 20
// 89
// 300
// 400
// 15
// 输出
// 1
// 2
// 10
// 15
// 20
// 32
// 40
// 67
// 89
// 300
// 400
// 说明
// 样例输入解释：
// 样例有两组测试
// 第一组是3个数字，分别是：2，2，1。
// 第二组是11个数字，分别是：10，20，40，32，67，40，20，89，300，400，15。 
function hj3(input) {
  inputArr.push(input);
  let num = inputArr[0];
  if (Number(num) + 1 === inputArr.length) {
    let arr = inputArr.slice(1).sort((a, b) => {
      return a - b;
    });
    arr = Array.from(new Set(arr));
    arr.map(item => {
      console.log(item);
    })
    inputArr = [];
  }
}

// HJ4	字符串分隔	字符串	较难
// 题目描述
// •连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；
// •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
// 输入描述:
// 连续输入字符串(输入多次,每个字符串长度小于100)
// 输出描述:
// 输出到长度为8的新字符串数组
// 示例1
// 输入
// abc
// 123456789
// 输出
// abc00000
// 12345678
// 90000000
function hj4(str) {
  let len = str.length;
  if (len <= 8) {
    console.log(str.padEnd(8, '0'))
  } else if (len > 8) {
    console.log(str.substr(0, 8));
    hj4(str.slice(8))
  }
}

// HJ5	进制转换	字符串	中等
// 题目描述
// 写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。
// 输入描述:
// 输入一个十六进制的数值字符串。注意：一个用例会同时有多组输入数据，请参考帖子https://www.nowcoder.com/discuss/276处理多组输入的问题。
// 输出描述:
// 输出该数值的十进制字符串。不同组的测试用例用\n隔开。
// 示例1
// 输入
// 0xA
// 0xAA
// 输出
// 10
// 170
function hj5(str) {
  str = str.slice(2);
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let num = 0;
    let code = str.charCodeAt(i);
    // 0-9 => code: 48-57
    if (code >= 48 && code <= 57) {
      num = code - 48;
      // A-F => code: 65-70
    } else if (code >= 65 && code <= 70) {
      num = code - 65 + 10
    }
    arr.push(num)
  }
  let sum = arr.reduce((pre, cur) => {
    return pre * 16 + cur
  })
  console.log(sum);
}