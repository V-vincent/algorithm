// 匈牙利算法
// 二分图匹配，边的集合

// 牛客网素数伴侣问题
let input = '2 5 6 13';
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
getMaxPartner(input);