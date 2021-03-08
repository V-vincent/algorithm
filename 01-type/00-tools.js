// 判断素数
function isPrimeNumber(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// 打印
function log() {
  return console.log.apply(console, arguments)
}
// 检查是否是数组
function checkArray(arr) {
  return Array.isArray(arr);
}
// 交换数据
function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}