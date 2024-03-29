/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {

    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        let mid = Math.ceil(left + (right-left) /2);
        if(nums[mid] == target){
            return mid
        }else if( nums[left] <= nums[mid]){
            if(target > nums[mid] || target < nums[left]){
                left = mid + 1;
            } else {
                right = mid -1;
            }
        }else{
            if(target < nums[mid] || target > nums[right]){
                right = mid - 1;
            }else{
                left = mid +1;
            }
        }
    }
    return -1


    // let left = 0;
    // let right = nums.length-1;
    // while(left < right){
    //     let mid = Math.floor(left + (right - left) / 2);
    //     if(nums[mid] > nums[right]){
    //         left = mid + 1;
    //     }else{
    //         right = mid;
    //     }
    // }

    // let start = left;
    // left = 0;
    // right = nums.length-1;

    // if (target >= nums[start] && target <= nums[right]){
    //     left = start;
    // }else{
    //     right = start;
    // }

    // while(left <= right){
    //     let mid = Math.floor(left + (right - left) / 2);
    //     if(nums[mid] == target){
    //         return mid
    //     }else if(nums[mid] < target){
    //         left = mid + 1;
    //     }else{
    //         right = mid -1;
    //     }
    // }
    // return -1
};