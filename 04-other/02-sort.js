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
// console.log(buddleSort1(buddleArr))

// 扑克牌问题
// 有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；
// 最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；
// 问：原来那堆牌的顺序，用函数实现
// 放牌函数
function poker(arr) {
  let i = 1;
  let res = [];
  while (arr.length) {
    if (i % 2) {
      // 将牌堆第一张放到桌子上
      res.push(arr.shift());
    } else {
      // 再将接下来的牌堆的第一张放到牌底
      arr.push(arr.shift());
    }
    i++;
  }
  return res;
}
// 复原函数
function reserve(arr) {
  let i = 1;
  let res = [];
  while (arr.length) {
    if (i % 2) {
      res.unshift(arr.pop());
    } else {
      res.unshift(res.pop());
    }
    i++;
  }
  return res;
}
let pokerArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let reserveArr = reserve(pokerArr);
// console.log(reserveArr);
// let newArr = poker(reserveArr);
// console.log(newArr);