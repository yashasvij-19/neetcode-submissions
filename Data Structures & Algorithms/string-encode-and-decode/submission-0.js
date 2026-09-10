class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let encoded = "";
        for (const str of strs) {
            encoded += str.length + "#" + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @return {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            const length = parseInt(str.slice(i, j), 10);
            const start = j + 1;
            const end = start + length;

            result.push(str.slice(start, end));
            i = end; 
        }

        return result;
    }
}