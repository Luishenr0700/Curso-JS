let num = [5, 2, 9, 3, 7, 3, 5, 2, 6, 1]
num.push(1)
num.sort()
console.log(`O vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(num[0])
let pos = num.indexOf(6)
if (pos == -1){
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor 6 esta na posição ${pos}`)
}
