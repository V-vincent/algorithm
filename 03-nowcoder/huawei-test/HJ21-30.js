let inputArr = [];
// HJ21	简单密码破解	字符串	中等
// 题目描述
// 密码是我们生活中非常重要的东东，我们的那么一点不能说的秘密就全靠它了。哇哈哈. 接下来渊子要在密码之上再加一套密码，虽然简单但也安全。
// 假设渊子原来一个BBS上的密码为zvbo9441987,为了方便记忆，他通过一种算法把这个密码变换成YUANzhi1987，这个密码是他的名字和出生年份，怎么忘都忘不了，而且可以明目张胆地放在显眼的地方而不被别人知道真正的密码。
// 他是这么变换的，大家都知道手机上的字母： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0,就这么简单，渊子把密码中出现的小写字母都变成对应的数字，数字和其他的符号都不做变换，
// 声明：密码中没有空格，而密码中出现的大写字母则变成小写之后往后移一位，如：X，先变成小写，再往后移一位，不就是y了嘛，简单吧。记住，z往后移是a哦。
// 输入描述:
// 输入包括多个测试数据。输入是一个明文，密码长度不超过100个字符，输入直到文件结尾
// 输出描述:
// 输出渊子真正的密文
// 示例1
// 输入
// YUANzhi1987
// 输出
// zvbo9441987
function hj21(input) {
  let str = '';
  let code;
  if (input) {
    for (let i = 0; i < input.length; i++) {
      let item = input.charAt(i);
      if (/[A-Z]/g.test(item)) {
        code = item.charCodeAt();
        if (code == 90) {
          str += 'a';
        } else if (code >= 65 && code < 90) {
          str += String.fromCharCode(Number(code) + 33)
        }
      } else if (/[a-z]/g.test(item)) {
        code = item.charCodeAt();
        if (code >= 97 && code <= 99) {
          str += '2';
        } else if (code >= 100 && code <= 102) {
          str += '3';
        } else if (code >= 103 && code <= 105) {
          str += '4';
        } else if (code >= 106 && code <= 108) {
          str += '5';
        } else if (code >= 109 && code <= 111) {
          str += '6';
        } else if (code >= 112 && code <= 115) {
          str += '7';
        } else if (code >= 116 && code <= 118) {
          str += '8';
        } else if (code >= 119 && code <= 122) {
          str += '9';
        }
      } else {
        str += item;
      }
    }
  }
  console.log(str);
}

// HJ22	汽水瓶	模拟	简单
// 题目描述
// 有这样一道智力题：“某商店规定：三个空汽水瓶可以换一瓶汽水。小张手上有十个空汽水瓶，她最多可以换多少瓶汽水喝？”答案是5瓶，方法如下：先用9个空瓶子换3瓶汽水，喝掉3瓶满的，喝完以后4个空瓶子，用3个再换一瓶，喝掉这瓶满的，这时候剩2个空瓶子。然后你让老板先借给你一瓶汽水，喝掉这瓶满的，喝完以后用3个空瓶子换一瓶满的还给老板。如果小张手上有n个空汽水瓶，最多可以换多少瓶汽水喝？
// 输入描述:
// 输入文件最多包含10组测试数据，每个数据占一行，仅包含一个正整数n（1<=n<=100），表示小张手上的空汽水瓶数。n=0表示输入结束，你的程序不应当处理这一行。
// 输出描述:
// 对于每组测试数据，输出一行，表示最多可以喝的汽水瓶数。如果一瓶也喝不到，输出0。
// 示例1
// 输入
// 3
// 10
// 81
// 0
// 输出
// 1
// 5
// 40
function hj22(input) {
  // if(input > 1) console.log(Math.floor( Number(input) / 2 ));
  let sum = 0
  let num = parseInt(input)
  while (num > 1) {
    let temp = num % 3;
    let temp2 = parseInt(num / 3);
    sum += temp2;
    num = temp2 + temp;
    if (num == 2) {
      sum += 1;
      num = 0;
    }
  }
  if (sum > 0) console.log(sum)
}

