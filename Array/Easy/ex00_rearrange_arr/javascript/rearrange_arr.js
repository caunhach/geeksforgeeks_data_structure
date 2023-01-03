// O(n)

function rearrange_arr(arr, n){
    var i, tmp
    for (i = 0; i < n; i++){
        while (arr[i] != -1 && arr[i] != i)
        {
            tmp = arr[i]
            arr[i] = arr[tmp]
            arr[tmp] = tmp
        }
    }
    return arr
}

/*
let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
let n = arr.length
console.log(rearrange_arr(arr, n))
arr = [19, 7, 0, 3, 18, 15, 12, 6, 1, 8, 11, 10, 9, 5, 13, 16, 2, 14, 17, 4]
n = arr.length
console.log(rearrange_arr(arr, n))
*/