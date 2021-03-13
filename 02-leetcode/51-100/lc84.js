// LeetCode84. 柱状图中最大的矩形
// 难度 困难
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
// 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

// 示例:
// 输入: [2,1,5,6,2,3]
// 输出: 10

// 思路：
// 从某一点开始，往左右两边找，比当前元素小就终止
let heights = [2, 1, 5, 6, 2, 3];
let h1 = [1];
let h2 = [1, 1, 1];
var largestRectangleArea = function (heights) {
  if (heights.length <= 0) return 0;
  let max = 0;
  // 加这一行：考虑到只有一个元素([1])，或者所有元素都相同时([1, 1, 1])会出错
  heights = [0, ...heights, 0];
  for (let i = 0; i < heights.length; i++) {
    let left = i, right = i;
    // 往左找，找到第一个小于i的
    while (left > 0 && heights[left] >= heights[i]) {
      left--;
    }
    // 往右找，找到第一个小于i的
    while (right < heights.length && heights[right] >= heights[i]) {
      right++;
    }
    max = Math.max(max, heights[i] * (right - left - 1));
    // console.log(i, left, right, max);
  }
  return max;
};
// largestRectangleArea(heights);
// largestRectangleArea(h1);
// largestRectangleArea(h2);
// 。。。超出时间限制了

// 单调栈：栈中元素按递增顺序或者递减顺序排列；最大好处就是时间复杂度是线性的；每个元素遍历一次!
// 木桶原理，找到最短的那块木板
let heights1 = [2, 1, 5, 6, 2, 3];
var largestRectangleArea = function (heights) {
  if (heights.length <= 0) return 0;
  let max = 0;
  // 加这一行：考虑到只有一个元素([1])，或者所有元素都相同时([1, 1, 1])会出错
  heights = [0, ...heights, 0];
  console.log(heights);
  // 用栈来记录数组元素的下标
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    // 当前元素和栈顶元素比较，如果当前元素小于栈顶元素，则栈顶元素出栈
    // 并求以出栈元素为中心时，它的最大面积
    while (heights[i] < heights[stack[stack.length - 1]]) {
      let index = stack.pop(); // 取出栈顶元素
      // 以出栈元素为中心求面积：当前元素（i）与栈顶元素（stack[stack.length - 1]）之间都是大于等于栈顶元素的值
      // 换句话说就是：当前元素（i）和栈顶元素（stack[stack.length - 1]）是左右两边第一个比出栈元素（index）小的值，
      // 即i就是right，stack[stack.length - 1]就是left
      let tempArea = heights[index] * (i - stack[stack.length - 1] - 1);
      console.log(`当前元素：${i}。出栈元素：下标：${index}，值：${heights[index]}，面积：${tempArea}`);
      max = Math.max(max, tempArea);
    }
    // 当前元素大于栈顶元素或栈没有元素时，入栈
    stack.push(i);
    console.log('下标栈stack：', stack);
  }
  return max;
};
largestRectangleArea(heights);