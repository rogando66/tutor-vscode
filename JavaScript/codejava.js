// var miSustantivo = " Perro";
// var miAdjetivo   = " Negro";
// var miVerbo      = " Corrió";
// var miAdverbio   = " Rápidamente";
// var palabrasEnBlanco = "";


// El perro negro corrió rápidamente a la tienda.

// palabrasEnBlanco =  "El" + miSustantivo + miAdjetivo + miVerbo + miAdverbio + " a la tienda";

// console.log(palabrasEnBlanco);

// Arreglos anidados

// var arregloAnidado = [["alumno", "materia", "nota"], ["Malaikia", "Fisica", 90], ["Tiffany", "Filosofia", 100], ["Ricardo", "Algebra", 89]];

// var arreglo = ["alumno", "materia", "nota"]

// console.log(arreglo[0]);

// arreglo[0] = [1, 2, 3];

// console.log(arreglo);

// console.log(arregloAnidado[1][0]); // El primer indice es el del arreglo y el segundo es el del elemento del arreglo

// Método Push

// var estaciones = ["Primavera", "Verano", "Otoño"];

// estaciones.push("Invierno"); // Inserta "Invierno" al final del arreglo.

// Método POP, remueve el último elemento de un arreglo
// estaciones.pop(); // remueve  "Otoño" al final del arreglo.

// var estacion = estaciones.pop(); // Toma el valor que fue removido del arreglo y está guardado en POP

// Método .Shift remueve el primer elemento del arreglo

// estaciones.shift(); // remueve  "Primavera" al principio del arreglo.
// var estacion = estaciones.shift(); // Toma el valor que fue removido del arreglo y está guardado en shift

// estaciones.unshift("Invierno"); // agrega  "Invierno" al principio del arreglo.

// console.log(estaciones);
// console.log(estacion);

// Lista de compras
// var listaDeCompras = [["cereal", 10], ["leche", 5], ["galletas", 2], ["pan", 4], ["refrescos", 8], ["pollo", 3]];

// console.log("Voy a comprar " + listaDeCompras[0][1] + " unidades de " + listaDeCompras[0][0]);
// console.log(", " + listaDeCompras[1][1] + " unidades de " + listaDeCompras[1][0]);
// console.log(", " + listaDeCompras[2][1] + " unidades de " + listaDeCompras[2][0]);
// console.log(", " + listaDeCompras[3][1] + " unidades de " + listaDeCompras[3][0]);
// console.log(", " + listaDeCompras[4][1] + " unidades de " + listaDeCompras[4][0]);
// console.log(", " + listaDeCompras[5][1] + " unidades de " + listaDeCompras[5][0]);


// // Funciones

// function mostrarMensaje() {     // Inicio creación de una función
//     console.log("Hola mundo");
// } // fin creación de una función

// mostrarMensaje(); // Como invocar a una función
// mostrarMensaje(); // Como invocar a una función
// mostrarMensaje(); // Como invocar a una función

// Funciones con argumentos o parámetros

// function sumar(par1, par2) { // Par1 y Par2 son argumentos o parámetros.
//     var suma = par1 + par2;
//     console.log("El resultado de " + par1 + " + " + par2 + " es igual a " + suma);
// }

// sumar(8, 9); // Llamando la función sumar

// // Variables globales, son las que están definidas dentro del programa principal.

// var variableGlobal = 5;

// console.log(variableGlobal); // Fuera de la función

// function miFuncion() {
//     console.log(variableGlobal); //Dentro de la función
// }

// miFuncion(); //Dentro de la función

// console.log(variableGlobal); // Fuera de la función


// Variable local, son aquellas que son declaradas dentro de una función.

// function miFuncion() {
//     var variableLocal = 4;
//     console.log(variableLocal);
// }

// miFuncion();

// console.log(variableLocal); //Presenta un error porque está definida dentro de la función

// Si se trata de utilizar dos variables con el mismo nombre, una declarada local y otra global, ambas van a ser tomadas en cuenta en el programa principal.

// var miNombre = "Rafael";

// function mifuncion() {
//     var miNombre = "Ogando";
//     console.log(miNombre);
// }

// mifuncion();
// console.log(miNombre);

// Retornar un valor en la función

// function fsumar(par1, par2) {
//     return par1 + par2   // Se utiliza return para devolver el valor
// }

// par1 = 5;
// par2 = 9

// console.log("El resultado de " + par1 + " + " + par2 + " es " + fsumar(par1, par2));

// Undefine es el valor que devuelve una función cuando no tiene un retunr en su código

// function fsumar(par1, par2) {
//     console.log(par1, par2);
// }

// console.log(fsumar(5,3)); // Este devuelve un Undefine por consola.

// // Funciones asignando el valor a una variable

// function fsumar(par1, par2) { // Par1 y Par2 son argumentos o parámetros.
//     return par1 + par2;
// }

// var lvResultado = fsumar(5, 8); //Le asignamos el resultado de la suma  a la variable lvResultado

// console.log(lvResultado);

// Próximo en la fila

var fila = [["Juan"], ["José"], ["Pedro"], ["Jesus"], ["María"], ["Janett"], ["Tiffany"]];

console.log(fila);

function proximoEnFila(arreglo,elemento) {
    arreglo.push(elemento);
    var eliminado = arreglo.shift();
    return eliminado;
}

var eliminado = proximoEnFila(fila, 8);

console.log(eliminado);

