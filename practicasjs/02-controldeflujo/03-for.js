//for of

let animales = ["chancho","perro","gato","vaca"];

for (let animal of animales) {

    console.log(animal);
    
}

//for in

let usuario = {
    id: 1,
    nombre: "nacho",
    apellido: "roberts",
    edad: 31,
};

//para poder iterar el contenido del objeto junto a su valor utilizo for in

for (let prop in usuario) {
    console.log(prop, usuario [prop]);
    
}  