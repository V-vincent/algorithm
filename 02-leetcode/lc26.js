// LeetCode26.删除排序数组中的重复项

// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
// 难度：简单
// 示例 1:
// 给定数组 nums = [1,1,2],
// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
// 你不需要考虑数组中超出新长度后面的元素。
// 示例 2:
// 给定 nums = [0,0,1,1,1,2,2,3,3,4],
// 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
// 你不需要考虑数组中超出新长度后面的元素。


// 对比数组前后元素，重复的移除
var removeDuplicates = function (nums) {
  let len = nums.length
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
      len--;
    }
  }
  return len + 1;
};
// 双指针（快慢指针）：一开始，两个指针都指向第一个数字，如果两个指针指向的数字相同，则快指针向前走一步，
// 如果不同，则慢指针向前一步并设置为快指针指向的值
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j];
    }
  }
  // i是下标，数组长度需要+1
  return i + 1;
};
// 可以计算重复元素的个数，数组个数减去重复元素的个数就是新数组的长度了
var removeDuplicates = function (nums) {
  let repeat = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      repeat++;
    } else {
      nums[i + 1 - repeat] = nums[i + 1];
    }
  }
  return nums.length - repeat;
}
var arr = [1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr))