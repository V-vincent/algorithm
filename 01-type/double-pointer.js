// 双指针解法

// 11. 盛最多水的容器 难度 中等
// https://leetcode-cn.com/problems/container-with-most-water/
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器。
// 示例 1：
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// 示例 2：
// 输入：height = [1,1]
// 输出：1

// 示例 3：
// 输入：height = [4,3,2,1,4]
// 输出：16

// 示例 4：
// 输入：height = [1,2,1]
// 输出：2

// 提示：
// n = height.length
// 2 <= n <= 3 * 104
// 0 <= height[i] <= 3 * 104
var maxArea = function (height) {
  if (height.length <= 1) return 0;
  let [left, right] = [0, height.length - 1];
  let max = 0;
  while (left < right) {
    let min = height[left] > height[right] ? height[right--] : height[left++];
    let area = min * (right - left + 1); // +1 是因为上面 right-- 或 left++
    max = Math.max(max, area);
  }
  return max;
};

// 283. 移动零
// https://leetcode-cn.com/problems/move-zeroes/
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
var moveZeroes = function (nums) {
  let [left, right] = [0, 0];
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
};