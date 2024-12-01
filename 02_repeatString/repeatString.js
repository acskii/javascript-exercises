const repeatString = function(str, repeats) {
    // Easy Approach: return str.repeat(repeats);
    if (repeats >= 0) {
        let result = "";
        for (let i = 0; i < repeats; i++) {
            result += str;
        }
        return result;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
