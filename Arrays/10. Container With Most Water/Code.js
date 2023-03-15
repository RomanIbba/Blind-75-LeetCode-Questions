/**
 * @param {number[]} height
 * @return {number}
 */
// area = length x height


var maxArea = function(height) {
    let left = 0, right = height.length - 1, maxArea = 0;

     while(left < right) {
       const h = Math.min(height[left], height[right]);
       const w = right - left;
       const area = h * w;
       maxArea = Math.max(maxArea, area);

       if(height[left] <= height[right]) {
         left++;
       } else {
         right--;
       }
     }

 return maxArea;
};