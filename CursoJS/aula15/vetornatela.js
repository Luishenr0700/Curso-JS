let num = [5, 2, 9, 3, 7, 3, 5, 2, 6, 1]
/*for (var c = 0; c < num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}*/
num.sort()
for (let c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}