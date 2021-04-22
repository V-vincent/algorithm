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