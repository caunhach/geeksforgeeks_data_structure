//O(n) 2nd solution : swap first zero to non-zeroes
function move_all_zeroes(arr){
    let n = arr.length
    let index = 0
    for (var i = 0; i < n; i++)
    {
        if (arr[i] != 0 && arr[index] == 0){
            var tmp = arr[i]
            arr[i] = arr[index]
            arr[index] = tmp
        }
        if (arr[index] != 0)
            index++
    }
    return arr
}
/*
var arr = [1, 2, 0, 4, 3, 0, 5, 0]
arr = move_all_zeroes(arr)
console.log(arr)
*/