// HJ23	删除字符串中出现次数最少的字符	字符串	较难
// 题目描述
// 实现删除字符串中出现次数最少的字符，若多个字符出现次数一样，则都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。
// 注意每个输入文件有多组输入，即多个字符串用回车隔开
// 输入描述:
// 字符串只包含小写英文字母, 不考虑非法输入，输入的字符串长度小于等于20个字节。
// 输出描述:
// 删除字符串中出现次数最少的字符后的字符串。
// 示例1
// 输入
// abcdd
// aabcddd
// 输出
// dd
// aaddd
function hj23(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let item = input.charAt(i);
    if (item in obj) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  let min = obj[input.charAt(0)];
  let minStr = [];
  for (let key in obj) {
    min = Math.min(min, obj[key]);
  }
  for (let key in obj) {
    if (min == obj[key]) minStr.push(key);
  }
  let str = input;
  for (let i = 0; i < minStr.length; i++) {
    str = str.replace(minStr[i], '')
  }
  console.log(str)
}

// HJ24	合唱队	动态规划队列	较难
// 题目描述
// 计算最少出列多少位同学，使得剩下的同学排成合唱队形
// 说明：
// N位同学站成一排，音乐老师要请其中的(N-K)位同学出列，使得剩下的K位同学排成合唱队形。
// 合唱队形是指这样的一种队形：设K位同学从左到右依次编号为1，2…，K，他们的身高分别为T1，T2，…，TK，   则他们的身高满足存在i（1<=i<=K）使得T1<T2<......<Ti-1<Ti>Ti+1>......>TK。
// 你的任务是，已知所有N位同学的身高，计算最少需要几位同学出列，可以使得剩下的同学排成合唱队形。
// 注意不允许改变队列元素的先后顺序
// 请注意处理多组输入输出！
// 输入描述:
// 整数N
// 输出描述:
// 最少需要几位同学出列
// 示例1
// 输入
// 8
// 186 186 150 200 160 130 197 200
// 输出
// 4
function hj24(input) {
  let arr = input.split(' ');
  let len = arr.length;

  function getList(res) {
    let lists = [1];
    for (let i = 1; i < len; i++) {
      lists.push(1);
      let isMax = 1;
      for (let j = i - 1; j >= 0; j--) {
        if (res[j] < res[i] && lists[j] >= isMax) {
          isMax = lists[j] + 1;
        } else if (res[j] == res[i] && lists[j] > isMax) {
          isMax = lists[j];
        }
      }
      lists[i] = isMax;
    }
    return lists;
  }
  let left = getList(arr);
  let right = getList(arr.reverse()).reverse();
  let sum = 1;
  for (let i = 0; i < len; i++) {
    sum = Math.max(left[i] + right[i] - 1, sum);
  }
  return len - sum;
}

