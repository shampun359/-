//Сортировка списка:
let my_list = [3,5,2,10,8,9,4,6,7,1];

my_list.sort(function (a, b) {
    return a - b;
});

console.log(my_list);
//бинарный поиск:

function binary_search(my_list, item){
    
    let low = 0;                     // Нижний предел = индекс первого элемента
    let high = my_list.length - 1;   // Верхний предел = 4

    while ( low <= high){
        console.log('цикл запустился')
        let mid = Math.floor((low + high) / 2);  //  =  2
        let guess = my_list[mid];   //  = 5  


        if (guess == item ){
            return mid;
        }else if (guess > item){
            high = mid - 1;
        }else {
            low = mid + 1;
        }  
    }
}

let a = binary_search(my_list, 2);

if (a == undefined){
    console.log('Такого элемента нет в списке')
}else {
    console.log('элемент ' + my_list[a] + ' существует. индекс: ' + a);
}






