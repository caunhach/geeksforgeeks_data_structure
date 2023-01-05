//O(n) 1st solution : push only non-nzeroes then push all zeroes
function move_all_zeroes(arr){
    let n = arr.length
    let res = []
    let count = 0
    for(var i = 0; i < n; i++)
    {
        if (arr[i] != 0){
            res.push(arr[i])
            count++
        }
    }
    while(count++ < n)
        res.push(0)
    return res
}
/*
var arr = [1, 2, 0, 4, 3, 0, 5, 0]
arr = move_all_zeroes(arr)
console.log(arr)
*/