/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort(function(a, b){return a - b});
    let output = [];
    for(let i = 0; i < nums.length - 2; i++){
        if(i == 0 || i > 0 && nums[i] != nums[i-1]){
            let left = i +1;
            let right = nums.length-1;
            while(left < right){
                sum = nums[i] + nums[left] + nums[right];
                if(sum > 0){
                    right--;
                }else if(sum < 0){
                    left++;
                }else{
                    output.push([nums[i], nums[left], nums[right]]);
                    left++;
                    while(nums[left] == nums[left-1] && left < right){
                        left++;
                    }
                }
            }
        }
    }
    return output
};