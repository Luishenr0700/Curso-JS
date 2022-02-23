
let num = document.getElementById('txtn')
let addn = document.getElementById('addn')
let res = document.querySelector('div#res')
let vetor = []
function adicionar(){
    let n = Number(num.value)
    vetor.push(n)
    if (num.value.length == 0){
        alert('Digite um valor para continuar.')
    } else {
        let item = document.createElement('option')
        item.text = `O número ${n} foi adicionado`
        item.value = `addn${n}`
        addn.appendChild(item)
    }   
}
function finalizar(){
    res.innerHTML = `Ao todo temos ${vetor.length} números cadastrados.`
    
}
