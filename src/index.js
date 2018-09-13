/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
    var first;
    var second;
    var third;
    var count = 0;
    var length = arr.length;

    for(var i = 0; i < length; i++) {
        first = arr[i];
        second = arr[first - 1];
        third = arr[second - 1];

        if(third === i+1 ) {
            count++;

            delete arr[i];
            delete arr[first - 1];
            delete arr[second - 1];
        }
    }

    return count;
}
