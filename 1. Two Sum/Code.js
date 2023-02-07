/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target){
    let find = [];
    for(let i = 0; i < nums.length; i++){
        let num = target - nums[i];
        if(find[num] === undefined){
            find[nums[i]] = i;
        }else{
            return [find[num], i];
        }
    }
    return false;
};

// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         let find = target - nums[i];
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[j] === find){
//                 return [i,j];
//             }
//         }
//     }
//     return false;
// };