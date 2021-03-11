// LeetCode42. 接雨水
// 难度 困难
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 示例 1：
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

// 示例 2：
// 输入：height = [4,2,0,3,2,5]
// 输出：9

// 提示：
// n == height.length
// 0 <= n <= 3 * 104
// 0 <= height[i] <= 105
// 单调栈：递减顺序的栈
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let h1 = [4, 2, 0, 3, 2, 5];

// 可以接雨水，它左右两边都得有比它高的柱子
// 它能存的水，取决于它左右两边的最大值中较小的一个 (Math.min(left, right) - height[i])  * 个数
// 以当前元素为中心，找到两边都有比它大的元素，然后（第一个大的元素-当前元素）* 中间元素的个数

// trap1(h1);
var trap = function (height) {
  if (height.length <= 2) return 0;
  let water = 0;
  let stack = [];
  // console.log(height);
  for (let i = 0; i < height.length; i++) {
    // 当前元素如果大于栈顶元素，则栈顶元素出栈，判断是否能接雨水
    while (height[i] > height[stack[stack.length - 1]]) {
      let index = stack.pop();
      // 限制条件：栈为空即左边没有柱子了，不能存水；两个柱子高度相同也不能存水
      if (stack.length <= 0 || height[index] === height[stack[stack.length - 1]]) continue;
      // 能存的水，取决于它左右两边的最大值中较小的一个
      let min = Math.min(height[i], height[stack[stack.length - 1]]);
      let temp = (min - height[index]) * (i - stack[stack.length - 1] - 1);
      water += temp;
      // console.log(`第${stack[stack.length - 1] + 1}个柱子到第${i + 1}个柱子之间存储的水：${temp}`);
    }
    stack.push(i);
    // console.log('下标栈:', stack);
  }
  return water;
};
console.log(trap(height));
// console.log(trap(h1));

// 双指针求解
// 看其它题解又得了一个双指针的解法
var trap = function (height) {
  let sum = 0;
  let left_max = 0;
  let right_max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    if (height[left] < height[right]) {
      left_max = Math.max(left_max, height[left]);
      sum += left_max - height[left];
      left++;
    } else {
      right_max = Math.max(right_max, height[right]);
      sum += right_max - height[right];
      right--;
    }
  }
  return sum;
};
