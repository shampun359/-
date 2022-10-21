//Сумма элементов массива
let arr = [1, 2, 3, 4, 5, 6] 

function add(arr) {
    if (arr.length == 1){ // base case
        return arr[0] 
    } 
    return arr[0] + add(arr.slice(1))  // recurse
}
console.log(add(arr))


// Подсчёт колличества элеметнов в массиве
function count(arr) {
    if (arr.length == 0) {
        return 0;
    }
    return 1 + count(arr.slice(1));
}

let x = [1,1]

console.log(count(x))

//найти наибольшее число в списке