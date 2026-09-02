class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length === t.length){
         const sMap = new Map();
        const tMap = new Map();

        for(var i = 0; i<s.length; i++){
            if(sMap.has(s[i])){
               sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
            }else{
                sMap.set(s[i],1);
            }

             if(tMap.has(t[i])){
                var k = tMap.get(t[i]);
                tMap.set(t[i],k+1);
            }else{
                tMap.set(t[i],1);
            }
        }
for (let [char, count] of sMap) {
    if (tMap.get(char) !== count) {
        return false;
    }
}
return true;

        }else{
            return false;
        }

        
    }
}
