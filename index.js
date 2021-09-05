function iterator (arr, task, start=0) {
    arr.slice(start).forEach( item => task(item))
}

function map (arr, f) {
    let newArr = []
    iterator(arr, item => {return newArr.push(f(item))} )
    return newArr
}

function reduce (arr, f, start) {
    let total
    if (start) {
        total = start
        iterator(arr, item => {return total = f(item, total)} )
    } else {
        total = arr[0]
        iterator(arr, item => {return total = f(item, total)}, 1)
    }
    return total
}