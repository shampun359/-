
let my_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];


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
    console.log('элемент ' + my_list[a] + ' существует. Индекс: ' + a);
}






