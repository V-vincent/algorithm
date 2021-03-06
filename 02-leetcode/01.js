// 对字符串中的所有单词进行倒排
function reverseOrder(input) {
  let str = input.replace(/[^a-zA-Z]/g, ' ').trim();
  let arr = str.split(' ').filter(item => {
    return item != ''
  });
  console.log(arr.reverse().join(' '))
}

// 字符串合并转换
function transformStr(input) {
  let arr = input.replace(' ', '').split('');
  let len = arr.length;
  while (len > 2) {
    for (let i = 0; i < len - 2; i++) {
      if (arr[i] > arr[i + 2]) {
        swapData(arr, i, i + 2);
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

// 最长回文子串
function getMaxString(input) {
  let res = '';
  for (let i = 0; i < input.length - 1; i++) {
    let odd = getPlalindrome(input, i, i);
    let even = getPlalindrome(input, i, i + 1);
    let temp = odd.length > even.length ? odd : even;
    res = temp.length > res.length ? temp : res;
  }
  console.log(res.length);
}
// 找到回文子串
function getPlalindrome(str, left, right) {
  while (left >= 0 && right < str.length && str[left] == str[right]) {
    left--;
    right++;
  }
  return str.slice(left + 1, right);
}

// 输出转换成10进制的IP地址
function ipToNumber(input) {
  let num = ''
  let arr = input.split('.').map(item => {
    num += parseInt(item).toString(2).padStart(8, '0')
  })
  console.log(parseInt(num, 2));
}
// 输出转换后的IP地址
function numberToIp(input) {
  let num = parseInt(input).toString(2).padStart(32, '0');
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(parseInt(num.substr(i * 8, 8), 2));
  }
  console.log(arr.join('.'))
}

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