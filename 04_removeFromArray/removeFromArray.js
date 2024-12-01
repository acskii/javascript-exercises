const removeFromArray = function(arr, ...toRemove) {
    // Method 1:
    // let result = [];

    // for (const a of arr) {
    //     let found = false;
    //     for (const r of toRemove) {
    //         found = (a === r);
    //         if (found) break;
    //     }
    //     if (!found) result.push(a);
    // }

    // return result;

    // Method 2:
    for (const r of toRemove) {
        while (arr.indexOf(r) > -1) {
            arr.splice(arr.indexOf(r), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
