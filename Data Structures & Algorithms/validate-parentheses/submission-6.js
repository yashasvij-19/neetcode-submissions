class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0 || s.charAt(0) === ')' || s.charAt(0) === ']' || s.charAt(0) === '}') {
            return false;
        }
        var validArr = new Array();
        for (var i = 0; i < s.length; i++) {
            var char = s.charAt(i);

            if (char === '(' || char === '[' || char === '{') {
                validArr.push(char);
            }
            else if (
                (char === ')' && validArr[validArr.length - 1] === '(') ||
                (char === ']' && validArr[validArr.length - 1] === '[') ||
                (char === '}' && validArr[validArr.length - 1] === '{')
            ) {
                validArr.pop();
            }
            else {
                return false;
            }
        }

        return validArr.length === 0;



    }

}
