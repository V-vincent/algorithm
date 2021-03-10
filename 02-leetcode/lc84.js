// LeetCode84. 柱状图中最大的矩形
// 难度 困难
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
// 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

// 示例:
// 输入: [2,1,5,6,2,3]
// 输出: 10

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
    while (left > 0 && heights[left] >= heights[i]) {
      left--;
    }
    while (right < heights.length && heights[right] >= heights[i]) {
      right++;
    }
    max = Math.max(max, heights[i] * (right - left - 1));
    // console.log(i, left, right, max);
  }
  return max;
};
largestRectangleArea(heights);
largestRectangleArea(h1);
largestRectangleArea(h2);
// 。。。超出时间限制了

