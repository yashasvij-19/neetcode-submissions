class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
     var prefix = 1;
     var results = new Array(nums.length);

     for(var i = 0; i<nums.length; i++){
        results[i] = prefix;
        prefix = prefix*nums[i];
     }

     var suffix = 1;
     for(var i = nums.length-1; i>=0; i--){
         results[i] = results[i] * suffix;
        suffix = suffix*nums[i];
     }
     return results;
    }
}
