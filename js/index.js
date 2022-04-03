
let nom_User = prompt(
    "¡Bienvenido a BasketCol, por favor ingresa tu nombre.!"
);
class Marca {
    constructor(tipo) {
      this.tipo = tipo;
    }
}
class Producto {
    constructor(talla,precio) {
      this.talla = talla;
      this.talla = parseInt(precio);
    }
}
const Jordan  = new Marca("Jordan");
const Under_Armour= new Marca("Under Armour");
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
let MarcaElegida = [Jordan, Under_Armour, Nike,Adidas];

if (marca_user >0 && marca_user<=4) {
    console.log(`Hola ${nom_User}, seleccionaste la marca  ${MarcaElegida[marca_user - 1].tipo}`);

} else {
    
}
