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

// HJ16	购物单	动态规划	中等
// 题目描述
// 王强今天很开心，公司发给N元的年终奖。王强决定把年终奖用于购物，他把想买的物品分为两类：主件与附件，附件是从属于某个主件的，下表就是一些主件与附件的例子：
// 主件	附件
// 电脑	打印机，扫描仪
// 书柜	图书
// 书桌	台灯，文具
// 工作椅	无
// 如果要买归类为附件的物品，必须先买该附件所属的主件。每个主件可以有 0 个、 1 个或 2 个附件。附件不再有从属于自己的附件。王强想买的东西很多，为了不超出预算，他把每件物品规定了一个重要度，分为 5 等：用整数 1 ~ 5 表示，第 5 等最重要。他还从因特网上查到了每件物品的价格（都是 10 元的整数倍）。他希望在不超过 N 元（可以等于 N 元）的前提下，使每件物品的价格与重要度的乘积的总和最大。
//     设第 j 件物品的价格为 v[j] ，重要度为 w[j] ，共选中了 k 件物品，编号依次为 j 1 ， j 2 ，……， j k ，则所求的总和为：
// v[j 1 ]*w[j 1 ]+v[j 2 ]*w[j 2 ]+ … +v[j k ]*w[j k ] 。（其中 * 为乘号）
//     请你帮助王强设计一个满足要求的购物单。

// 输入描述:
// 输入的第 1 行，为两个正整数，用一个空格隔开：N m
// （其中 N （ <32000 ）表示总钱数， m （ <60 ）为希望购买物品的个数。）
// 从第 2 行到第 m+1 行，第 j 行给出了编号为 j-1 的物品的基本数据，每行有 3 个非负整数 v p q
// （其中 v 表示该物品的价格（ v<10000 ）， p 表示该物品的重要度（ 1 ~ 5 ）， q 表示该物品是主件还是附件。如果 q=0 ，表示该物品为主件，如果 q>0 ，表示该物品为附件， q 是所属主件的编号）

// 输出描述:
//  输出文件只有一个正整数，为不超过总钱数的物品的价格与重要度乘积的总和的最大值（ <200000 ）。
// 示例1
// 输入
// 1000 5
// 800 2 0
// 400 5 1
// 300 5 1
// 400 3 0
// 500 2 0
// 输出
// 2200
function hj16() {
  const rl = require('readline').createInterface(process.stdin, process.stdout);
  let N = -1,
    m = -1,
    index = 0;
  let vals = [],
    prices = [];
  let dp = [];
  let v, p, q;
  rl.on('line', input => {
    if (N === -1) {
      [N, m] = input.split(" ").map(Number);
      N = N / 10;
      for (let i = 0; i < m; i++) {
        vals.push([0, 0, 0])
        prices.push([0, 0, 0])
      }
      dp = Array(N + 1).fill(0);
    } else {
      [v, p, q] = input.split(" ").map(Number);
      v = v / 10;
      if (q === 0) {
        vals[index] = [v * p, 0, 0];
        prices[index] = [v, 0, 0];
      } else if (q > 0) {
        if (prices[q - 1][1] == 0) {
          prices[q - 1][1] = v;
          vals[q - 1][1] = v * p;
        } else {
          prices[q - 1][2] = v;
          vals[q - 1][2] = v * p;
          // if (prices[q - 1][2] < prices[q - 1][1]) {
          //   let tempP = prices[q - 1][2];
          //   prices[q - 1][2] = prices[q - 1][1];
          //   prices[q - 1][1] = tempP;
          //   let tempV = vals[q - 1][2];
          //   vals[q - 1][2] = vals[q - 1][1];
          //   vals[q - 1][1] = tempV;
          // }
        }
      }
      index++;
    }
    if (index === m) {
      getMaxVal(N, m, prices, vals, dp);
    }
  })

  function getMaxVal(N, m, prices, vals, dp) {
    let temp, temp1, temp2;
    for (let i = 0; i < m; i++) {
      for (let j = N; j >= prices[i][0]; j--) {
        dp[j] = Math.max(dp[j - prices[i][0]] + vals[i][0], dp[j]);
        temp1 = prices[i][0] + prices[i][1];
        if (prices[i][1] !== 0 && j >= temp1) {
          dp[j] = Math.max(dp[j - temp1] + vals[i][0] + vals[i][1], dp[j]);
        }
        temp2 = prices[i][0] + prices[i][2];
        temp = prices[i][0] + prices[i][1] + prices[i][2];
        if (prices[i][2] !== 0 && j >= temp2 && j < temp) {
          dp[j] = Math.max(dp[j - temp2] + vals[i][0] + vals[i][2], dp[j]);
        }
        if (prices[i][2] !== 0 && j >= temp) {
          dp[j] = Math.max(dp[j - temp] + vals[i][0] + vals[i][1] + vals[i][2], dp[j]);
        }
      }
    }
    console.log(dp[N] * 10)
  }
}

