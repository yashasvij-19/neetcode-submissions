class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
        var checkedS = "";

        for (var i = 0; i < s.length; i++) {
            var ch = s.charAt(i).toLowerCase();

            if (alphaNumeric.includes(ch)) {
                checkedS += ch;
            }
        }
        
        var left = 0;
        var right = checkedS.length - 1;

        while (right > left) {
            if (checkedS.charAt(left).toLowerCase() === checkedS.charAt(right).toLowerCase()) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    }
}
