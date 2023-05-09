var miSustantivo = " Perro";
var miAdjetivo   = " Negro";
var miVerbo      = " Corrió";
var miAdverbio   = " Rápidamente";
var palabrasEnBlanco = "";


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

var estaciones = ["Primavera", "Verano", "Otoño"];

// estaciones.push("Invierno"); // Inserta "Invierno" al final del arreglo.

// Método POP, remueve el último elemento de un arreglo
// estaciones.pop(); // remueve  "Otoño" al final del arreglo.

// var estacion = estaciones.pop(); // Toma el valor que fue removido del arreglo y está guardado en POP

// Método .Shift remueve el primer elemento del arreglo

// estaciones.shift(); // remueve  "Primavera" al principio del arreglo.
// var estacion = estaciones.shift(); // Toma el valor que fue removido del arreglo y está guardado en shift

estaciones.unshift("Invierno"); // agrega  "Invierno" al principio del arreglo.

console.log(estaciones);
console.log(estacion);
