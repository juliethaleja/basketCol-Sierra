/* 

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
function filtro() {
  if (marca_user > 0 && marca_user <= 4) {
    console.log(
      `Hola ${nom_User}, seleccionaste la marca  ${MarcaElegida[marca_user - 1].tipo
      }`
    );
  } else {
    let despedida = alert(
      `Gracias por visitarnos  ${nom_User}, espero volvernos a ver pronto `
    );
  }
}
filtro();
let ordenar_por = prompt(
  `Hola ${nom_User} ,deseas ordenar los productos,por favor selecciona:
         1. Si
         2. No`
);

let ProductCompra;
let ProductElegida = [talla1, talla2, talla3, talla4, talla5, talla6, talla7];
let total = 0;
let totalCuotas = 0;
let TipoPago;
function ordenar() {
  if (ordenar_por === '1') {
    let metodo = prompt(
      `${nom_User}, selecciona el metodo de ordenamiento:
      1. Menor a mayor
      2. Mayor a menor a menor
      3. Salir`);
    while (metodo != 3) {
      if (metodo === '1') {
        ProductElegida.sort(function (a, b) {
          return a.precio - b.precio;
        });
        for (let poduct of ProductElegida) {
          console.log(` ${poduct.talla} con un costo de ${poduct.precio}`);

        }
      } else if (metodo === '2') {
        ProductElegida.sort(function (a, b) {
          return b.precio - a.precio;
        });
        for (let poduct of ProductElegida) {
          console.log(` ${poduct.talla} con un costo de ${poduct.precio}`);
        }
      }
      metodo = prompt(
        `${nom_User}, selecciona el metodo de ordenamiento:
      1. Menor a mayor
      2. Mayor a menor a menor
      3. Salir`);
    }

  } else {
    ProductCompra = prompt(
      `Hola ${nom_User} ,estos son los productos que ofrecemos de la marca ${MarcaElegida[marca_user - 1].tipo} :
         1. ${talla1.talla} con un costo de ${talla1.precio}
         2. ${talla2.talla} con un costo de ${talla2.precio}
         3. ${talla3.talla} con un costo de ${talla3.precio}
         4. ${talla4.talla} con un costo de ${talla4.precio}
         5. ${talla5.talla} con un costo de ${talla5.precio}
         6. ${talla6.talla} con un costo de ${talla6.precio}
         7. ${talla7.talla} con un costo de ${talla7.precio}
         8. Salir`
    );
    Compras();
    tipo_pago();
  }
}
ordenar();
function Compras() {
  while (ProductCompra != 8) {
    if (ProductCompra > 0 && ProductCompra <= 7) {
      console.log(
        `hola ${nom_User} hola tu producto elegido es ${ProductElegida[ProductCompra - 1].talla
        } 
          con un costo de ${ProductElegida[ProductCompra - 1].precio} `
      );
      total += ProductElegida[ProductCompra - 1].precio;

      ProductCompra = prompt(
        `Hola ${nom_User} ,estos son los productos que ofrecemos de la marca ${MarcaElegida[marca_user - 1].tipo
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
        `Hola ${nom_User} ,Ingresa un numero que corresponda a la  marca ${MarcaElegida[marca_user - 1].tipo
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

function tipo_pago() {
  while (TipoPago < 3 || TipoPago >= 1 || TipoPago != "" || TipoPago === "efectivo") {
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
} */
const producto = [
  {
    id: 1,
    modelo: 'Tenis OwnTheGame',
    marca: 'Adidas',
    precio: '339.990',
    talla: ['UN', '3'],
    img: 'img/ADIDAS1.png'
  },
  {
    id: 2,
    modelo: 'Air Jordan 7 Retro SE',
    marca: 'Jordan',
    precio: '784.000',
    talla: ['16', '4'],
    img: 'img/JORDAN1.png'
  },
  {
    id: 3,
    modelo: 'Kyrie Infinity',
    marca: 'Nike',
    precio: '484.900',
    talla: ['10', '12'],
    img: 'img/NIKE 1.png',
  },
  {
    id: 4,
    modelo: 'Tenis de Basketball UA GS Lockdown 5',
    marca: 'Under Amuor',
    precio: '339.990',
    talla: ['14', '7'],
    img: 'img/UNAM1.png'
  },
  {
    id: 5,
    modelo: 'Air Jordan OG',
    marca: 'Jordan',
    precio: '522.900',
    talla: ['UN', '8'],
    img: 'img/JORDAN2.png'
  },
  {
    id: 6,
    modelo: 'Tenis Postmove Mid',
    marca: 'Adidas',
    precio: '369.990',
    talla: ['3', '4'],
    img: 'img/ADIDAS2.png',
  },
  {
    id: 7,
    modelo: 'Nike Air Zoom G.T. Jump',
    marca: 'Nike',
    precio: '671.990',
    talla: ['12', '16'],
    img: 'img/NIKE2.png',
  },
  {
    id: 8,
    modelo: 'Tenis Cross Em Up 5 K Anchos',
    marca: 'Adidas',
    precio: '279.990',
    talla: ['7', '4'],
    img: 'img/ADIDAS3.png',
  },
  {
    id: 9,
    modelo: 'UA Jet 21 Unisex',
    marca: 'Under Amour',
    precio: '359.990',
    talla: ['16', '10'],
    img: 'img/UNAM2.png',
  },
  {
    id: 10,
    modelo: 'Air Jordan XXXVI',
    marca: 'Jordan',
    precio: '689.990',
    talla: ['12', '14'],
    img: 'img/JORDAN3.png',
  },
  {
    id: 11,
    modelo: 'UA HOVR Havoc 3',
    marca: 'Under Amour',
    precio: '245.990',
    talla: ['14', 'UN'],
    img: 'img/UNAM3.png',
  },
  {
    id: 12,
    modelo: 'Zion 1',
    marca: 'Nike',
    precio: '313.990',
    talla: ['14', '7'],
    img: 'img/NIKE3.png',
  },
];
const pesos = '$';
const productos = document.querySelector('#productos');

