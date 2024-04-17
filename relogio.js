//dom

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')


//eventos

setInterval(relogio,1000)

//funções

function relogio(){

    let dia = new Date()
    //let varia "const" não

    let h = dia.getHours()
    let m = dia.getMinutes()
    let s = dia.getSeconds()

    if(h<10){
    h="0"+h
 }

 if(m<10){
    m="0"+h
 }
 if(s<10){
    s="0"+h
 }
    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
}
