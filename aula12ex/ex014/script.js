function carregar() {
    var msg = window.document.getElementById('msg')
    var msgdois = window.document.getElementById('msgdois')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msgdois.innerHTML = 'Bom Dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 19) {
        // BOA TARDE!
        msgdois.innerHTML = 'Boa Tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        msgdois.innerHTML = 'Boa noite!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
