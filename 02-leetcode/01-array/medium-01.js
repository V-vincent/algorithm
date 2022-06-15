// LeetCode数组中等难度题

// 15. 三数之和
// https://leetcode.cn/problems/3sum/
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 示例 2：
// 输入：nums = []
// 输出：[]

// 示例 3：
// 输入：nums = [0]
// 输出：[]

// 提示：
// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// 先排序，再左右向中间收拢，注意去重
var threeSum = function (nums) {
  let len = nums.length
  let res = []
  nums.sort((a, b) => a - b) // 先排序
  for (let i = 0; i < len - 2; i++) {
    // 如果当前值大于0则三数之和肯定大于0
    if (nums[i] > 0) return res
    // 去重
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let left = i + 1
    let right = len - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]])
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
      // 去重
      while (left > i + 1 && nums[left] == nums[left - 1]) left++
      while (right < len - 1 && nums[right] == nums[right + 1]) right--
    }
  }
  return res
};
