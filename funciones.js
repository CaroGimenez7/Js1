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

const hi = nombre => alert(`hola` + nombre);
const bye = nombre => alert(`chau ` + nombre)
function userRegister (saludo) {
    const name = prompt(`como es tu nombre?`);
    saludo(name)
}
userRegister(hi);
userRegister(bye);

//? METODOS FILTER, FIND, MAP Y FOREACH 