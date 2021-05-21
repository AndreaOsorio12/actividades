
/*
Algoritmo prestamo
   Declarar la variable del monto del prestamo, pedir que ingresen el valor a prestar
   Declarar la variable de plazo, pedir que indiquen el numero de cuotas en meses
   Asignar el interes como una constante
   realizar el calculo del valor a pagar por mes sin interes
   mostrar el valor que debe pagar al mes sin interes
   calcular el valor total a pagar por mes con interes
   mostrar el valor total a pagar por mes con interes

FinAlgoritmo
*/

let montoPrestamo = parseInt(prompt("Por favor ingrese el valor a prestar"));
let plazo = prompt("Por favor ingrese la cantidad de cuotas");
const Interes = 0.027
let pagoMensualSinInteres = montoPrestamo / plazo;
console.log("Pago mensual sin interes: ", pagoMensualSinInteres);
let pagoMensualConInteres = pagoMensualSinInteres*Interes + pagoMensualSinInteres;
console.log("Pago mensual con interes: ", pagoMensualConInteres);

//PAGO MENSUAL SIN INTERES= MONTO / NUMERO DE CUOTAS
//PAGO MENSUAL CON INTERES = PAGO MENSUAL SIN INTERES*0.027 +  PAGO MENSUAL SIN INTERES