let inputArr = [];
// HJ11	数字颠倒	字符串	简单
// 题目描述
// 输入一个整数，将这个整数以字符串的形式逆序输出
// 程序不考虑负数的情况，若数字含有0，则逆序形式也含有0，如输入为100，则输出为001
// 输入描述:
// 输入一个int整数
// 输出描述:
// 将这个整数以字符串的形式逆序输出
// 示例1
// 输入
// 1516000
// 输出
// 0006151
function hj11(input) {
  let arr = String(input).split('').reverse();
  console.log(arr.join(''));
}

// HJ12	字符串反转	字符串	简单
// 题目描述
// 接受一个只包含小写字母的字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）
// 输入描述:
// 输入一行，为一个只包含小写字母的字符串。
// 输出描述:
// 输出该字符串反转后的字符串。
// 示例1
// 输入
// abcd
// 输出
// dcba
function hj12(input) {
  let arr = input.split('').reverse()
  console.log(arr.join(''))
}

// HJ13	句子逆序	数组	较难
// 题目描述
// 将一个英文语句以单词为单位逆序排放。例如“I am a boy”，逆序排放后为“boy a am I”
// 所有单词之间用一个空格隔开，语句中除了英文字母外，不再包含其他字符
// 输入描述:
// 输入一个英文语句，每个单词用空格隔开。保证输入只包含空格和字母。
// 输出描述:
// 得到逆序的句子
// 示例1
// 输入
// I am a boy
// 输出
// boy a am I
function hj13(input) {
  let arr = input.split(' ').reverse()
  console.log(arr.join(" "))
}

// HJ14	字符串排序	字符串	中等
// 题目描述
// 给定n个字符串，请对n个字符串按照字典序排列。
// 输入描述:
// 输入第一行为一个正整数n(1≤n≤1000),下面n行为n个字符串(字符串长度≤100),字符串中只含有大小写字母。
// 输出描述:
// 数据输出n行，输出结果为按照字典序排列的字符串。
// 示例1
// 输入
// 9
// cap
// to
// cat
// card
// two
// too
// up
// boat
// boot
// 输出
// boat
// boot
// cap
// card
// cat
// to
// too
// two
// up
function hj14(input) {
  inputArr.push(input);
  let num = Number(inputArr[0]);
  if (num + 1 === inputArr.length) {
    let arr = inputArr.slice(1);
    arr.sort();
    console.log(arr.join('\n'))
  }
}

// HJ15	求int型数据在内存中存储时1的个数	位运算	入门
// 题目描述
// 输入一个int型的正整数，计算出该int型数据在内存中存储时1的个数。
// 输入描述:
//  输入一个整数（int类型）
// 输出描述:
//  这个数转换成2进制后，输出1的个数
// 示例1
// 输入
// 5
// 输出
// 2
function hj15(num) {
  let arr = parseInt(num).toString(2).split('');
  let sum = 0;
  arr.map(item => {
    if (item == 1) sum++;
  })
  console.log(sum)
}