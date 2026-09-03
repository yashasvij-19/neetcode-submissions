class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

      var charArray = new Array(26).fill(0);

      for(var i = 0; i<s.length; i++){
        charArray[s.charCodeAt(i) - "a".charCodeAt(0)]++ ;
        charArray[t.charCodeAt(i) - "a".charCodeAt(0)]-- ;
      }

      return charArray.every(value => value === 0);

    }
}