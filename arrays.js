//? ARRAY son listas ordenadas de elementos, que pueden ir desde datos como, number, string, booleano, arreglo

// let array = [`carolina`, true, `matias`, 28, [`desarrollador`]];

// console.log(array.length)

// let dias = [`lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`];

//todo METODO PARA AGREGAR UN ELEMENTO AL FINAL DEL ARRAY
// dias.push(`feriado`) 
// console.log(dias)

//todo ELIMINA EL ULTIMO ELEMENTO DEL ARRAY Y LO DEVUELVE EN CASO QUE LO ESPECIFIQUEMOS
//  let diaEliminado = dias.pop() 
// console.log(diaEliminado)
// console.log(dias)

//todo AGREGA UN ELEMENTO AL INICIO DEL ARRAY
// dias.unshift(`Domingo`);
// console.log(dias)

//todo ELIMINA EL PRIMER ELEMENTO DEL ARRAY Y LO DEVUELVE
// console.log(dias.shift())
// console.log(dias)

//todo DEVUELVE LA POSICION DEL ELEMENTO QUE SE LE INDIQUE
// console.log(dias.indexOf(`martes`))

//todo INVIERTE EL ORDEN DEL ARREGLO
// console.log(dias.reverse())

//todo CONCATENA DOS ARREGLOS, DEBEMOS PASAR EL SEGUNDO ARREGLO COMO PARAMETRO
// let diasDos = [`feriado`, `domingo`]

// console.log(dias.concat(diasDos))

//todo DEVUELVE TRUE EN CASO QUE CONTENGA AL ELEMENTO INDICADO POR PARAMETRO
// console.log(dias.includes(`miercoles`))

//todo DEVUELVE TODOS LOS ELEMENTOS CON EL SEPARADOR ESPECIFICADO POR PARAMETRO
// console.log(dias.join(`- `))

//todo ORDENA EL ARRAY ALFABETICAMENTE
// console.log(dias.sort())

//todo DESDE LA POSICION X, CORTA Y ELEMENTOS Y LOS REMPLAZA CON Z
// dias.splice(1,2, `feriado` )
// console.log(dias)

//todo HACE LO MISMO QUE SPLICE PERO NO MODIFICA EL ARRAY ORIGINAL

// dias.slice(1, `domingo`)
// console.log(dias)