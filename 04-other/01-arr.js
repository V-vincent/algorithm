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
// console.log(concatArr(arr1, arr2));

// 使用迭代的方式实现 flatten 函数
let flattenArr = [1, 2, 3, [4, 5], [6, [7, [8]]]];
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
// console.log(flatten1(flattenArr));

// 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？
// 时间复杂度：O(n^2)
let buddleArr = [5, 2, 7, 8, 1, 3, 6];
// 实现1：
function buddleSort(arr) {
  let len = arr.length;
  while (len > 1) {
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    len--;
  }
  return arr;
}
// 优化：
function buddleSort1(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // 从左到右排
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    right--;
    // 从右往左排
    for (let i = right; i > left; --i) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    }
    left++;
  }
  return arr;
}
console.log(buddleSort1(buddleArr))