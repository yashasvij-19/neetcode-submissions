class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var left = 0;
        var right = heights.length - 1;
        var maxArea = 0;

        while (left < right) {
            var width = right - left;
            var height = Math.min(heights[left], heights[right]);
            var area = width * height;

            maxArea = Math.max(maxArea, area);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}