function EstructuraProductos() {
  producto.forEach((info) => {
    //base
    const estructura = document.createElement('div');
    estructura.classList.add('col-sm-4');
    // Estructura
    const card = document.createElement('div');
    card.classList.add('card');
    // Body
    const CardBody = document.createElement('div');
    CardBody.classList.add('card-content');
    // Titulo
    const CardTitle = document.createElement('h5');
    CardTitle.classList.add('title', 'is-7');
    CardTitle.textContent = info.modelo;
    // Imagen
    const CardImagen = document.createElement('div');
    const CardFigure = document.createElement('figure');
    const Img = document.createElement('img');
    CardImagen.classList.add('card-image');
    CardFigure.classList.add('image', 'is-4by3');
    Img.setAttribute('src', info.img);
    CardFigure.insertAdjacentElement("afterbegin", Img);
    CardImagen.insertAdjacentElement("afterbegin", CardFigure);
    // Precio
    const text_precio = document.createElement('p');
    text_precio.classList.add('subtitle', 'is-8');
    text_precio.textContent = `${pesos}${info.precio}`;

    const text_marca = document.createElement('p');
    text_marca.classList.add('is-8');
    text_marca.textContent = `Marca ${info.marca}`;

    const text_talla = document.createElement('div');
    const select_talla = document.createElement('select');
    let tallas = info.talla;
    let select = `<select>
                  <option>Talla</option>`
    tallas.forEach(value => {
      select += `<option> ${value}</option>`;
    });
    select += `</select><br/>`;

    select_talla.innerHTML = select;

    text_talla.classList.add('select', 'is-primary');
    text_talla.insertAdjacentElement("beforeend", select_talla);

    // Boton 
    /*     const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito); */
    // Insertamos

    estructura.appendChild(card);
    CardBody.appendChild(CardTitle);
    CardBody.appendChild(text_precio);
    CardBody.appendChild(text_marca);
    CardBody.appendChild(text_talla);
    /*  CardBody.appendChild(miNodoBoton);*/
    card.appendChild(CardImagen);
    card.appendChild(CardBody);
    productos.appendChild(estructura);
  });
}
EstructuraProductos();

let base = document.getElementById("base");
let class_nike = document.getElementsByClassName("nike");
let class_adidas = document.getElementsByClassName("adidas");
let class_unam = document.getElementsByClassName("unam");
let class_jordan = document.getElementsByClassName("jordan");
let jordan = document.getElementById("jordan");
jordan.onclick = () => {

  for (var i = 0; i < class_nike.length; i++) {
    class_nike[i].style.display = 'none'
  }
  for (var i = 0; i < class_adidas.length; i++) {
    class_adidas[i].style.display = 'none'
  }
  for (var i = 0; i < class_unam.length; i++) {
    class_unam[i].style.display = 'none'
  }
  for (var i = 0; i < class_jordan.length; i++) {
    class_jordan[i].style.display = 'block'
    base.appendChild(class_jordan[i]);
  }
};
let nike = document.getElementById("nike");
nike.onclick = () => {
  let insert;
  for (var i = 0; i < class_jordan.length; i++) {
    class_jordan[i].style.display = 'none'
  }
  for (var i = 0; i < class_adidas.length; i++) {
    class_adidas[i].style.display = 'none'
  }
  for (var i = 0; i < class_unam.length; i++) {
    class_unam[i].style.display = 'none'
  }
  for (var i = 0; i < class_nike.length; i++) {
    class_nike[i].style.display = 'block'
    insert = base.appendChild(class_nike[i]);
  }
};
let adidas = document.getElementById("adidas");
adidas.onclick = () => {
  for (var i = 0; i < class_jordan.length; i++) {
    class_jordan[i].style.display = 'none'
  }
  for (var i = 0; i < class_nike.length; i++) {
    class_nike[i].style.display = 'none'
  }
  for (var i = 0; i < class_unam.length; i++) {
    class_unam[i].style.display = 'none'
  }
  for (var i = 0; i < class_adidas.length; i++) {
    class_adidas[i].style.display = 'block'
    base.appendChild(class_adidas[i]);
  }
};
let umna = document.getElementById("unam");
umna.onclick = () => {
  for (var i = 0; i < class_jordan.length; i++) {
    class_jordan[i].style.display = 'none'
  }
  for (var i = 0; i < class_nike.length; i++) {
    class_nike[i].style.display = 'none'
  }
  for (var i = 0; i < class_adidas.length; i++) {
    class_adidas[i].style.display = 'none'
  }
  for (var i = 0; i < class_unam.length; i++) {
    class_unam[i].style.display = 'block'
    base.appendChild(class_unam[i]);
  }
};