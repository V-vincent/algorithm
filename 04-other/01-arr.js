// 两个数组合并成一个数组
// 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
let arr2 = ['A', 'B', 'C', 'D'];
function concatArr(arr1, arr2) {
  let res = [...arr1];
  let curIndex = 0;
  for (let i = 0; i < arr2.length; i++) {
    let RE = new RegExp(arr2[i]);
    while (curIndex < res.length) {
      ++curIndex;
      if (!RE.test(res[curIndex])) {
        // 数组插入操作
        res.splice(curIndex, 0, arr2[i]);
        break;
      }
    }
  }
  return res;
}
console.log(concatArr(arr1, arr2));

// 使用迭代的方式实现 flatten 函数
let arr = [1, 2, 3, [4, 5], [6, [7, [8]]]];
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr;
}
// 递归实现
function flatten1(arr) {
  let arrs = [];
  arr.map(item => {
    if (Array.isArray(item)) {
      arrs.push(...flatten(item))
    } else {
      arrs.push(item)
    }
  })
  return arrs
}
console.log(flatten1(arr));