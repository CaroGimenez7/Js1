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

let database = [`matias`, `celeste`, `agustina`, `mario`, `joaquin`, `lucas`, `ivan`];

const deleteUser = () => {
     let nameUser = prompt(`ingrese el usuario que desea eliminar`).toLocaleLowerCase();

     let position = database.indexOf(nameUser);
     if (database.includes(nameUser)) {
        database.splice(position,1);
        alert(`usuario eliminado correctamente!`);
     }else {
        alert(`usuario no encontrado!`)
     }

     
}

 const updateUser = () => {
   let nameUser = prompt(`ingrese el usuario que desea eliminar`).toLocaleLowerCase();
   let update = prompt(`que usuario queres agregar`).toLocaleLowerCase();
   let position = database.indexOf(nameUser);

   if (database.includes(nameUser)) {
      database.splice(position,1,update);
      alert(`usuario editado correctamente`)
   }else {
      alert(`usuario no encontrado!`)
   }
 }