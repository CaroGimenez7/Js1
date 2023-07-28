//! DOM Y BOM

//DOM DOCUMENT OBJECT MODEL



//? BOM BROWSER OBJECT MODEL

//!FUNCIONES PARA MANEJAR EL TIEMPO

//setInterval() //todo: Ejecuta una tarea cada un determinado lapso de tiempo
//setTimeout()

function helloworld() {
    console.log(`hola comision!!`);
}
// setInterval( () => helloworld(),5000)
//todo setTIMEOUT EJECUTA UNA FUNCION PASADO UN DETERMINADO LAPSO DE TIEMPO
setTimeout(() => console.log(`hola buenas noches!!!`), 6000 );

//? EJERCICIO DEL TIEMPO: crear un contador que despues de los 10 seg me muestre un msj para el despegue!!!

let contador = 10;

const contadorTiempo = setInterval( () => {
    console.log(`despegue en `, + contador)
    contador--
},1000)

setTimeout( () => {
    clearInterval(contadorTiempo);
    console.log(`DESPEGUEEEEEE`)

},10000)