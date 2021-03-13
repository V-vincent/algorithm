// HJ36	字符串加密	字符串	中等
// 题目描述
// 有一种技巧可以对数据进行加密，它使用一个单词作为它的密匙。下面是它的工作原理：首先，选择一个单词作为密匙，如TRAILBLAZERS。如果单词中包含有重复的字母，只保留第1个，其余几个丢弃。现在，修改过的那个单词属于字母表的下面，如下所示：

// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

// T R A I L B Z E S C D F G H J K M N O P Q U V W X Y

// 上面其他用字母表中剩余的字母填充完整。在对信息进行加密时，信息中的每个字母被固定于顶上那行，并用下面那行的对应字母一一取代原文的字母(字母字符的大小写状态应该保留)。因此，使用这个密匙，Attack AT DAWN(黎明时攻击)就会被加密为Tpptad TP ITVH。

// 请实现下述接口，通过指定的密匙和明文得到密文。
// 本题有多组输入数据。

// 输入描述:
// 先输入key和要加密的字符串

// 输出描述:
// 返回加密后的字符串

// 示例1
// 输入
// nihao
// ni
// 输出
// le
function hj36() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  let n = 0;
  let rule = [];
  rl.on('line', input => {
    if (n == 0) {
      n++;
      rule = getRule(input);
    } else {
      n--;
      getPassword(input);
    }
  })
  // 获取加密规则
  // A-Z 65-90
  function getRule(input) {
    let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arr = Array.from(new Set((input.toUpperCase() + letter).split('')));
    return arr;
  }
  // 加密字符串
  function getPassword(input) {
    let str = '';
    let code, temp;
    for (let i = 0; i < input.length; i++) {
      code = input.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        str += rule[code - 65];
      } else {
        str += rule[code - 65 - 32].toLowerCase();
      }
    }
    console.log(str)
  }
}

// HJ37	统计每个月兔子的总数	排序	简单
// 题目描述
// 有一只兔子，从出生后第3个月起每个月都生一只兔子，小兔子长到第三个月后每个月又生一只兔子，假如兔子都不死，问每个月的兔子总数为多少？

// 本题有多组数据。

// 输入描述:
// 输入int型表示month

// 输出描述:
// 输出兔子总数int型

// 示例1
// 输入
// 9
// 输出
// 34
function hj37() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.on('line', input => {
    getRabbitNum(input)
  })

  function getRabbitNum(month) {
    month = parseInt(month);
    let num1 = 1,
      num2 = 0,
      temp = 0;
    for (let i = month - 1; i >= 0; i--) {
      temp += num2;
      num2 = num1;
      num1 = temp;
    }
    console.log(num1 + num2)
  }
}

// HJ38	求小球落地5次后所经历的路程和第5次反弹的高度	模拟	中等
// 题目描述
// 假设一个球从任意高度自由落下，每次落地后反跳回原高度的一半; 再落下, 求它在第5次落地时，共经历多少米?第5次反弹多高？

// 最后的误差判断是小数点6位

// 输入描述:
// 输入起始高度，int型

// 输出描述:
// 分别输出第5次落地时，共经过多少米第5次反弹多高

// 示例1
// 输入
// 1
// 输出
// 2.875
// 0.03125
function hj38() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.on('line', input => {
    getBallHeight(input);
  })

  function getBallHeight(height) {
    console.log(2.875 * height);
    console.log(0.03125 * height);
  }
}

// HJ39	判断两个IP是否属于同一子网	字符串模拟	较难
// 题目描述
// 子网掩码是用来判断任意两台计算机的IP地址是否属于同一子网络的根据。
// 子网掩码与IP地址结构相同，是32位二进制数，其中网络号部分全为“1”和主机号部分全为“0”。利用子网掩码可以判断两台主机是否中同一子网中。若两台主机的IP地址分别与它们的子网掩码相“与”后的结果相同，则说明这两台主机在同一子网中。

// 示例：
// I P 地址　 192.168.0.1
// 子网掩码　 255.255.255.0

// 转化为二进制进行运算：

// I P 地址　11010000.10101000.00000000.00000001
// 子网掩码　11111111.11111111.11111111.00000000

