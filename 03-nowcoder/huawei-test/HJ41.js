// HJ41	称砝码	字符串	较难
// 题目描述
// 现有一组砝码，重量互不相等，分别为m1,m2,m3…mn；
// 每种砝码对应的数量为x1,x2,x3...xn。现在要用这些砝码去称物体的重量(放在同一侧)，问能称出多少种不同的重量。

// 注：

// 称重重量包括0

// 输入描述:
// 输入包含多组测试数据。

// 对于每组测试数据：

// 第一行：n --- 砝码数(范围[1,10])

// 第二行：m1 m2 m3 ... mn --- 每个砝码的重量(范围[1,2000])

// 第三行：x1 x2 x3 .... xn --- 每个砝码的数量(范围[1,6])
// 输出描述:
// 利用给定的砝码可以称出的不同的重量数

// 示例1
// 输入
// 2
// 1 2
// 2 1
// 输出
// 5
function hj41() {
  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);

  let lines = [];
  rl.on('line', line => {
    lines.push(line);
    if (lines.length === 3) {
      getDiffWeight(lines);
      lines = [];
    }
  })

  function getDiffWeight(lines) {
    // 可以称出的重量
    let set = new Set();
    let len = parseInt(lines[0]);
    let weights = lines[1].split(' ').map(Number);
    let nums = lines[2].split(' ').map(Number);
    for (let i = 0; i < nums[0] + 1; i++) {
      set.add(weights[0] * i);
    }
    for (let i = 1; i < len; i++) {
      let temp = [];
      for (let key of set) {
        for (let j = 0; j < nums[i]; j++) {
          temp.push(key + weights[i] * (j + 1));
        }
      }
      for (let n = 0; n < temp.length; n++) {
        set.add(temp[n]);
      }
    }
    console.log(set.size);
  }
}