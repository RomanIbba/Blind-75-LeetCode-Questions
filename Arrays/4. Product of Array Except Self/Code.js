/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let l = nums.length
    let final = [];

    final[0] = 1;

    for(let i = 1; i < l; i++){
        final[i] = final[i-1] * nums[i-1];
    }
    let h = 1;
    for(let i = l-1; i >=0; i--){
        final[i] = final[i] * h;
        h = h * nums[i];
    }
    return final
};

// let l = nums.length;
//     let leftSum = [];
//     let rightSum = [];
//     let final = [];

//     leftSum[0] = 1;
//     for(let i = 1; i < l; i++){
//         leftSum[i] = leftSum[i-1] * nums[i-1];
//     }

//     rightSum[l-1] = 1;
//     for(let i = l-2; i >= 0; i--){
//         rightSum[i] = rightSum[i+1] * nums[i+1];
//     }

//     for (let i = 0; i < l; i++){
//         final[i] = leftSum[i] * rightSum[i];
//     }
//     return final