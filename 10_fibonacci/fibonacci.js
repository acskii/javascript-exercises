const fibonacci = function(index) {
    let n;

    if (typeof(index) === 'number') {
        n = index;
    } else {
        n = parseInt(index);
    }
    
    if (n < 0) {
        return "OOPS";
    } else if (n === 0) {
        return 0;
    } else {
        let f1 = 1;
        let f2 = 1;

        for (let i = 0; i < n-1; i++) {
            const t = f1;
            f1 += f2;
            f2 = t;
        }

        return f2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