// AND运算
// 11000000.10101000.00000000.00000000

// 转化为十进制后为：
// 192.168.0.0

// I P 地址　 192.168.0.254
// 子网掩码　 255.255.255.0

// 转化为二进制进行运算：

// I P 地址　11010000.10101000.00000000.11111110
// 子网掩码　11111111.11111111.11111111.00000000

// AND运算
// 11000000.10101000.00000000.00000000

// 转化为十进制后为：
// 192.168.0.0

// 通过以上对两台计算机IP地址与子网掩码的AND运算后，我们可以看到它运算结果是一样的。均为192.168.0.0，所以这二台计算机可视为是同一子网络。

// 输入一个子网掩码以及两个ip地址，判断这两个ip地址是否是一个子网络。
// 若IP地址或子网掩码格式非法则输出1，若IP1与IP2属于同一子网络输出0，若IP1与IP2不属于同一子网络输出2。

// 输入描述:
// 输入子网掩码、两个ip地址

// 输出描述:
// 得到计算结果

// 示例1
// 输入
// 255.255.255.0
// 192.168.224.256
// 192.168.10.4
// 255.0.0.0
// 193.194.202.15
// 232.43.7.59
// 输出
// 1
// 2
function hj39() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  let lines = [];
  rl.on('line', line => {
    lines.push(line);
    if (lines.length === 3) {
      checkIpAndMask(lines);
      lines = [];
    }
  })

  function checkIpAndMask(lines) {
    let mask = lines[0].split('.');
    let ip1 = lines[1].split('.');
    let ip2 = lines[2].split('.');
    let temp, temp1, temp2;
    let amd1 = '',
      amd2 = '',
      tempM = '';
    for (let i = 0; i < 4; i++) {
      if (mask[i] < 0 || mask[i] > 255 || ip1[i] < 0 || ip1[i] > 255 || ip2[i] < 0 || ip2[i] > 255) {
        console.log(1);
        return;
      }
      temp = parseInt(mask[i]).toString(2).padStart(8, '0');
      tempM += temp;
      if (mask[i] == 0) {
        amd1 += '0';
        amd2 += '0';
      } else {
        temp = parseInt(mask[i]).toString(2).padStart(8, '0');
        temp1 = parseInt(ip1[i]).toString(2).padStart(8, '0');
        temp2 = parseInt(ip2[i]).toString(2).padStart(8, '0');
        amd1 += amd(temp, temp1);
        amd2 += amd(temp, temp2);
      }
    }
    if (/01/g.test(tempM)) {
      console.log(1);
      return
    }
    if (amd1 !== amd2) {
      console.log(2);
    } else {
      console.log(0);
    }
  }

  function amd(mask, ip) {
    let str = '';
    for (let i = 0; i < 8; i++) {
      if (mask[i] == '1' && ip[i] == '1') str += '1';
      else str += '0';
    }
    return parseInt(str, 2);
  }
}
// HJ40	输入一行字符，分别统计出包含英文字母、空格、数字和其它字符的个数	字符串	中等
// 题目描述
// 输入一行字符，分别统计出包含英文字母、空格、数字和其它字符的个数。

// 本题包含多组输入。

// 输入描述:
// 输入一行字符串，可以有空格

// 输出描述:
// 统计其中英文字符，空格字符，数字字符，其他字符的个数

// 示例1
// 输入
// 1qazxsw23 edcvfr45tgbn hy67uj m,ki89ol.\\/;p0-=\\][
// 输出
// 26
// 3
// 10
// 12
function hj40() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.on('line', line => {
    calcStrSum(line);
  })

  function calcStrSum(line) {
    let temp;
    let sum1 = 0,
      sum2 = 0,
      sum3 = 0,
      sum4 = 0;
    for (let i = 0; i < line.length; i++) {
      temp = line.charAt(i);
      if (/[a-zA-Z]/g.test(temp)) {
        sum1++;
      } else if (line[i] == ' ') {
        sum2++;
      } else if (/[0-9]/g.test(line[i])) {
        sum3++;
      } else {
        sum4++;
      }
    }
    console.log(sum1);
    console.log(sum2);
    console.log(sum3);
    console.log(sum4);
  }
}