
//Par ou impar
function parimp(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parimp(22))

//Soma
function soma(n1=0, n2=0){
    return n1 + n2

}
console.log(soma(2,5))
//Multiplicação
let v = function(x){
    return x*8
}
console.log(v(5))

//Fatorial
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c-- ) {
        fat *=c
    }
    return fat
}
console.log(fatorial(5))

// 5! = 5 x 4 x 3 x 2 x 1

//Recursividade
function fatorial(n){
    if (n == 1) {
        return 1 
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/