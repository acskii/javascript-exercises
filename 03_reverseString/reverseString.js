const reverseString = function(string) {
    const splittedString = string.split('');
    splittedString.reverse();
    return splittedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
