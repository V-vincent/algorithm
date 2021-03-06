let inputArr = [];
// HJ6	质数因子	排序	中等
// 题目描述
// 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）
// 最后一个数后面也要有空格
// 输入描述:
// 输入一个long型整数
// 输出描述:
// 按照从小到大的顺序输出它的所有质数的因子，以空格隔开。最后一个数后面也要有空格。
// 示例1
// 输入
// 180
// 输出
// 2 2 3 3 5
function hj6(num) {
  let str = "";
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      str += i + ' ';
      num /= i;
      i = 1;
    }
  }
  if (num > 1) {
    str += num + ' ';
  }
  console.log(str);
}

// HJ7	取近似值	数学	入门
// 题目描述
// 写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于5,向上取整；小于5，则向下取整。
// 输入描述:
// 输入一个正浮点数值
// 输出描述:
// 输出该数值的近似整数值
// 示例1
// 输入
// 5.5
// 输出
// 6
function hj7(num) {
  let decimal = Number(num) - Math.floor(num)
  console.log(Math.floor(num) + (decimal >= 0.5 ? 1 : 0))
}

// HJ8	合并表记录		中等
// 题目描述
// 数据表记录包含表索引和数值（int范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照key值升序进行输出。
// 输入描述:
// 先输入键值对的个数
// 然后输入成对的index和value值，以空格隔开
// 输出描述:
// 输出合并后的键值对（多行）
// 示例1
// 输入
// 4
// 0 1
// 0 2
// 1 2
// 3 4
// 输出
// 0 3
// 1 2
// 3 4
function hj8(input) {
  inputArr.push(input);
  let num = Number(inputArr[0]);
  if (num + 1 == inputArr.length) {
    let obj = {};
    let arr = inputArr.slice(1);
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i].split(' ');
      if (item[0] in obj) {
        obj[item[0]] = Number(obj[item[0]]) + Number(item[1])
      } else {
        obj[item[0]] = Number(item[1])
      }
    }
    for (key in obj) {
      console.log(key + " " + String(obj[key]))
    }
  }
}

// HJ9	提取不重复的整数	数组哈希位运算	中等
// 题目描述
// 输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
// 保证输入的整数最后一位不是0。
// 输入描述:
// 输入一个int型整数
// 输出描述:
// 按照从右向左的阅读顺序，返回一个不含重复数字的新的整数
// 示例1
// 输入
// 9876673
// 输出
// 37689
function hj9(input) {
  let arr = String(input).split('').reverse();
  arr = Array.from(new Set(arr));
  console.log(arr.join(''))
}

// HJ10	字符个数统计	字符串哈希	中等
// 题目描述
// 编写一个函数，计算字符串中含有的不同字符的个数。字符在ACSII码范围内(0~127)，换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次
// 例如，对于字符串abaca而言，有a、b、c三种不同的字符，因此输出3。
// 输入描述:
// 输入一行没有空格的字符串。
// 输出描述:
// 输出范围在(0~127)字符的个数。
// 示例1
// 输入
// abc
// 输出
// 3
function hj10(str) {
  let arr = str.split('');
  arr = Array.from(new Set(arr))
  console.log(arr.length);
}