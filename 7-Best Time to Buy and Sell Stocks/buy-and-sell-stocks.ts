/**
 * LEETCODE-121
 * Given an array prices where prices[i] is the price of a given stock on the ith day.
 * We want to maximize your profit by choosing a single day to buy one stock and
 * choosing a different day in the future to sell that stock.
 * @param prices contains price of a given stock on the ith day
 * @returns the maximum profit achieved from this transaction, 0 if no profit achieved.
 */
function maximumProfit(prices: number[]): number {
  let buyPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    }
    if (prices[i] - buyPrice > maxProfit) {
      maxProfit = prices[i] - buyPrice;
    }
  }
  return maxProfit;
}
