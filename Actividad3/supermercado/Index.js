const producto = prompt("Por favor ingrese el nombre del producto");
/*let lentejas = "valor";
let arroz = "valor";

let vino = "valor";
let crema = "valor";
console.log(lentejas||arroz, "No paga IVA");
console.log(vino||crema, "Paga Iva");*/



const productoIva = {lentejas: "No paga IVA",
arroz: "No paga IVA",
vino: "Paga IVA",
crema: "Paga IVA",}
console.log("El producto ", producto, productoIva[producto]);

