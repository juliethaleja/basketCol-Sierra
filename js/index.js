let nom_User = prompt("¡Bienvenido a BasketCol, por favor ingresa tu nombre.!");
class Marca {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

const Jordan = new Marca("Jordan");
const Under_Armour = new Marca("Under Armour");
const Nike = new Marca("Nike");
const Adidas = new Marca("Adidas");
let marca_user = prompt(
  `Hola ${nom_User} ,por favor selecciona la marca que deseas ver:
     1. ${Jordan.tipo}
     2. ${Under_Armour.tipo}
     3. ${Nike.tipo}
     4. ${Adidas.tipo}
     5. Salir`
);
let MarcaElegida = [Jordan, Under_Armour, Nike, Adidas];
class Producto {
  constructor(talla, precio) {
    this.talla = talla;
    this.precio = parseInt(precio);
  }
}
const talla1 = new Producto("Zapatos (Baloncesto) talla 3", 150.0);
const talla2 = new Producto("Zapatos (Baloncesto) talla 4", 200.0);
const talla3 = new Producto("Zapatos (Baloncesto) talla 7", 100.0);
const talla4 = new Producto("Zapatos (Baloncesto) talla 10", 175.0);
const talla5 = new Producto("Zapatos (Baloncesto) talla 12", 250.0);
const talla6 = new Producto("Zapatos (Baloncesto) talla 14", 300.0);
const talla7 = new Producto("Zapatos (Baloncesto) talla 16", 265.0);

if (marca_user > 0 && marca_user <= 4) {
  console.log(
    `Hola ${nom_User}, seleccionaste la marca  ${
      MarcaElegida[marca_user - 1].tipo
    }`
  );
} else {
  let despedida = alert(
    `Gracias por visitarnos  ${nom_User}, espero volvernos a ver pronto `
  );
}
let ProductCompra = prompt(
  `Hola ${nom_User} ,estos son los productos que ofrecemos de la marca ${
    MarcaElegida[marca_user - 1].tipo
  } :
         1. ${talla1.talla} con un costo de ${talla1.precio}
         2. ${talla2.talla} con un costo de ${talla2.precio}
         3. ${talla3.talla} con un costo de ${talla3.precio}
         4. ${talla4.talla} con un costo de ${talla4.precio}
         5. ${talla5.talla} con un costo de ${talla5.precio}
         6. ${talla6.talla} con un costo de ${talla6.precio}
         7. ${talla7.talla} con un costo de ${talla7.precio}
         8. Salir`
);
function filtro() {
  if (marca_user > 0 && marca_user <= 4) {
    console.log(
      `Hola ${nom_User}, seleccionaste la marca  ${
        MarcaElegida[marca_user - 1].tipo
      }`
    );
  } else {
    let despedida = alert(
      `Gracias por visitarnos  ${nom_User}, espero volvernos a ver pronto `
    );
  }
  ProductCompra = prompt(
    `Hola ${nom_User} ,estos son los productos que ofrecemos de la marca ${
      MarcaElegida[marca_user - 1].tipo
    } :
         1. ${talla1.talla} con un costo de ${talla1.precio}
         2. ${talla2.talla} con un costo de ${talla2.precio}
         3. ${talla3.talla} con un costo de ${talla3.precio}
         4. ${talla4.talla} con un costo de ${talla4.precio}
         5. ${talla5.talla} con un costo de ${talla5.precio}
         6. ${talla6.talla} con un costo de ${talla6.precio}
         7. ${talla7.talla} con un costo de ${talla7.precio}
         8. Salir`
  );
}

let ProductElegida = [talla1, talla2, talla3, talla4, talla5, talla6, talla7];
let total = 0;
function Compras() {
  while (ProductCompra != 8) {
    if (ProductCompra > 0 && ProductCompra <= 7) {
      console.log(
        `hola ${nom_User} hola tu producto elegido es ${
          ProductElegida[ProductCompra - 1].talla
        } 
          con un costo de ${ProductElegida[ProductCompra - 1].precio} `
      );
      total += ProductElegida[ProductCompra - 1].precio;

      ProductCompra = prompt(
        `Hola ${nom_User} ,estos son los productos que ofrecemos de la marca ${
          MarcaElegida[marca_user - 1].tipo
        } :
               1. ${talla1.talla} con un costo de ${talla1.precio} pesos
               2. ${talla2.talla} con un costo de ${talla2.precio} pesos
               3. ${talla3.talla} con un costo de ${talla3.precio} pesos
               4. ${talla4.talla} con un costo de ${talla4.precio} pesos
               5. ${talla5.talla} con un costo de ${talla5.precio} pesos
               6. ${talla6.talla} con un costo de ${talla6.precio} pesos
               7. ${talla7.talla} con un costo de ${talla7.precio} pesos
               8. Salir`
      );
    } else {
      ProductCompra = prompt(
        `Hola ${nom_User} ,Ingresa un numero que corresponda a la  marca ${
          MarcaElegida[marca_user - 1].tipo
        } :
                   1. ${talla1.talla} con un costo de ${talla1.precio}
                   2. ${talla2.talla} con un costo de ${talla2.precio}
                   3. ${talla3.talla} con un costo de ${talla3.precio}
                   4. ${talla4.talla} con un costo de ${talla4.precio}
                   5. ${talla5.talla} con un costo de ${talla5.precio}
                   6. ${talla6.talla} con un costo de ${talla6.precio}
                   7. ${talla7.talla} con un costo de ${talla7.precio}
                   8. Salir`
      );
    }
  }
  console.log(`${nom_User}, el total de compra es ${total}`);
}
Compras();
let totalCuotas = 0;
let TipoPago = parseInt(
  prompt(`${nom_User}, indica que metodo de pago deseas usar:
  1. Debito
  2. Credito
  3. Efectivo`)
);
function tipo_pago() {
  while (  TipoPago < 3 ||  TipoPago >= 1 ||  TipoPago != "" ||  TipoPago === "efectivo") {
    if (TipoPago === 3) {
      alert(`${nom_User}, el total a pagar es de ${total} pesos en efectivo,muchas gracias por su compra.
  vuelve pronto.`);
      break;
    } else if (!isNaN(TipoPago) && TipoPago != "" && TipoPago === 2) {
      let cuotas = parseInt(
        prompt(`${nom_User}, indica que cuota deseas usar (maximo 48 cuotas):`)
      );
      if (cuotas > 0 && cuotas <= 48) {
        totalCuotas += total / cuotas;
        alert(
          `${nom_User}, el total a pagar es de ${totalCuotas} pesos en ${cuotas} cuotas. muchas gracias por su compra. `
        );
        break;
      } else {
        cuotas = parseInt(
          prompt(
            `${cuotas} no es una opcion valida, indica que cuota deseas usar:`
          )
        );
      }
    } else if (!isNaN(TipoPago) && TipoPago != "" && TipoPago === 1) {
      alert(`${nom_User}, el total a pagar es de ${total} pesos en efectivo,muchas gracias por su compra.
    vuelve pronto.`);
      break;
    } else {
      TipoPago = parseInt(
        prompt(`${nom_User}, indica que metodo de pago deseas usar:
    1. Debito
    2. Credito
    3. "Efectivo"`)
      );
    }
  }
}
tipo_pago();

