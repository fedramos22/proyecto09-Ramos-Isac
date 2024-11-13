
//switch
 //PRIMERO :creamos una variable

let accion = "correr"

 //luego llamamos a switch entre () indicamos la variable a evaluar

switch (accion) {
     case "listar": //CASE nos ayuda a indicar lo que queremos realizar siempre y cuando coincida el contenido de la variable
      console.log("accion de listar");//debajo del case expesifico lo que quiero realizar
         break; //siempre se coloca despues del case

   case "guardar":
      console.log("accion de guardar");
      break;
     default: //sirve para ejecutar siempre y cuando ningun case corresponda a esa variable
      console.log("accion no reconocida");
      }