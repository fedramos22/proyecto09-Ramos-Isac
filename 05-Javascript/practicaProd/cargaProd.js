
let botonCargar = document.getElementById("boton")
let misProductos = [];


let nombreProducto = document.getElementById("NombreProducto").value;
let precioProducto = document.getElementById("PrecioProducto").value;
let StockSi = document.getElementById("stockSi").value;
let StockNo = document.getElementById("stockNo").value;


botonCargar.addEventListener ("click", (e) => {

    e.preventDefault();

let producto = {
    nombre: nombreProducto,
    precio: precioProducto,
    StockSi: StockSi,
    StockNo: StockNo,
};

misProductos.push(producto);

console.log(misProductos);

localStorage.setItem ("productos", JSON.stringify(misProductos))
cargarTabla();
})




let botonListar = document.getElementById("botonListar");

botonListar.addEventListener("click", (e) => {
    e.preventDefault();
    cargarTabla();
});
//Tomamos el cuerpo de la tabla, y borramos el contenido
const cargarTabla = () => {
    

    let bodyTabla = document.getElementById("bodyTabla");
    

    //creamos una fila de la tabla
    let fila = document.createElement('tr');

    //creamos las columnas
    let columnaNombre = document.createElement('td');
    console.log(columnaNombre);

    let columnaPrecio = document.createElement('td');
    console.log(columnaPrecio);
    
    let columnaSi = document.createElement('td');
    console.log(columnaSi);
    
    let columnaNo = document.createElement('td');
    console.log(columnaNo);
    

    //Agregamos los valores previamente establecidos a las columnas con un bucle
    for (let index = 0; index < misProductos.length; index++) {
        columnaNombre.innerHTML = misProductos[index].nombre;
        columnaPrecio.innerHTML = misProductos[index].precio;
        columnaSi.innerHTML = misProductos[index].StockSi;
        columnaNo.innerHTML = misProductos[index].StockNo;
        
    }
    //Agrego la comulna cargada a la fila
    fila.appendChild(columnaNombre);
    fila.appendChild(columnaPrecio);
    fila.appendChild(columnaSi);
    fila.appendChild(columnaNo);
    //Agrego la fila al elemento body de html
    bodyTabla.appendChild(fila);
} //estos datos estan presentes en el local storage de la consola

//Tomar datos del local storage y mostrarlo al cliente 

