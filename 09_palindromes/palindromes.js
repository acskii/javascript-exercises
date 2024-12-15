const palindromes = function (str) {
    const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanStr = str
    .toLowerCase()
    .split('')
    .filter((ch) => alpha.includes(ch))
    .join('');
    const reversed = cleanStr.split('').reverse().join('');
    return reversed === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