// HJ25	数据分类处理	排序	较难
// 题目描述
// 信息社会，有海量的数据需要分析处理，比如公安局分析身份证号码、 QQ 用户、手机号码、银行帐号等信息及活动记录。
// 采集输入大数据和分类规则，通过大数据分类处理程序，将大数据分类输出。
// 请注意本题有多组输入用例。
// 输入描述:
// ﻿一组输入整数序列I和一组规则整数序列R，I和R序列的第一个整数为序列的个数（个数不包含第一个整数）；整数范围为0~0xFFFFFFFF，序列个数不限
// 输出描述:
// ﻿从R依次中取出R<i>，对I进行处理，找到满足条件的I： 
// I整数对应的数字需要连续包含R<i>对应的数字。比如R<i>为23，I为231，那么I包含了R<i>，条件满足 。 
// 按R<i>从小到大的顺序:
// (1)先输出R<i>； 
// (2)再输出满足条件的I的个数； 
// (3)然后输出满足条件的I在I序列中的位置索引(从0开始)； 
// (4)最后再输出I。 
// 附加条件： 
// (1)R<i>需要从小到大排序。相同的R<i>只需要输出索引小的以及满足条件的I，索引大的需要过滤掉 
// (2)如果没有满足条件的I，对应的R<i>不用输出 
// (3)最后需要在输出序列的第一个整数位置记录后续整数序列的个数(不包含“个数”本身)
// 序列I：15,123,456,786,453,46,7,5,3,665,453456,745,456,786,453,123（第一个15表明后续有15个整数） 
// 序列R：5,6,3,6,3,0（第一个5表明后续有5个整数） 
// 输出：30, 3,6,0,123,3,453,7,3,9,453456,13,453,14,123,6,7,1,456,2,786,4,46,8,665,9,453456,11,456,12,786
// 说明：
// 30----后续有30个整数
// 3----从小到大排序，第一个R<i>为0，但没有满足条件的I，不输出0，而下一个R<i>是3
// 6--- 存在6个包含3的I 
// 0--- 123所在的原序号为0 
// 123--- 123包含3，满足条件 
// 示例1
// 输入
// 复制
// 15 123 456 786 453 46 7 5 3 665 453456 745 456 786 453 123
// 5 6 3 6 3 0
// 输出
// 复制
// 30 3 6 0 123 3 453 7 3 9 453456 13 453 14 123 6 7 1 456 2 786 4 46 8 665 9 453456 11 456 12 786
function hj25(I, R) {
  let obj = {};
  let sum = 0;
  let str = '';
  R = R.sort((a, b) => {
    return a - b
  });
  for (let i = 0; i < R.length; i++) {
    if (R[i] in obj) continue;
    obj[R[i]] = [];
    for (let j = 0; j < I.length; j++) {
      if (I[j].indexOf(R[i]) != -1) {
        obj[R[i]].push(j + ' ' + I[j]);
      }
    }
    let len = obj[R[i]].length;
    if (len > 0) {
      sum += 2 + len + len;
      str = str + ' ' + R[i] + ' ' + len + ' ' + obj[R[i]].join(' ');
    }
  }
  str = sum + ' ' + str.trim();
  console.log(str);
}

// HJ26	字符串排序	排序字符串	中等
// 题目描述
// 编写一个程序，将输入字符串中的字符按如下规则排序。
// 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。
// 如，输入： Type 输出： epTy
// 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。
// 如，输入： BabA 输出： aABb
// 规则 3 ：非英文字母的其它字符保持原来的位置。
// 如，输入： By?e 输出： Be?y
// 注意有多组测试数据，即输入有多行，每一行单独处理（换行符隔开的表示不同行）
// 输入描述:
// 输入字符串
// 输出描述:
// 输出字符串
// 示例1
// 输入
// A Famous Saying: Much Ado About Nothing (2012/8).
// 输出
// A aaAAbc dFgghh: iimM nNn oooos Sttuuuy (2012/8).
function hj26(input) {
  let arrAll = input.split('')
  let arr = input.match(/[a-zA-Z]/g)
  let temp
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1].toLowerCase() < arr[j].toLowerCase()) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }
  let count = 0;
  let res = arrAll.map(item => {
    if (/[a-zA-Z]/g.test(item)) {
      return arr[count++];
    } else {
      return item;
    }
  })
  console.log(res.join(''));
}

// HJ27	查找兄弟单词		困难
// 题目描述
// 定义一个单词的“兄弟单词”为：交换该单词字母顺序，而不添加、删除、修改原有的字母就能生成的单词。
// 兄弟单词要求和原来的单词不同。例如：ab和ba是兄弟单词。ab和ab则不是兄弟单词。
// 现在给定你n个单词，另外再给你一个单词str，让你寻找str的兄弟单词里，字典序第k大的那个单词是什么？
// 注意：字典中可能有重复单词。本题含有多组输入数据。
// 输入描述:
// 先输入单词的个数n，再输入n个单词。
// 再输入一个单词，为待查找的单词x
// 最后输入数字k
// 输出描述:
// 输出查找到x的兄弟单词的个数m
// 然后输出查找到的按照字典顺序排序后的第k个兄弟单词，没有符合第k个的话则不用输出。
// 示例1
// 输入
// 3 abc bca cab abc 1
// 输出
// 2
// bca
function hj27(input) {
  let arr = input.split(' ');
  let n = parseInt(arr[0]);
  let word = arr[n + 1];
  let temp = word.split('').sort().join()
  let option = arr[arr.length - 1];
  let words = [];
  for (let i = 1; i <= n; i++) {
    if (arr[i] == word) continue;
    if (arr[i].split('').sort().join() == temp) {
      words.push(arr[i]);
    }
  }
  words.sort()
  console.log(words.length);
  if (words.length > option) {
    console.log(words[option - 1]);
  }
}