// HJ17	坐标移动	字符串	较难
// 题目描述
// 开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。
// 输入：
// 合法坐标为A(或者D或者W或者S) + 数字（两位以内）
// 坐标之间以;分隔。
// 非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。
// 下面是一个简单的例子 如：
// A10;S20;W10;D30;X;A1A;B10A11;;A10;
// 处理过程：
// 起点（0,0）
// +   A10   =  （-10,0）
// +   S20   =  (-10,-20)
// +   W10  =  (-10,-10)
// +   D30  =  (20,-10)
// +   x    =  无效
// +   A1A   =  无效
// +   B10A11   =  无效
// +  一个空 不影响
// +   A10  =  (10,-10)
// 结果 （10， -10）
// 注意请处理多组输入输出
// 输入描述:
// 一行字符串
// 输出描述:
// 最终坐标，以逗号分隔
// 示例1
// 输入
// A10;S20;W10;D30;X;A1A;B10A11;;A10;
// 输出
// 10,-10
function hj17(input) {
  let inputArr = input.split(";");
  let option, num, x = 0,
    y = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] && /[ASWD]/g.test(inputArr[i])) {
      option = inputArr[i].slice(0, 1);
      num = inputArr[i].slice(1);
      if (num && !/[^0-9]/g.test(num)) {
        if (option == 'A') x -= parseInt(num);
        if (option == 'S') y -= parseInt(num);
        if (option == 'W') y += parseInt(num);
        if (option == 'D') x += parseInt(num);
      }
    }
  }
  console.log(x + ',' + y)
}

// HJ18	识别有效的IP地址和掩码并进行分类统计	字符串	困难
// 题目描述
// 请解析IP地址和对应的掩码，进行分类识别。要求按照A/B/C/D/E类地址归类，不合法的地址和掩码单独归类。
// 所有的IP地址划分为 A,B,C,D,E五类
// A类地址1.0.0.0~126.255.255.255;
// B类地址128.0.0.0~191.255.255.255;
// C类地址192.0.0.0~223.255.255.255;
// D类地址224.0.0.0~239.255.255.255；
// E类地址240.0.0.0~255.255.255.255
// 私网IP范围是：
// 10.0.0.0～10.255.255.255
// 172.16.0.0～172.31.255.255
// 192.168.0.0～192.168.255.255
// 子网掩码为二进制下前面是连续的1，然后全是0。（例如：255.255.255.32就是一个非法的掩码）
// 注意二进制下全是1或者全是0均为非法
// 注意：
// 1. 类似于【0.*.*.*】和【127.*.*.*】的IP地址不属于上述输入的任意一类，也不属于不合法ip地址，计数时可以忽略
// 2. 私有IP地址和A,B,C,D,E类地址是不冲突的
// 输入描述:
// 多行字符串。每行一个IP地址和掩码，用~隔开。
// 输出描述:
// 统计A、B、C、D、E、错误IP地址或错误掩码、私有IP的个数，之间以空格隔开。
// 示例1
// 输入
// 10.70.44.68~255.254.255.0
// 1.0.0.1~255.0.0.0
// 192.168.0.2~255.255.255.0
// 19..0.~255.255.255.0
// 输出
// 1 0 1 0 0 2 1
// 14、解析IP地址和对应的掩码，进行分类识别
function hj18(input) {
  let item = input.split('~');
  let ip = item[0].split('.');
  let mask = item[1].split('.');
  let tempMask = '';
  // 检查错误IP/检查错误掩码
  for (let i = 0; i < 4; i++) {
    if (parseInt(ip[i]) >= 0 && parseInt(ip[i]) <= 255) {
      continue;
    } else {
      res[5]++;
      return;
    }
  }
  for (let i = 0; i < 4; i++) {
    if (parseInt(mask[i]) >= 0 && parseInt(mask[i]) <= 255) {
      // 需要前补0
      tempMask += parseInt(mask[i]).toString(2).padStart(8, '0')
    } else {
      res[5]++;
      return;
    }
  }
  if (/01/g.test(tempMask)) {
    res[5]++;
    return;
  }
  if (!(/0/.test(tempMask))) {
    res[5]++;
    return;
  }
  // 私有IP
  if (ip[0] == 10 || (ip[0] == 172 && ip[1] >= 16 && ip[1] <= 31) || (ip[0] == 192 && ip[1] == 168)) {
    res[6] += 1;
  }
  // A
  if (ip[0] >= 1 && ip[0] <= 126) {
    res[0] += 1;
    return
  }
  // B
  if (ip[0] >= 128 && ip[0] <= 191) {
    res[1] += 1;
    return
  }
  // C
  if (ip[0] >= 192 && ip[0] <= 223) {
    res[2] += 1;
    return
  }
  // D
  if (ip[0] >= 224 && ip[0] <= 239) {
    res[3] += 1;
    return
  }
  // E
  if (ip[0] >= 240 && ip[0] <= 255) {
    res[4] += 1;
  }
}

