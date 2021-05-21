
/*
Algoritmo porcentaje_a_calcular
   Declarar la variable cantidad, pedir que ingresen la cantidad a la cual le quire sacar el porcentaje
   Declarar la variable porcentaje, pedir que ingresen el porcentaje a calcular
   calcular el porcentaje de la cantidad
   imprimir el porcentaje de la cantidad

FinAlgoritmo
*/

let cantidad = prompt("Por favor Ingrese la cantidad");
let porcentaje = prompt("Por favor Ingrese el porcentaje");
let cantidadConPorcentaje = cantidad * porcentaje / 100;
console.log ("valor del porcentaje calculado: ", cantidadConPorcentaje, "porciento");