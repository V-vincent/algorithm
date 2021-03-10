// LeetCode49. 字母异位词分组
// 难度 中等
// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 示例:
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：
// 所有输入均为小写字母。
// 不考虑答案输出的顺序。

// 思路，利用Map的唯一性，将字母排序，如果在Map中不存在，则将排序后的字母加进Map中
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].split('').sort().join('');
    if(map.get(temp)) {
      map.get(temp).push(strs[i])
    } else {
      map.set(temp, [strs[i]])
    }
  }
  return [...map.values()];
};
groupAnagrams(strs)