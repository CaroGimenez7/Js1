//todo DRY: REGLA QUE SIGNIFICA NO REPITAS TU CODIGO
//? FUNCIONES DECLARATIVAS

// function hello() {
//     console.log(`hola mundo desde funcion declarativa`)
// }
//  //? FUNCIONES ANONIMAS
// const hello2 = function () {
//     console.log(`hola mundo desde la funcion anonima`)
// }

//? ARROW FUNCTION

// const hello3 = () => {
//     console.log(`hola mundo desde la funcion de flecha`)
// }

// hello();
// hello2();
// hello3();

//! EJERCICIO 1: BASE DE DATOS PARA ELIMINAR USUARIOS:

// let database = [`matias`, `celeste`, `agustina`, `mario`, `joaquin`, `lucas`, `ivan`];

// const deleteUser = () => {
//      let nameUser = prompt(`ingrese el usuario que desea eliminar`).toLocaleLowerCase();

//      let position = database.indexOf(nameUser);
//      if (database.includes(nameUser)) {
//         database.splice(position,1);
//         alert(`usuario eliminado correctamente!`);
//      }else {
//         alert(`usuario no encontrado!`)
//      }

     
// }
//! EJERCICIO 1: BASE DE DATOS PARA EDITAR USUARIOS:

//  const updateUser = () => {
//    let nameUser = prompt(`ingrese el usuario que desea eliminar`).toLocaleLowerCase();
//    let update = prompt(`que usuario queres agregar`).toLocaleLowerCase();
//    let position = database.indexOf(nameUser);

//    if (database.includes(nameUser)) {
//       database.splice(position,1,update);
//       alert(`usuario editado correctamente`)
//    }else {
//       alert(`usuario no encontrado!`)
//    }
//  }

//? LAS FUNCIONES CALLBACK SON FUNCIONES QUE SE PASAN COMO ARGUMENTO DE OTRAS FUNCIONES

// const hi = nombre => alert(`hola ` + nombre);
// const bye = nombre => alert(`chau ` + nombre)
// function userRegister (saludo) {
//     const name = prompt(`como es tu nombre?`);
//     saludo(name)
// }
// userRegister(hi);
// userRegister(bye);

//? METODOS FILTER, FIND, MAP Y FOREACH 

const ageDataBase = [23, 30, 45, 37, 25, 18, 16];

function mayoresDe25 (edad) {
    if (edad >= 25) {
        return edad;
        // console.log(edad)
    }
}


//todo METODO FILTER: crea un nuevo array con todos los elementos que cumplen con la condicion en la funcion especificada.
const respuestMayores2 = ageDataBase.filter(mayoresDe25) //FORMA 1
const respuestMayores = ageDataBase.filter(edad => edad >= 25) //FORMA
// console.log(respuestMayores)
// console.warn(respuestMayores2)

//todo METODO FIND: devuelve al primer elemento que cumpla con la condicion especificada
const respuestMayores3 = ageDataBase.find(fulanito => fulanito >= 25);
// console.log(respuestMayores3)

//todo METODO MAP: ejecuta una accion sobre cada uno de los elementos, los modifica y los guarda.
const en20anios = ageDataBase.map(pepito => pepito +20);
// console.log(en20anios)

//todo FOREACH: no devuelve nada, tampoco modifica el array original, pide prestado, hace algo y vuelve a guardar.

const en20anioss = ageDataBase.forEach(age => console.log(age +20));