// 621. 任务调度器 难度中等
// https://leetcode-cn.com/problems/task-scheduler/
// 给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。
// 然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
// 你需要计算完成所有任务所需要的 最短时间 。

// 示例 1：
// 输入：tasks = ["A","A","A","B","B","B"], n = 2
// 输出：8
// 解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B
//      在本示例中，两个相同类型任务之间必须间隔长度为 n = 2 的冷却时间，而执行一个任务只需要一个单位时间，所以中间出现了（待命）状态。 

//      示例 2：
// 输入：tasks = ["A","A","A","B","B","B"], n = 0
// 输出：6
// 解释：在这种情况下，任何大小为 6 的排列都可以满足要求，因为 n = 0
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// 诸如此类

// 示例 3：
// 输入：tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// 输出：16
// 解释：一种可能的解决方案是：
//      A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> (待命) -> (待命) -> A -> (待命) -> (待命) -> A

// 提示：
// 1 <= task.length <= 104
// tasks[i] 是大写英文字母
// n 的取值范围为 [0, 100]
// 贪心算法
// 解题思路
// 哈希表键名：字母的Unicode编码 - 65 。键值：[剩余任务数，剩余冷却时间]
// 贪心策略：找剩余任务数最多 且 剩余冷却时间 = 0 任务
// 找到：已完成任务 + 1 总时间 + 1
//      剩余任务数 = 1：删除任务
//      剩余任务数 > 1：剩余任务数 - 1，剩余冷却时间 = 冷却时间
// 没找到：挂起 总时间 + 1
var leastInterval = function (tasks, n, finish = 0, res = 0) {
  let len = tasks.length;
  if (n == 0) return len;
  let temp = Array(26);
  for (let i = 0; i < len; i++) {
    temp[item = tasks[i].charCodeAt() - 65] ? temp[item][0]++ : temp[item] = [1, 0]
  }
  while (finish < len) {
    let [max, sel] = [0, -1];
    temp.forEach((item, index) => item[1] ? item[1]-- : item[0] > max && (max = item[0], sel = index))
    if (sel !== -1) {
      if (temp[sel][0] == 1) delete temp[sel];
      else temp[sel][0]--, temp[sel][1] = n;
      finish++;
    }
    res++;
  }
  return res;
};

// 找规律
// 如：['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C'], n = 2
// A B C
// A B C
// A B
// sum = (max - 1) * (n + 1) + maxCount
// max = A 的次数(任务出现最多的次数)；
// maxCount = 和 A 相同最多次数的个数，这里A、B都是3次
// 然后和任务总长度比较
var leastInterval = function (tasks, n) {
  let len = tasks.length;
  if (n == 0) return len;
  let obj = {};
  for (let i = 0; i < len; i++) {
    let item = tasks[i];
    if (obj[item]) obj[item]++;
    else obj[item] = 1;
  }
  let vals = Object.values(obj);
  vals.sort((a, b) => b - a);
  let max = vals[0];
  let maxCount = 1;
  for (let i = 1; i < vals.length; i++) {
    if (vals[i] == max) maxCount++;
    else break;
  }
  return Math.max((max - 1) * (n + 1) + maxCount, len);
};
