//Una funcion recibe dos parametros y tengo que saber cual es mayor

function CualEsMayor(a , b) {
    if (a > b) {
        return a;
        
    }
    else { return b;}
    
}

let mayor = CualEsMayor(10,15);
console.log(mayor);


// 2. Devolver el nombre de una resolucion 
/* Parametros: 
nom ancho x alto
8k 7680 x 4320
4k 3840 x 2160
WQHD 2560 X 1440
FHD 1920 X 1080
HD 1280 X 720 */

function nombreResolucion (ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4K';
        
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD';
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD';
        
    } else if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else {return 'NULL';
    }
}

let nombre = nombreResolucion (1366,768);
console.log(nombre);


//Imprimir solo los numeros impares del 0 al 10

for (let index = 0; index < 10; index++) {
    if (index % 2 != 0) {
        console.log('impar', index);   
    }
    
};

// Crear un algoritmo que devuelva el numero mayor y menor del array 

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor (arr) {
    let menor = arr[0];
    let mayor = arr[0];
    
for (num of arr)  {
/* menor = menor < num ? menor : num;
mayor = mayor > num ? mayor : num; */
if (num < menor) {
    menor = num
} else if (num > mayor) {
    mayor = num
}
    }
    return [menor , mayor];
}

let numeros = getMenorMayor (array)
console.log(numeros);

//crear un algoritmo que devuelva la cantidad de numeros positivos

function cuantosPositivos(arr) {
    let contador = 0
    for (numero of arr) {
        if (numero > 0) {
            contador++ } }
    return contador;
}

let resultado = cuantosPositivos(array);
console.log(resultado);

//Crear un algoritmo que devuelva el precio + el impuesto

function precioCompleto (precio, impuesto) {
    let precioTotal = precio + precio * impuesto;
    return precioTotal;
}

let total = precioCompleto(19.90, 0.15);
console.log(total);
