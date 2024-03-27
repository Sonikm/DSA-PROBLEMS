// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

// TLC on leetcode
function maximumProfit1(prices) {
  let globleProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let currentProfit = prices[j] - prices[i];
      globleProfit =
        currentProfit > globleProfit ? currentProfit : globleProfit;
    }
  }

  return globleProfit;
}

// Lets more optimize this
function maxProfits(prices) {
  let minStockPurchasePrice = prices[0] || 0;
  let profits = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }
    profits = Math.max(profits,  prices[i] - minStockPurchasePrice);
  }

  return profits;
}


// let prices = [7,1,5,3,6,4]
// let prices = [7,6,4,3,1]
let prices = [8, 2, 7, 9, 3, 6];

console.log("maximum profits: ", maxProfits(prices));
