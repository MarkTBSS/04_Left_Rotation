/* function rotateLeft(d, arr) {
    // Write your code here
    for (var i = 0; i < d; i++) {
        console.log("Round of i : " + i);
        var firstValue = 0;
        firstValue = arr[0]
        console.log(arr);
        for (var k = 0; k < arr.length; k++) {
            console.log("Round of k : " + k);
            arr[k] = arr[k+1]
        }
        arr[arr.length - 1] = firstValue;
        console.log(arr);
    }
    return arr
}
 */

function rotateLeft(d, arr) {
    for (var i = 0; i < d; i++) {
        var firstValue  = arr.slice(0, 1)
        arr = arr.slice(1, arr.length).concat(firstValue)
        console.log(arr)
    }
    return arr
}

var arr = [1, 2, 3, 4, 5]
var d = 4
console.log(rotateLeft(d, arr));