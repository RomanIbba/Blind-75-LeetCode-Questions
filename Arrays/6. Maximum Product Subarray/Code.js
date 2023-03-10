/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    if(nums.length == 0) return 0;
    let maxSub = nums[0];
    let max = nums[0];
    let min = nums[0];

    for(let i = 1; i < nums.length; i++){
        temp_max = Math.max(nums[i], max * nums[i], min * nums[i]);
        min = Math.min(nums[i], max * nums[i], min * nums[i]);
        max = temp_max;
        maxSub = Math.max(maxSub, max);
    }
    return maxSub
};