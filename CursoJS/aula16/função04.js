function fatorial(n){
    let fati = 1
    for (c = n; c > 1; c--){
        fati*=c
    }
    return fati
}
console.log(fatorial(5))
