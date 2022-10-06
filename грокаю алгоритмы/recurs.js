//рекурсия

function gg(i){
    console.log(i);
    if (i<2){
        return
    }else{
        gg(i-1)
    }
}
//gg(3)

//стек вызовов
function greet(name){
    console.log('hello, ' + name);
    greet2(name);
    console.log('Готовлюсь прощатся...');
    bye();
}

function greet2(){
    console.log('вызвана функция 2')
}
function bye(){
    console.log('пока')
}
//greet('nigga')

//Вычисление факториала 
function fact(x){
    console.log(x)
    if (x == 1){
        return 1
    }else{
        return x * fact(x-1)
    }
    
}
console.log(fact(3))