const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

let dataFutura = new Date("2023, 4, 16, 8, 0, 0");
const dataAtual = new Date()

function seg(){
    for (let i = 60; i >= 0; i--) {
        var seg = setInterval*i;
        document.getElementById("segundos").innerText = seg;
    }
}

    



//function dia(dataAtual) {
//    dia = (dataFutura.getDay) - (dataAtual.getDay);
//    dia.getElementById("dias").innerHTML;
//}