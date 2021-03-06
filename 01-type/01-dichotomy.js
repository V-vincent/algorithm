// 二分法
// 一种在有序数组中查找某一特定元素的搜索算法，搜索过程从数组的中间元素开始
// 步骤
// 1、 如果中间元素正好是要查找的元素，则搜索过程结束
// 2、如果特定元素大于或者小于中间元素，则在数组大于或者小于中间的元素的那一半中查找，而且跟开始一样从中间元素开始比较
// 3、如果在某一步骤数组为空，则代表找不到
// 先决条件：有序数组
// 表达式使用 L + (R - L)/2 更合适
let arr = [1, 2, 3, 4, 5, 6, 6, 6, 8];
// 标准二分法
function binarySearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + parseInt((right - left) / 2)
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] > key) {
      right = mid - 1;
    } else if (arr[mid] < key) {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 6));
// 查找第一个或最后一个与target相等的元素
// 查找最后一个小于等于target/第一个大于等于target的元素
function getEqualKey(arr, target) {
  let option = binarySearch(arr, target);
  if (option < 0) return [-1, -1];
  else {
    let left = option - 1,
      right = option + 1;
    while (left >= 0 && arr[left] == target) left--;
    while (right < arr.length && arr[right] == target) right++;
    return [left + 1, right - 1];
  }
}
console.log(getEqualKey(arr, 6));
// 查找最后一个小于target/第一个大于target的元素
function getAdjoinKey(arr, target) {
  let option = binarySearch(arr, target);
  if (option < 0) return [-1, -1];
  else {
    let left = option - 1,
      right = option + 1;
    while (left >= 0 && arr[left] == target) left--;
    while (right < arr.length && arr[right] == target) right++;
    if (right >= arr.length) right = -1;
    return [left, right];
  }
}
console.log(getAdjoinKey(arr, 6));
// 数组的旋转：[4, 5, 6, 1, 2, 3]; 局部有序
let arr1 = [4, 5, 6, 1, 2, 3];

function binaryPartSearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  while (left != right) {
    let mid = left + parseInt((right - left) / 2);
    if (arr[mid] == key) return mid; // 中位数相等直接返回
    // 分两种情况：1.中分位左边都是有序的 2.左边有一部分是局部有序的
    if (arr[left] < arr[mid]) {
      // 数组左边第一位小于key并且中分位大于key，则key在左边，把right重新赋值
      // 否则，key在右边，把left重新赋值
      if (arr[left] <= key && arr[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 局部有序
      // 数组最后一位的值大于key，并且中分位小于key，则key在右边，把left重新赋值
      if (arr[right] >= key && arr[mid] < key) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  if (arr[left] == key) return left;
  return -1;
}
console.log(arr1, binaryPartSearch(arr1, 2));