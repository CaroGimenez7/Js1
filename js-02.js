// let dato = "pablito clavo un clavito";
// let contrasena = `     12345       `;
//?METODOS
// console.log(dato.length); //mortrarme la longitud de un elemento, es una propiedad
//? todo lo que lleve parentesis es un metodo
// console.log(dato.toUpperCase()); //pasar toda la cadena a mayuscula, es un metodo
// console.log(dato.toLocaleLowerCase()); //pasar toda la cadena a miniscula, es un metodo
// console.log((dato.charAt(2))); //me devuelve un elemento de una determinada posicion, que debo indicarle atraves de; parametro
// console.log(dato.substring(1,7)); //devuelve una parte de la cadena segun se le indique en el parametro, debemos indicar desde donde y hasta donde queremos cortar
// console.log(contrasena.trim()); //elimina los espacios en blanco
// console.log(dato.includes(`pablito`)); //verificamos si el texto que buscamos coincide o se encuentra dentro de la variable

//!EJERCICIO 1: Recibir el apellido del usuario, y mostrar por consola la ultima letra

//1- Recibir el apellido del usuario
//2- Mostrar por consola la ultima letra

// let nameUser = prompt(`ingrese su nombre`);
// console.log(nameUser.charAt(nameUser.length-1));

//!EJERCICIO 2: Recibir el nombre del usuario, y mostrar por consola el nombre con la primera letra en mayuscula

//1-Pedir al usuario su nombre
//2-Mostrar el nombre con la primera letra en mayuscula

// const nombre = prompt(`ingrese su nombre`);
// const resultado = nombre.charAt(0).toUpperCase();
// const resultado2 = nombre.substring(1).toLocaleLowerCase();
// console.log(resultado + resultado2);

// let numero = 37.65;

// console.log(Math.round(numero)); //redondeo
// console.log(Math.floor(numero)); //truncamiento, me devuelve directamente el entero

//todo ENCONTRAR MAXIMOS Y MINIMOS

// let maximo = Math.max(1,14,45,78,36);
// let minimo = Math.min(1,14,45,78,36);
// console.log(`el numero mayor es ${maximo}`);
// console.log(`el numero menor es ${minimo}`);

//todo POTENCIAS Y RAICES
// console.log(Math.pow(3,2)); //potencia cuadrada
// console.log(Math.pow(3,3)); //potencia cubica
// console.log(Math.sqrt(9)); //raiz cuadrada
// console.log(Math.cbrt(27)); //raiz cubica

// let aleatorio = Math.round(Math.random()*100);
// console.log(aleatorio);

// let numeroDos = "12.65ada";
// console.log(numeroDos);
// console.log(parseInt(numeroDos)) //me convierte el string en numero pero solo los enteros
// console.log(Number(numeroDos)) //no reconoce letras, solo numeros
// console.log(parseFloat(numeroDos)) //convierte el string a numero y reconoce decimales 

// let numeroTres = 12.654584754;
// console.log(numeroTres.toFixed(3))


