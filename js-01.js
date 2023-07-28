//todo VARIABLES Y TIPOS DE DATOS QUE SE PUEDEN ALMACENAR
//QUE ES UNA VARIABLE? SON CAJAS DONDE PODEMOS ALMACENAR DATOS TEMPORALMENTE 
// let nombre = `nicole`;
// let edad = 28;
//  console.log(edad);
//  console.log(`holaa`);

 //! los 3 tipos de variables
 //?VAR: ES LA FORMA TRADICIONALPARA DECLARAR VARIABLES Y SU ALCANCE ES GLOBAL (NO SE UTILIZA, ES MALA PRACTICA)
 //?LET: ES LA FORMA MAS UTILIZADA, SON VARIABLES A LAS QUE SE LES PUEDE CAMBIAR EL VALOR A LO LARGO DEL TIEMPO, Y TIENE UN ALCANCE LOCAL
 //?CONST: SON VARIABLES CONSTANTES, A LAS QUE NO SE LES PUEDE MODIFICAR SU VALOR.

 //!STRINGS
//   let textos = `hola comision`;
//   let textos2 = "hola comision";
//   console.log(textos, textos2);

  //todo TIPOS DE OPERADORES:
  //?ASIGNACION
  // const comision = `59i`;
  //?OPERADORES ARITMETICOS
  //SUMA+, RESTA-, MULTIPLICACION*, DIVISION/, RESTO%
  // console.log(15+10)

  //?OPERADORES UNITARIOS
  // ++ (INCREMENTO)
  // let numero = 20;
  // numero++
  // console.log(numero)
  // -- (DECREMENTO)
  // numero--
  // console.log(numero);
  // / ! (NEGACION)
  // let femenino = true;
  // console.log(!femenino);

  //?OPERADORES RELACIONALES
  30 == 30 //igual a => true
  30 != 15 //diferente a => true
  30 === 30 //estrictamente igual a => true
  30 !== 45 //estrictamente diferente a => true
  30 > 10 //mayor que => true
  10 < 30 //menor que => true
   30 <= 30//menor o igual => true
   30 >= 30 //mayor o igual => true

   //?OPERADORES LOGICOS 
  30 < 10 && 30 < 15 //espera que las dos condiciones se cumplan 
  30 < 10 || 30 < 40 //al menos una de las condiciones se cumplan
   //!CONCATENANDO TIPOS DE DATOS
  // let nombreUser = `nicole`;
  // let apellidoUser = `romero`;
  // console.log(nombreUser + apellidoUser);
  // let primerNumero = 10;
  // let segundoNumero = 25;
  // console.log(`la suma de los 2 numeros es igual a : `+ (primerNumero + segundoNumero));

  //EJERCICIO: crea un programa que solicite al usuario su nombre y luego lo salude por su nombre.
  // let datoUsuario = prompt(`ingrese su nombre`)
  // alert(`hola buenas noches ` + datoUsuario);

  //EJERCICIO2: escribe un programa que imprima `hola mundo` en la consola
  // console.log(`hola mundo`);
  //EJERCICIO3: crea un programa que solicite al usuario su nombre y apellido en dos variables y luego lo salude por su completo
  // let nombreUsuario = prompt(`ingrese su nombre`);
  // let apellidoUsuario = prompt(`ingrese su apellido`);
  // alert(`Buenas noches ` +  nombreUsuario + " " + apellidoUsuario);
  //EJERCICIO4: escribe un programa que calcule la suma de dos numeros ingresados por el usuario y muestre el resultado
  // let numeroUno = prompt(`ingrese primer numero`);
  // let numeroDos = prompt(`ingrese segundo numero`);
  // let resultado = (numeroUno + numeroDos);
  // alert(`el resultado es: ` + resultado);

  // console.log("el dijo: \"hola mundo\"");

  // console.log("hola "+ "mundo");

  // let nombreUsuario = `nicole`;
  // let edadUsuario = 28;

  // console.log("hola tu nombre es " + nombreUsuario + " y tu edad es: " + edadUsuario);
  // console.log(`hola tu nombre es ${nombreUsuario} y tu edad es ${edadUsuario}`);