// HJ28	素数伴侣	排序	困难
// 题目描述
// 题目描述
// 若两个正整数的和为素数，则这两个正整数称之为“素数伴侣”，如2和5、6和13，它们能应用于通信加密。现在密码学会请你设计一个程序，从已有的N（N为偶数）个正整数中挑选出若干对组成“素数伴侣”，挑选方案多种多样，例如有4个正整数：2，5，6，13，如果将5和6分为一组中只能得到一组“素数伴侣”，而将2和5、6和13编组将得到两组“素数伴侣”，能组成“素数伴侣”最多的方案称为“最佳方案”，当然密码学会希望你寻找出“最佳方案”。
// 输入:
// 有一个正偶数N（N≤100），表示待挑选的自然数的个数。后面给出具体的数字，范围为[2,30000]。
// 输出:
// 输出一个整数K，表示你求得的“最佳方案”组成“素数伴侣”的对数。
// 输入描述:
// 输入说明
// 1 输入一个正偶数n
// 2 输入n个整数
// 注意：数据可能有多组
// 输出描述:
// 求得的“最佳方案”组成“素数伴侣”的对数。
// 示例1
// 输入
// 4
// 2 5 6 13
// 2
// 3 6
// 输出
// 2
// 0
function hj28() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  let n = 0;
  rl.on('line', input => {
    if (n === 0) {
      n = input;
    } else {
      getMaxPartner(input);
      n = 0;
    }
  })

  function getMaxPartner(input) {
    let arr = input.split(' ').map(Number);
    let evens = []; // 偶数集合
    let odds = []; // 奇数集合
    arr.forEach(item => {
      if (item % 2 === 0) evens.push(item)
      else odds.push(item);
    });
    let evenPartner = Array(evens.length).fill(0); // 偶数的素数伴侣
    let evenUsed = [];
    let sum = 0;
    // 遍历奇数集合，给它找合适的伴侣
    for (let i = 0; i < odds.length; i++) {
      // 每一个奇数开始找伴侣时，都默认偶数都还单身，
      evenUsed = Array(evens.length).fill(0);
      if (findPartner(odds[i], evens, evenUsed, evenPartner)) {
        sum++;
      }
    }
    console.log(sum);
  }
  // 递归遍历偶数集合
  function findPartner(cur, evens, evenUsed, evenPartner) {
    for (let i = 0; i < evens.length; i++) {
      // 第i个偶数还没伴侣，这里正好给它找1个
      if (isPrimeNumber(cur + evens[i]) && evenUsed[i] === 0) {
        evenUsed[i] = 1;
        // 当前奇数(cur)还没找到伴侣，正好和第i个偶数组成一对
        if (evenPartner[i] === 0) {
          evenPartner[i] = cur;
          return true;
        } else {
          // 第i个奇数已经有伴侣了，但是当前奇数(cur)比较强势，要第i个奇数腾位置
          if (findPartner(evenPartner[i], evens, evenUsed, evenPartner)) {
            evenPartner[i] = cur;
            return true;
          }
        }
      }
    }
    return false;
  }
  // 判断素数
  function isPrimeNumber(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
// HJ29	字符串加解密	字符串	较难
// 题目描述
// 1、对输入的字符串进行加解密，并输出。
// 2、加密方法为：
// 当内容是英文字母时则用该英文字母的后一个字母替换，同时字母变换大小写,如字母a时则替换为B；字母Z时则替换为a；
// 当内容是数字时则把该数字加1，如0替换1，1替换2，9替换0；
// 其他字符不做变化。
// 3、解密方法为加密的逆过程。
// 本题含有多组样例输入。
// 输入描述:
// 输入说明
// 输入一串要加密的密码
// 输入一串加过密的密码
// 输出描述:
// 输出说明
// 输出加密后的字符
// 输出解密后的字符
// 示例1
// 输入
// abcdefg
// BCDEFGH
// 输出
// BCDEFGH
// abcdefg
function hj29() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);
  let n = 0;
  rl.on('line', input => {
    if (n == 0) {
      encryption(input);
      n++;
    } else {
      decrypt(input);
      n--;
    }
  })
  // 加密
  function encryption(input) {
    let arr = input.split('');
    let item;
    for (let i = 0; i < arr.length; i++) {
      if (/[a-z]/.test(arr[i])) {
        item = arr[i].toUpperCase().charCodeAt();
        if (item == 90) arr[i] = 'A';
        else arr[i] = String.fromCharCode(parseInt(item) + 1);
      } else if (/[A-Z]/.test(arr[i])) {
        item = arr[i].toLowerCase().charCodeAt();
        if (item == 122) arr[i] = 'a';
        else arr[i] = String.fromCharCode(parseInt(item) + 1);
      } else if (/[0-9]/.test(arr[i])) {
        arr[i] = parseInt(arr[i]) + 1 >= 10 ? 0 : parseInt(arr[i]) + 1;
      }
    }
    console.log(arr.join(''));
  }
  // 解密
  function decrypt(input) {
    let arr = input.split('');
    let item;
    for (let i = 0; i < arr.length; i++) {
      if (/[a-z]/.test(arr[i])) {
        item = arr[i].toUpperCase().charCodeAt();
        if (item == 65) arr[i] = 'Z';
        else arr[i] = String.fromCharCode(parseInt(item) - 1);
      } else if (/[A-Z]/.test(arr[i])) {
        item = arr[i].toLowerCase().charCodeAt();
        if (item == 97) arr[i] = 'z';
        else arr[i] = String.fromCharCode(parseInt(item) - 1);
      } else if (/[0-9]/.test(arr[i])) {
        arr[i] = parseInt(arr[i]) - 1 < 0 ? 9 : parseInt(arr[i]) - 1;
      }
    }
    console.log(arr.join(''));
  }
}

