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