//Cuales son pares
let i = 0
while (i < 10) {

    if (i % 2 == 0) {
        console.log("numero par", i);
    }
    i++;
} 
console.log("i vale 10");  

/* DO WHILE
ejecuta primero y despues verifica la condicion */

do {
    if (i % 2 == 0) {
    console.log("numero par", i);
}
i++;
    
} while ((i < 10));

