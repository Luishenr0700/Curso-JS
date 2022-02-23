function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        msg.innerHTML += '<p>Bom Dia!!</p>'
        img.src = 'manha.png'
        document.body.style.background = '#cec5b5'
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML += '<p>Boa Tarde!!</p>'
        img.src = 'tarde.png'
        document.body.style.background = '#f2cc91'
    } else {
        msg.innerHTML += '<p>Boa Noite!!</p>'
        img.src = 'noite.png'
        document.body.style.background = '#011b39'
    }
}