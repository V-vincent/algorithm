// 动态规划

// 背包问题
// 给一个固定大小，能够携重W的背包以及一组有价值重量的物品
// 找出一个最佳的方案，使得装入包中的物品重量不超过W且总价值最大
// 物品个数n=5,物品重量weights=[2，2，6，5，4],物品价值values=[6，3，5，4，6],背包总容量W=10
let weights = [2, 2, 6, 5, 4];
let vals = [6, 3, 5, 4, 6];
let w = 10;
function knapsack(weights, values, w) {
  // 定义一个矩阵
  let dp = [[]];
  let n = weights.length - 1;
  for (let i = 0; i <= w; i++) {
    if (i < weights[0]) {
      dp[0][i] = 0;
    } else {
      dp[0][i] = values[0];
    }
  }
  // i: 背包总容量
  // j: 物品的下标
  for (let i = 0; i <= w; i++) {
    for (let j = 1; j <= n; j++) {
      if (!dp[j]) dp[j] = [];
      // 如果容量小于当前物品的重量，则取之前的最优解；否则对比取最优解
      if (i < weights[j]) {
        dp[j][i] = dp[j - 1][i];
      } else {
        // 前一个最优解和前一个最优解减去对应物品重量后加上当前物品价值的最大值比较
        dp[j][i] = Math.max(dp[j - 1][i], dp[j - 1][i - weights[j]] + values[j]);
      }
    }
  }
  log(dp[n][w]);
}
// knapsack(weights, vals, w);


// 动态规划
// 牛客网-华为机试-年终奖购物单问题
let prices = [
  [5, 3, 4],
  [4, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [2, 0, 0],
  [5, 0, 0],
  [4, 0, 0]
];
let values = [
  [5, 15, 20],
  [16, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [10, 0, 0],
  [20, 0, 0],
  [16, 0, 0]
]
let m = 7;
let N = 15;
let dp = Array(N + 1).fill(0);
function dynamic() {
  for (let i = 0; i < m; i++) {
    for (let j = N; j >= prices[i][0]; j--) {
      dp[j] = Math.max(dp[j - prices[i][0]] + values[i][0], dp[j]);
      let temp = prices[i][0] + prices[i][1];
      if (prices[i][1] != 0 && j >= temp) {
        dp[j] = Math.max(dp[j - temp] + values[i][0] + values[i][1], dp[j]);
      }
      let temp2 = prices[i][0] + prices[i][1] + prices[i][2];
      if (prices[i][2] != 0 && j >= temp2) {
        dp[j] = Math.max(dp[j - temp2] + values[i][0] + values[i][1] + values[i][2], dp[j]);
      }
      let temp3 = prices[i][0] + prices[i][2];
      if (prices[i][2] != 0 && j >= temp && j >= temp3 && j < temp2) {
        dp[j] = Math.max(dp[j - temp] + values[i][0] + values[i][1], dp[j - temp3] + values[i][0] + values[i][2], dp[j]);
      }
    }
  }
  console.log(dp);
}
// dynamic();