// HJ30	字符串合并处理	字符串排序	较难
// 题目描述
// 按照指定规则对输入的字符串进行处理。
// 详细描述：
// 将输入的两个字符串合并。
// 对合并后的字符串进行排序，要求为：下标为奇数的字符和下标为偶数的字符分别从小到大排序。这里的下标意思是字符在字符串中的位置。
// 对排序后的字符串进行操作，如果字符为‘0’——‘9’或者‘A’——‘F’或者‘a’——‘f’，则对他们所代表的16进制的数进行BIT倒序的操作，并转换为相应的大写字符。如字符为‘4’，为0100b，则翻转后为0010b，也就是2。转换后的字符为‘2’； 如字符为‘7’，为0111b，则翻转后为1110b，也就是e。转换后的字符为大写‘E’。
// 举例：输入str1为"dec"，str2为"fab"，合并为“decfab”，分别对“dca”和“efb”进行排序，排序后为“abcedf”，转换后为“5D37BF”
// 注意本题含有多组样例输入
// 输入描述:
// 本题含有多组样例输入。每组样例输入两个字符串，用空格隔开。
// 输出描述:
// 输出转化后的结果。每组样例输出一行。
// 示例1
// 输入
// dec fab
// 输出
// 5D37BF
function hj30(input) {
  let arr = input.replace(' ', '').split('');
  let len = arr.length;
  while (len > 2) {
    for (let i = 0; i < len - 2; i++) {
      if (arr[i] > arr[i + 2]) {
        swap(arr, i, i + 2);
      }
    }
    len = len - 2;
  }
  for (let i = 0; i < arr.length; i++) {
    if (/[0-9A-Fa-f]/.test(arr[i])) {
      let item = parseInt(arr[i], 16).toString(2).padStart(4, '0');
      item = String(item).split('').reverse().join('');
      item = parseInt(item, 2).toString(16);
      arr[i] = /[a-f]/.test(item) ? item.toUpperCase() : item
    }
  }
  console.log(arr.join(''));
}
// 交换数据
function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}