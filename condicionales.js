// let numero = 12;

// if (numero < 10) {
//     console.log(`el numero ${numero} es menor`)
// } else {
//     if (numero > 10) {
//         console.log(`el numero ${numero} es mayor`)
//     }
//     else {
//         console.log(`el numero ${numero} es igual`)
//     }
// }

//if (condicion){
// lo que pasa si se cumple dicha condicion
//} else{
//lo que pasaria en bcaso que la condicion no se cumpla
//}

//! EJERCICIO 3: DE COMPARACION DE NUMEROS : pedimos dos numeros al usuario y comparamos si el 1er num es mayor al 2do num
// let numberUser = parseInt(prompt('Ingrese el primer numero'));
// let  numbeUser2 = parseInt(prompt('Ingrese el segundo Numero'))


// if(numberUser > numbeUser2){
//     console.log('el numero es mayor')
// }else if (numberUser < numbeUser2){
//     console.log('el numero es menor')
// }else{
//     console.log('es numero es igual')
// }

//!EJERCICIO 2: PEDIR UN NUMERO AL USUARIO Y VERIFICAR SI ES PAR O IMPAR
//  let numero = parseInt(prompt('ingrese cualquier numero'));

//  if(numero%2 == 0){
// console.log('el numero es par')
//  }else{
//     console.log('el numero es impar')
//  }

//!EJERCIO 3: MUSICA POR EDAD De acuerdo a la edad del usuario le muestro una alerta con la musca que corresponda a su edad

// let edad = prompt('ingrese su edad');

// if(edad >=18 && edad<=30){
//     console.log('el tema para tu edad es: OJOS BONITOS ')
// }else if (edad >30 && edad<=60){
//     console.log('el tema para tu edad es : RICARDO ARJONA')
// }else if(edad >60 && edad<98){
//     console.log('el tema es MUSICA CLASICA O TANGO')
// }else{
//     console.log('no tenes edad')
// }

//! EJERCICIO 4 PATOVICA DE FIESTA: preguntar edad, si es menor solo puede pasar a la fiesta con un tutor

// let edad = prompt(`ingrese su edad`);

// if (edad >= 18) {
//     console.log(`puede pasar`)
// } else if (edad < 18) {
//     let tutor = prompt(`viene acompañado de un tutor?`)
//     if (tutor.includes(`si`)) {
//         console.log(`ingrese por favor`)
//     }else{
//         console.log(`no puede ingresar`)
//     }
// }

//! EJERCICIO 5 CEMENTERIO INDIO EMBRUJADO: una persona esta por comprar un inmueble, si llevo anteojos podra leer que en la letra pequeña se avisa que el inmueble esta construido sobre un cementerio indio embrujado.
//PREGUNTAR AL USUARIO SI TRAJO ANTEOJOS, EN CASO QUE DIGA "SI" MOSTRALE EL MSJ QUE NO COMPRE, EN CASO QUE DIGA "NO" MOSTRAR EL MSJ QUE DIGA, COMPRA TRANQUILO.

// let pregunta = prompt("traes anteojos??").toLocaleLowerCase();

// if (pregunta == "si") {
//     console.log(`corre no te conviene!!!`)
// }else if( pregunta == `no`){
//     console.log(`compra tranquilo pa \`pa\``)
// }else{
//     alert(`solo se admiten respuestas entre "SI Y NO"`)
// }

//! EJERCICIO 6 PROVINCIAS COPADAS: al escribir la provincia de donde es el usuario, mostranos en consola algo respectivo a ella.

let provincias = prompt("de que provincias sos?").toLocaleLowerCase();

// //tucuman, santiago, cordoba, jujuy

// if (provincias == `tucuman`) {
//     alert(`altas empanadas`)
// }else if (provincias == `santiago`) {
//     console.log(`alta siesta primo`)
// }else if (provincias == `cordoba`) {
//     console.log(`aguante el cuarteto y el fernet`)
// }else if (provincias == `jujuy`) {
//     console.log(`soltame carnaval`)
// }else {
//     console.log(`provincia irrelevante`)
// }

switch (provincias) {
    case `tucuman`:
        alert(`altas empanadas`)
        break;
        case `santiago`:
        console.log(`alta siesta primo`)
        break;
        case `jujuy`:
            console.log(`soltame carnaval`)
            break;
    default:
        console.log(`provincia irrelevante`)
        break;
}









