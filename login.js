class User {
    constructor (id,name, email, password){
        this.id= id;
        this.name= name;
        this.email= email;
        this.password= password;
    }
}

const users= [
    new User (1, `carolina gimenez`,`gimenezcarolina@gmail.com`, `123456`),
    new User (2, `matias torres`, `matias@gmail.com`, `123456`)
]

function login (event) {
    event.preventDefault();
    const email = document.getElementById(`email`).value 
    const password = document.getElementById(`password`).value 
    const userFound = users.find(User => userFound.email == email);
    if (userFound) {
        const isOk = userFound.password == password;
        if (isOk) {
            alert (`entro correctamente`); 
            window.location.assign(window.location.origin + `/carrito2.html`)
        }else {
            alert(`clave incorrecta`)
        } 
       
    
    } else {
        alert(`usuario incorrecto`)
    }
}
