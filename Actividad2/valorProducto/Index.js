
/*
Algoritmo Descuente
   Declarar la variable valor del producto, pedir que ingresen el precio del producto
   Declarar la constante de descuento
   calcular el valor del producto con el descuento
   imprimir el valor final del producto

FinAlgoritmo
*/

let valorProducto = parseInt(prompt("Por favor Ingrese el valor del producto"));
const descuento = 0.1;
let valorFinal = valorProducto - valorProducto * descuento;
console.log("Precio final: ", valorFinal);
