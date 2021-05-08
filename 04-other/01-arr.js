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
  for (let key in obj) {
    res.push(obj[key])
  }
  return res;
}

// 算法题「旋转数组」
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
// 示例 1：
// 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
// 输出: [5, 6, 7, 1, 2, 3, 4]
// 解释:
// 向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
// 向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
// 向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]

// 示例 2：
// 输入: [-1, -100, 3, 99] 和 k = 2
// 输出: [3, 99, -1, -100]
// 解释: 
// 向右旋转 1 步: [99, -1, -100, 3]
// 向右旋转 2 步: [3, 99, -1, -100]
function rotateArr(arr, k) {
  let len = arr.length;
  k = k % len;
  return arr.slice(len - k).concat(arr.slice(0, len - k));
}

// 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:
// 1. 必须在原数组上操作，不能拷贝额外的数组。
// 2. 尽量减少操作次数。
function moveZero(arr) {
  let index = 0;
  let len = arr.length;
  while (index < len) {
    if (arr[index] === 0) {
      arr.splice(index, 1);
      arr.push(0);
      len--;
    } else {
      index++;
    }
  }
  return arr;
}

// 两数之和
// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
// 示例：
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
function findTwoNum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map[diff] > -1) {
      return [map[diff], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
// 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))。
// 示例 1：
// nums1 = [1, 3]
// nums2 = [2]
// 中位数是 2.0

// 示例 2：
// nums1 = [1, 2]
// nums2 = [3, 4]
// 中位数是(2 + 3) / 2 = 2.5
function findMedianNum(nums1, nums2) {
  let nums = [];
  let num1 = 0, num2 = 0;
  while (num1 < nums1.length && num2 < nums2.length) {
    if (nums1[num1] < nums2[num2]) {
      nums.push(nums1[num1++]);
    } else {
      nums.push(nums2[num2++]);
    }
  }
  nums = nums.concat(nums1.slice(num1), nums2.slice(num2));
  let median;
  if (nums.length % 2) {
    median = nums[Math.floor(nums.length % 2)]
  } else {
    let m = nums.length / 2;
    median = (nums[m] + nums[m - 1]) / 2;
  }
  return median;
}

// 考虑到性能问题，如何快速从一个巨大的数组中随机获取部分元素
// 比如有个数组有100K个元素，从中不重复随机选取10K个元素。
// 1、
// 可采用统计学中随机采样点的选取进行随机选取，
// 如在0-50之间生成五个随机数，然后依次将每个随机数进行加50进行取值，性能应该是最好的。

// 2、
// 快速生成一个巨大数组 使用Array.from()
// 通过Set特性，存放随机数，这里需要注意的是，没有就add，有就递归，
// 总之要保证遍历的每一项都要找到一个唯一随机值，如果有就跳过就不能保证最后能获取到10k个值。
const randomNumHandle = (len, randomNum) => {
  // 快速生成一个有len个元素的巨大数组
  let originArr = Array.from({ length: len }, (v, i) => i);
  let resultSet = new Set()

  // 快速选取randomNum个元素
  for (let i = 0; i < randomNum; i++) {
    addNum(resultSet, originArr)
  }
  function addNum() {
    let luckDog = Math.floor(Math.random() * (len - 1))
    if (!resultSet.has(originArr[luckDog])) {
      resultSet.add(originArr[luckDog])
    } else {
      addNum()
    }
  }
  return Array.from(resultSet)
}

/* 3、洗牌算法：
    1.生成一个0 - arr.length 的随机数
    2.交换该随机数位置元素和数组的最后一个元素，并把该随机位置的元素放入结果数组
    3.生成一个0 - arr.length - 1 的随机数
    4.交换该随机数位置元素和数组的倒数第二个元素，并把该随机位置的元素放入结果数组
    依次类推，直至取完所需的10k个元素
*/
function shuffle(arr, size) {
  let result = []
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * (arr.length - i))
    const item = arr[randomIndex]
    result.push(item)
    arr[randomIndex] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = item
  }
  return result
}

// 4、采用分治法，由于每一组只抽中一个，所以不存在重复的情况。
/*
* 用于将巨大的数组平均分成多个数组
* 比如：100k个数中抽取10k，每个被抽中的概率为1/10。那么可以均分成10k个数组，每组10个数抽中1 
* 个。以次类推，如果抽取1k个的话，每组100个抽中1个。
*/


// 根据以下要求，写一个数组去重函数
// 如传入的数组元素为[123, "meili", "123", "mogu", 123]，则输出：[123, "meili", "123", "mogu"]
// 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]，则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
// 如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]，则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]
// 判断对象
function isObject(data) {
  return toString.call(data) === '[object Object]'
}
// 对象重整 对key进行排序
function parseObj(obj) {
  let keys = Object.keys(obj).sort()
  let newObj = {}
  for (let key of keys) {
    obj[key] = isObj(obj[key]) ? parseObj(obj[key]) : obj[key]
    newObj[key] = obj[key]
  }
  return newObj;
}