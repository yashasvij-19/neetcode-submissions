class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        nums.sort((a, b) => a - b);

        var longest = 1;
        var length = 1;

        for (var i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                continue; 
            } else if (nums[i] === nums[i - 1] + 1) {
                length++;
            } else {
                length = 1;
            }
            longest = Math.max(longest, length);
        }

        return longest;
    }
}