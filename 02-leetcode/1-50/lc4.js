// 4. 寻找两个正序数组的中位数
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 示例 1：
// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2

// 示例 2：
// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

// 示例 3：
// 输入：nums1 = [0,0], nums2 = [0,0]
// 输出：0.00000

// 示例 4：
// 输入：nums1 = [], nums2 = [1]
// 输出：1.00000

// 示例 5：
// 输入：nums1 = [2], nums2 = []
// 输出：2.00000


// 提示：
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
var findMedianSortedArrays = function (nums1, nums2) {
  let res = [...nums1, ...nums2].sort((a, b) => a - b);
  if (res.length % 2 === 0) {
    return (res[res.length / 2] + res[res.length / 2 - 1]) / 2;
  } else {
    return res[Math.floor(res.length / 2)]
  }
};

// 空间复杂度为 O(1)
// 双指针
// [1, 2, 3, 5] [2, 3, 4, 6]
var findMedianSortedArrays = function (nums1, nums2) {
  let len = nums1.length + nums2.length;
  let [index1, index2, preVal, curVal] = [0, 0, -1, -1];
  let mid = Math.floor(len / 2);
  for (let i = 0; i <= mid; i++) {
    preVal = curVal;
    if (index1 >= nums1.length || nums1[index1] > nums2[index2]) {
      curVal = nums2[index2++];
    } else {
      curVal = nums1[index1++];
    }
  }
  return len % 2 === 0 ? (preVal + curVal) / 2 : curVal;
}
// console.log(findMedianSortedArrays([1, 2], [3, 4]))


// 面试时想到的方法
const getMid = (arr1, arr2) => {
  let arr = merge(arr1, arr2);
  let res = null;
  let mid = arr.length % 2;
  if (mid === 0) {
    res = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  } else {
    res = arr[Math.floor(arr.length / 2)]
  }
  return res;
}
const merge = (arr1, arr2) => {
  let res = [];
  let [index1, index2] = [0, 0];
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] > arr2[index2]) {
      res.push(arr2[index2++])
    } else {
      res.push(arr1[index1++])
    }
  }
  res = res.concat(...arr1.slice(index1), ...arr2.slice(index2));
  return res;
}

// 第k小数
// 如果总数是奇数，那么就是第k小数
// 如果总数是偶数，那么就是第k小数和第k-1小数的和除以2
// [1, 2, 3] [4, 5, 6, 7]

// var findMedianSortedArrays = (nums1, nums2) => {
//   let len = nums1.length + nums2.length;
//   let k = Math.floor(len / 2);
//   let [preVal, curVal] = [0, 0];
//   while (k > 0) {
//     preVal = curVal;
//     let mid = Math.floor(k / 2);
//     if (nums1[mid] < nums2[mid]) {
//       nums1.slice(mid);
//       curVal = nums2[mid];
//     } else {
//       nums2.slice(mid);
//       curVal = nums1[mid];
//     }
//     console.log(preVal, curVal);
//     k = k - mid - 1;
//   }
//   return len % 2 === 0 ? (preVal + curVal) / 2 : curVal;
// }
// console.log(findMedianSortedArrays([1, 2, 3] [4, 5, 6, 7]))

// 二分法
var findMedianSortedArrays = function (nums1, nums2) {
  // nums1长度比nums2小
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let m = nums1.length;
  let n = nums2.length;
  // 在0～m中查找
  let left = 0;
  let right = m;

  // median1：前一部分的最大值
  // median2：后一部分的最小值
  let median1 = 0;
  let median2 = 0;

  while (left <= right) {
    // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
    // 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1]
    const i = left + Math.floor((right - left) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    const minRight1 = i === m ? Infinity : nums1[i];
    
    const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    const minRight2 = j === n ? Infinity : nums2[j];

    if (maxLeft1 <= minRight2) {
      median1 = Math.max(maxLeft1, maxLeft2);
      median2 = Math.min(minRight1, minRight2);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }
  return (m + n) % 2 == 0 ? (median1 + median2) / 2 : median1;
};