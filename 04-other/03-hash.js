// 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc'
function wordNegation(word) {
  let res = ''
  for (let i = 0; i < word.length; i++) {
    if (/[A-Z]/g.test(word[i])) {
      res += word[i].toLowerCase();
    } else if (/[a-z]/g.test(word[i])) {
      res += word[i].toUpperCase();
    } else {
      res += word[i];
    }
  }
  return res;
}
function wordNegation1(word) {
  let res = ''
  for (let i = 0; i < word.length; i++) {
    res += word[i] === word[i].toLowerCase() ? word[i].toUpperCase() : word[i].toLowerCase();
  }
  return res;
}

// 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。
function find(S, T) {
  let n = S.length;
  let m = T.length;
  if (n < m) return -1;
  for (let i = 0; i < n - m; i++) {
    if (S.slice(i, i + m) === T) return i;
  }
  return -1;
}
// search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串
let find1 = (S, T) => S.search(T);

// 打印出 1 - 10000 之间的所有对称数
function getSymmetryNum() {
  return [...Array(10000).keys()].filter(item => {
    return item > 10 && item === Number(item.toString().split('').reverse().join(''));
  })
}


// 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。
// 要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
function dfsReserve(num) {
  let num1 = num / 10;
  let num2 = num % 10;
  if (num1 < 1) {
    return num2;
  } else {
    let temp = Math.floor(num1);
    return `${num2}${dfsReserve(temp)}`
  }
}

// 找出字符串中连续出现最多的字符和个数
// 'abcaakjbb' => {'a':2,'b':2}
// 'abbkejsbcccwqaa' => {'c':3}
// 1、顺序遍历
function findMoreStr(str) {
  let res = {};
  let cur = str[0];
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    let item = str[i];
    if (item == cur) {
      count++;
    } else {
      count = 1;
      cur = item;
    }
    if (count > maxCount) {
      res = {};
      res[item] = count;
      maxCount = count;
    }
    if (count == maxCount) {
      res[item] = count;
    }
  }
  return res;
}
// 2、正则匹配
function findMoreStr(str) {
  // let arr = str.match(/(\w)\1*/g);
  let arr = str.match(/(\w)\1+/g);
  let maxLen = Math.max(...arr.map(item => item.length));
  let res = {};
  arr.map(item => {
    if (item.length === maxLen) {
      res[item[0]] = maxLen;
    }
  })
  return res;
}
console.log(findMoreStr('abbkejsbcccwqaa'))

// 统计 1 ~ n 整数中出现 1 的次数。
// 统计每个位数上面1出现的次数
function statisticsAppearNum(num) {
  let res = 0;
  // i表示位数，个位数、十位数、百位数...
  for (let i = 1; i <= num; i = i * 10) {
    let cur = Math.floor((num / i) % 10); // 当前位数的数字，如123，个位数是3，十位数是2，百位数是1；
    let high = Math.floor(num / (i * 10)); // 高位部分，如123，个位数时是12，十位数时是1，百位数时是0；
    let low = num % i; // 低位部分，如123，个位数时是0，十位数时是2，百位数时是23；
    // 根据当前位数的不同来判断，分别是0，1，>1三种情况
    if (cur === 0) {
      // 如120，个位数是0时，则个位数的1有1,11,21,31,...,111；共12 * 1个1；
      // 如202，十位数是0时，则十位数的1有10~19,110~119，共2 * 10 个1；
      // 如2011，百位数0时，则百位数的1有100~199,1100~1199，共2 * 100个1；
      res += high * i;
    } else if (cur === 1) {
      // 如121，个位数是1时，则个位数的1有1,11,21,31,...,111,121；共12 * 1 + 1个1；
      // 如212，十位数是1时，则十位数的1有10~19,110~119,210~212，共2 * 10 + 2 + 1个1；
      // 如2111，百位数是1时，则百位数的1有100~199,1100~1199，2100~2111，共2 * 100 + 11 + 1个1；
      res += high * i + low + 1;
    } else {
      // 如123，个位数>1时，则个位数的1有1,11,21,31,...,111,121；共(12 + 1) * 1个1；
      // 如222，十位数>1时，则十位数的1有10~19,110~119,210~219，共(2 + 1) * 10个1；
      // 如2311，百位数>1时，则百位数的1有100~199,1100~1199，2100~2199，共(2 + 1) * 100个1；
      res += (high + 1) * i;
    }
  }
  return res;
}