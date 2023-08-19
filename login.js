// class User {
//     constructor (id,name, email, password){
//         this.id= id;
//         this.name= name;
//         this.email= email;
//         this.password= password;
//     }
// }

// let users;
// if (localStorage.getItem(`users`)) {
//     users = JSON.parse(localStorage.getItem(`users`))
// } else {

//     const users= [
//         new User (1, `carolina gimenez`,`gimenezcarolina@gmail.com`, `123456`),
//         new User (2, `matias torres`, `matias@gmail.com`, `123456`)
//     ]
// }



// function login (event) {
//     event.preventDefault();
//     const email = document.getElementById(`email`).value 
//     const password = document.getElementById(`password`).value 
//     const userFound = users.find(user => user.email == email);
//     if (userFound) {
//         const isOk = userFound.password == password;
//         if (isOk) {
//             alert (`entro correctamente`); 
//             window.location.assign(window.location.origin + `/carrito2.html`)
//         }else {
//             alertMessage(`clave incorrecta`)
//         } 
       
    
//     } else {
//         alertMessage(`usuario incorrecto`)
//     }
//     document.querySelector(`form`).reset()
// }

// <div class="alert alert-danger" role="alert">
//   A simple danger alert—check it out!
// </div>

// function alertMessage (message) { 
//     //creamos el elemento
//     let alertMessage = document.createElement(`div`);
//     //agrego estilos
//     alertMessage.classList.add(`alert`, `alert-danger`)
//     alertMessage.setAttribute(`role`, `alert`);
//     //agregamos la informacion
//     alertMessage.innerText = message;
//     //buscamos al padre
//     let container = document.querySelector(`form`);
//     //adoptamos al hijo
//     container.appendChild(alertMessage);

// }
