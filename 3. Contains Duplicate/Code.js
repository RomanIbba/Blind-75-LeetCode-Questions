/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    let obj = {};
    for (let num of nums) {
        if (obj[num]) {
            return true;
        } else {
            obj[num] = true;
        }
    }
    return false;

    // let check = [];
    //     for(let i = 0; i < nums.length; i++){
    //         if(check[nums[i]] == 1){
    //             return true;
    //         }else{
    //             check[nums[i]] = 1;
    //         }
    //     }
    // return false;
};