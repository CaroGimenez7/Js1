//? FORMA DE CREAR OBJETOS CON NOTACION LITERAL
let person = {
    name: `matias`,
    age: 30,
    location: `San Miguel de Tucuman`,
    hobbies: [`andar en bici`, `programar`],
    pet: [
        {
            name: `firulais`,
            type: `dog`
        },
        {
            name: `Blanco`,
            type: `cat`
        }
    ],
    children: false,
    saludar: function () {
        console.log(`hola chicos soy Matias`)
    }
}

let persona2 = {
    name: `messi`,
    age: 36,
    dni: 2577656,
    children: [
        {
            name: `thiago`,
            age: 10
        },{
            name: `mateo`,
            age:4
        },{
            name: `ciro`,
            age: 4,
            pet: [`toto`,`coco`]
        }

    ]
}

//todo CREANDO OBJETOS A PARTIR DE FUNCIONES CONSTRUCTORAS

function Team (name,colors, people){
    this.name = name;
    this.colors = colors;
    this.people = people;
}
let sanMartin = new Team(`san Martin de Tucuman`, [`rojo`, `blanco`], 70000) //instanciando
let atletico = new Team(`Atletico Tucuman`, [`celeste`,`blanco`], 80000) //instanciando
console.log(atletico)

//todo CREANDO OBJETOS A PARTIR DE CLASES
class Country {
    constructor(name, people){
        this.name = name;
        this.people = people;
    }

}

const argentina = new Country(`Argentina`,40000); //instanciando
const brasil = new Country(`Brasil`, 800000); //instanciando

//? MANEJANDO OBJETOS, Y TIPOS DE DATOS ALMACENADOS

let productos = [
    {id:1, nombre: `fideo`, descripcion: `fideos tirabuzon rivoli`, precio: 200, categoria: [`familiar`,`alimentos`]},
    {id:2, nombre:`arroz`, descripcion: `arroz largo 53`, precio: 200, categoria: [`familia`, `comestibles`]}
]
console.log(productos.nombre)
console.log(productos[0].nombre)

//! EJERCICIO 1

//con clases
class Peliculas {
    constructor(titulo, genero, año, sinopsis){
        this.titulo = titulo;
        this.genero = genero;
        this.año = año;
        this.sinopsis = sinopsis;
    }

}
 
const spiderMan = new Peliculas(`Spider Man`, `drama`, 2016, `Peter es picado por una araña y tiene poderes`)
const conjuro2 = new Peliculas(`Conjuro2`, `terror`, 2019, `el reaparecimiento de un demonio que persigue a toda una familia`)
console.log(spiderMan)

//funcion

let pelis = [
    {id: `1`, name: `spiderman`, año: 2001, sinopsis: `el heroe regresa`},
    {id: `2`, name: `The Batman`, año: 2020, sinopsis: `el caballero de la noche vive una aventura`},
    {id: `3`, name: `midsomar`, año: 2018, sinopsis: `vive la aventura de una secta` },
    {id: `4`, name: `seven`, año: 2005, sinopsis: `descubre un caso aterrador`},
    {nombrePelis: function(){
        console.log(pelis[0].sinopsis)
        console.log(pelis[1].name)
        console.log(pelis[2].name)
        console.log(pelis[3].name)
    }}
]
