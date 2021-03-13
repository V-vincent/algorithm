// 121. 买卖股票的最佳时机
// 难度 简单
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 示例 1：

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
//  
// 提示：

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// 看题目要求，只有一次买入和一次卖出，最大利润取决于买入价格和卖出价格
// 可以假定第一天就买入（只是假设），如果第二天价格比第一天低，那再假定第二天买入，
// 做一个买入价格的迭代，对比下来，买入价格肯定是最低的
// 每一次假定都要计算利润，用当天的价格减去买入价格就是利润了，然后跟之前的利润对比，取大的那一个

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   if (prices.length <= 1) return 0;
//   let profit = 0; // 利润
//   let buy = prices[0]; // 买入价格
//   for (let i = 1; i < prices.length; i++) {
//     // 买入价格取价格小的那个
//     buy = Math.min(buy, prices[i]);
//     // 利润取大的那个
//     profit = Math.max(profit, prices[i] - buy);
//   }
//   return profit;
// };


// 122. 买卖股票的最佳时机 II
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
// 示例 2:

// 输入: [1,2,3,4,5]
// 输出: 4
// 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
//      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
// 示例 3:

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

// 提示：
// 1 <= prices.length <= 3 * 10 ^ 4
// 0 <= prices[i] <= 10 ^ 4

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += (prices[i + 1] - prices[i]);
    }
  }
  return profit;
};
let prices = [1, 2, 3, 4, 5]
console.log(maxProfit(prices))