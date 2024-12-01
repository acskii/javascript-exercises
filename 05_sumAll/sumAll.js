const sumAll = function(min, max) {
    if (
        (Number.isInteger(min) && Number.isInteger(max)) && 
        (min > 0 && max > 0)
    ) {
            let sum = 0;
            //const min = ((a > b) ? b : a);
            //const max = ((a < b) ? b : a);

            // Using deconstruction to swap variables
            if (min > max) [min, max] = [max, min];

            for (let i = min; i <= max; i++) {
                sum += i;
            }
            return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
