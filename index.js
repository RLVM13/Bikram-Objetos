//Objetos (1-4)
const Coche = {marca, modelo, matricula,};
const Casa = {codPostal, calle, portal, piso,};
const FullStackDeveloper={lenguajes, proyectos,};
let Perro={nombre, raza, color, edad, 
    ladrar : function(){return console.log("Guau!");}, 
    popo: function(){return (Math.random()*3)},
};

//Lectura de propiedades (5-8)
let marcaPortatil=Portatil.marca;
let marcaPortatil2 = Portatil["marca"];
let grupos=Concierto.grupos;
//let Led=[{rojo=43, verde=66, azul=456}];
let RGB=[Led.rojo, Led.verde, Led.azul];

//Modificacion de propiedades (9-12)
Portatil.modelo="P345";
Concierto.cartelera="Guns N' Roses";
Concierto.fecha=new Date("17/02/2024");
Impresora.imprimiendo=this.nombreArchivo, this.copias, this.numPaginas;

//Iteraciones - Pair Programming (13-17)
let Noticia={titular, cuerpo};
let Persona={nombre, apellidos, edad};
let Avion={numPasajeros, 
    despegar:function(){console.log("llegando al destino");},
    aterrizar:function(){console.log("aterrizando");}
};

let Paquete=[{contenido}];
let Pais={numHabitantes, continente, gentilicio};

//Lectura de propiedades (18-22)

const codError=O_Error.codigo;
const integrantes=Grupo.integrantes;
//const Impresora=[tinta{rojo, verde, azul}];
const nivelesTinta=Impresora.tinta;
//const Pantalla={Pixeles[][]};
const pixeles=Pantalla.Pixeles;
// const Movil


