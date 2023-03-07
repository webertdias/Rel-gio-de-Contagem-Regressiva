const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const novaData = "2023, 4 ,16,";

function cronometro(){

    const dataFutura = new Date(novaData);
    const dataAtual = new Date();

    const segundostotais = (dataFutura - dataAtual)/1000;

    const dia = Math.floor(segundostotais / 3600 /24);
    const hora = Math.floor(segundostotais/3600) % 24;
    const minuto = Math.floor(segundostotais /60) % 60;
    const segundo = Math.floor(segundostotais) % 60;

    dias.innerHTML = dia;
    horas.innerHTML = relogio(hora);
    minutos.innerHTML = relogio(minuto);
    segundos.innerHTML = relogio(segundo);

}

function relogio(rel){
    return rel < 10 ? `${rel}` : rel;
}

cronometro();

setInterval(cronometro, 1000);





/* function seg(){
    for (let i = 60; i >= 0; i--) {
        document.getElementById("segundos").innerHTML += i;
        clearInterval(i);

 }
} */

    



//function dia(dataAtual) {
//    dia = (dataFutura.getDay) - (dataAtual.getDay);
//    dia.getElementById("dias").innerHTML;
//}