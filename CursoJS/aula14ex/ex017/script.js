function tabuada(){
    var num = document.getElementById('txtn')
    var seltab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('[ERRO] Faltam dados.')
    } else {
        var tab = Number(num.value)
        seltab.innerHTML = ''
        for (c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${tab} x ${c} = ${tab*c}`
            item.value = `seltab${c}`
            seltab.appendChild(item)
        }
    }
}