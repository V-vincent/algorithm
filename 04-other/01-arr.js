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

// 给定两个数组，写一个方法来计算它们的交集
// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
// 疑问？求数组的交集还是元素的交集？
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
// 数组的交集
// function getArrIntersect(nums1, nums2) {
//   let res = [];
//   if (!nums1.length || !nums2.length) return res;
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] == nums2[j]) {
//         return findSameVal(i, j, nums1, nums2)
//       }
//     }
//   }
//   return res;
// }
// // 按顺序对比，相等加入，不相等退出循环
// function findSameVal(cur1, cur2, nums1, nums2) {
//   let temp = [];
//   while (cur1 < nums1.length && cur2 < nums2.length && nums1[cur1] === nums2[cur2]) {
//     temp.push(nums1[cur1])
//     cur1++;
//     cur2++;
//   }
//   return temp;
// }

// 元素的交集
function getArrIntersect(nums1, nums2) {
  if (!nums1.length || !nums2.length) return [];
  let res = [];
  let map = {};
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      map[nums1[i]]++;
    } else {
      map[nums1[i]] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] > 0) {
      res.push(nums2[i]);
      map[nums2[i]]--;
    }
  }
  return res;
}
console.log(getArrIntersect(nums1, nums2))

// 数组随机排列
// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
// 将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
// 随机生成，分割层级？
function randomNewArr() {
  // 生成10个随机数的数组
  let arr = Array.from({ length: 10 }, (v) => { return parseInt(Math.random() * 30) });
  // 排序去重
  let temp = Array.from(new Set(arr)).sort((a, b) => a - b);
  // 分割层级
  let obj = {};
  for (let i = 0; i < temp.length; i++) {
    let key = Math.floor(temp[i] / 10);
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(temp[i]);
  }
  // 输出数组
  let res = [];
  for(let key in obj) {
    res.push(obj[key])
  }
  return res;
}