/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0;
    let lowestPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        lowestPrice = Math.min(prices[i], lowestPrice);
        profit = Math.max(profit, prices[i] - lowestPrice);
    }
    return profit;
    
    // let profit = 0;
    // for(let i = 0; i < prices.length; i++){
    //     for(let j = i+1; j < prices.length; j++){
    //         let p = prices[j] - prices[i];
    //         profit = p > profit ? p : profit; 
    //     }
    // }
    // return profit
};