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