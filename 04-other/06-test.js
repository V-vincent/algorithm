// 有N个乒乓球，把这些乒乓球分别放入若干个袋子，用这些袋子表示 1 - N 的任何一个数，问最少需要几个袋子？ 
// 函数输入为 n 个乒乓球，输出为最少需要的袋子数。可给出思路或伪代码。
// （tips：若输入是5个乒乓球，那么最少需要3个袋子，分别装1，2，2个球，即可用这三个袋子表示 5 以内的任何一个数；
// 若输入10个乒乓球，则需要四个袋子，分别装1，2，4，3个球。）

// 1:  1
// 2:  1 1
// 3:  1 2
// 4:  1 2 1
// 5:  1 2 2
// 6:  1 2 3
// 7:  1 2 4
// 8:  1 2 4 1
// 9:  1 2 4 2
// 10: 1 2 4 3
// 11: 1 2 4 4
// 12: 1 2 4 5
// 13: 1 2 4 6
// 14: 1 2 4 7
// 15: 1 2 4 8
// 16: 1 2 4 8 1
// ...
// 30: 1 2 4 8 15
// 31: 1 2 4 8 16
// 32: 1 2 4 8 16 1
// ...
// 63: 1 2 4 8 16 32
// 64: 1 2 4 8 16 32 1
function getLeastBags(n) {
  let res = [];
  let map = new Map();
  map.set(0, 0);
  while (map.get(res.length) < n) {
    let oldMax = map.get(res.length);
    let nextMax = oldMax + 1;
    res.push(nextMax);
    map.set(res.length, nextMax + oldMax);
  }
  res.pop();
  res.push(n - map.get(res.length));
  console.log(res);
  return res.length;
}
// console.log(getLeastBags(1));
function getLeastBags2(n) {
  if (n <= 0) return 0;
  let res = [1];
  let map = new Map();
  map.set(0, 0);
  map.set(1, 1);
  while (map.get(res.length) < n) {
    let oldMax = map.get(res.length);
    res.push(res[res.length - 1] * 2);
    map.set(res.length, oldMax + res[res.length - 1]);
  }
  res.pop();
  res.push(n - map.get(res.length));
  console.log(res);
  return res.length;
}
console.log(getLeastBags2(10));