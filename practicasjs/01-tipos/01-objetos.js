// objetos literales
let receta = {
    proteina: "pollo",
    verdura: "puerro",
    condimento: "pimeinta",};

    console.log(receta);
    console.log(receta.proteina);

//para modificar el contenido de mi variable

receta.condimento = "pimienta";

console.log(receta.condimento);

//eliminar una varible del objeto
delete receta.verdura;

console.log(receta);