// HJ19	简单错误记录	字符串	困难
// 题目描述
// 开发一个简单错误记录功能小模块，能够记录出错的代码所在的文件名称和行号。
// 处理：
// 1、 记录最多8条错误记录，循环记录，最后只用输出最后出现的八条错误记录。对相同的错误记录只记录一条，但是错误计数增加。最后一个斜杠后面的带后缀名的部分（保留最后16位）和行号完全匹配的记录才做算是”相同“的错误记录。
// 2、 超过16个字符的文件名称，只记录文件的最后有效16个字符；
// 3、 输入的文件可能带路径，记录文件名称不能带路径。
// 4、循环记录时，只以第一次出现的顺序为准，后面重复的不会更新它的出现时间，仍以第一次为准
// 输入描述:
// 每组只包含一个测试用例。一个测试用例包含一行或多行字符串。每行包括带路径文件名称，行号，以空格隔开。
// 输出描述:
// 将所有的记录统计并将结果输出，格式：文件名 代码行数 数目，一个空格隔开，如：
// 示例1
// 输入
// D:\zwtymj\xccb\ljj\cqzlyaszjvlsjmkwoqijggmybr 645
// E:\je\rzuwnjvnuz 633
// C:\km\tgjwpb\gy\atl 637
// F:\weioj\hadd\connsh\rwyfvzsopsuiqjnr 647
// E:\ns\mfwj\wqkoki\eez 648
// D:\cfmwafhhgeyawnool 649
// E:\czt\opwip\osnll\c 637
// G:\nt\f 633
// F:\fop\ywzqaop 631
// F:\yay\jc\ywzqaop 631
// 输出
// rzuwnjvnuz 633 1
// atl 637 1
// rwyfvzsopsuiqjnr 647 1
// eez 648 1
// fmwafhhgeyawnool 649 1
// c 637 1
// f 633 1
// ywzqaop 631 2
function hj19() {
  const rl = require('readline').createInterface(process.stdin, process.stdout);
  let name = [];
  let line = [];
  let num = [];
  let item, itemName, temp, isRepeat;
  rl.on('line', input => {
    item = input.split(' ');
    itemName = item[0].split('\\');
    temp = itemName[itemName.length - 1];
    temp = temp.length > 16 ? temp.slice(temp.length - 16) : temp;
    isRepeat = -1;
    for (let i = 0; i < name.length; i++) {
      if (name[i] == temp && line[i] == item[1]) isRepeat = i;
    }
    if (isRepeat == -1) {
      name.push(temp);
      line.push(item[1]);
      num.push(1);
    } else if (isRepeat != -1) {
      num[isRepeat]++;
    }
  }).on('close', () => {
    let len = name.length;
    for (let i = len > 8 ? len - 8 : 0; i < len; i++) {
      console.log(name[i] + ' ' + line[i] + ' ' + num[i])
    }
  })
}

// HJ20	密码验证合格程序	数组字符串	较难
// 题目描述
// 密码要求:
// 1.长度超过8位
// 2.包括大小写字母.数字.其它符号,以上四种至少三种
// 3.不能有相同长度大于2的子串重复
// 输入描述:
// 一组或多组长度超过2的字符串。每组占一行
// 输出描述:
// 如果符合要求输出：OK，否则输出NG
// 示例1
// 输入
// 021Abc9000
// 021Abc9Abc1
// 021ABC9000
// 021$bc9000
// 输出
// OK
// NG
// NG
// OK
function hj20(password) {
  let count = 0;
  if (password.length <= 8) {
    console.log('NG')
    return
  }
  if (/[a-z]/.test(password)) count++;
  if (/[A-Z]/.test(password)) count++;
  if (/[0-9]/.test(password)) count++;
  if (/\W/.test(password)) count++;
  if (count < 3) {
    console.log('NG')
    return
  }
  for (let i = 0; i < password.length - 6; i++) {
    for (let j = i + 3; j < password.length - 3; j++) {
      if (password.charAt(i) == password.charAt(j) && password.charAt(i + 1) == password.charAt(j + 1) && password
        .charAt(i + 2) == password.charAt(j + 2)) {
        console.log('NG')
        return
      }
    }
  }
  console.log('OK')
}