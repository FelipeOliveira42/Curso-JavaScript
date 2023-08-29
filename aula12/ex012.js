var agora = new Date()
var hora = agora.getHours()

var hora = 1
console.log(`Seus horário atual é ${hora}`)
if (hora >= 5 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora >= 19 && hora <= 24) {
    console.log('Boa noite!')
} else if (hora < 0 || hora > 24) {
    console.log('Horário incorreto, favor informar horário correto!')
} else if (hora <= 4 && hora >= 0){
    console.log('Boa Madrugada!')
}