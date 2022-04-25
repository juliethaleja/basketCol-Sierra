//Variables de los productos
const producto = [
  {
    id: 1,
    modelo: "Tenis OwnTheGame",
    marca: "Adidas",
    precio: "339.990",
    talla: ["UN", "3"],
    img: "img/ADIDAS1.png",
  },
  {
    id: 2,
    modelo: "Air Jordan 7 Retro SE",
    marca: "Jordan",
    precio: "784.000",
    talla: ["16", "4"],
    img: "img/JORDAN1.png",
  },
  {
    id: 3,
    modelo: "Kyrie Infinity",
    marca: "Nike",
    precio: "484.900",
    talla: ["10", "12"],
    img: "img/NIKE 1.png",
  },
  {
    id: 4,
    modelo: "Tenis de Basketball UA GS Lockdown 5",
    marca: "Under Amour",
    precio: "339.990",
    talla: ["14", "7"],
    img: "img/UNAM1.png",
  },
  {
    id: 5,
    modelo: "Air Jordan OG",
    marca: "Jordan",
    precio: "522.900",
    talla: ["UN", "10"],
    img: "img/JORDAN2.png",
  },
  {
    id: 6,
    modelo: "Tenis Postmove Mid",
    marca: "Adidas",
    precio: "369.990",
    talla: ["3", "4"],
    img: "img/ADIDAS2.png",
  },
  {
    id: 7,
    modelo: "Nike Air Zoom G.T. Jump",
    marca: "Nike",
    precio: "671.990",
    talla: ["12", "16"],
    img: "img/NIKE2.png",
  },
  {
    id: 8,
    modelo: "Tenis Cross Em Up 5 K Anchos",
    marca: "Adidas",
    precio: "279.990",
    talla: ["7", "4"],
    img: "img/ADIDAS3.png",
  },
  {
    id: 9,
    modelo: "UA Jet 21 Unisex",
    marca: "Under Amour",
    precio: "359.990",
    talla: ["16", "10"],
    img: "img/UNAM2.png",
  },
  {
    id: 10,
    modelo: "Air Jordan XXXVI",
    marca: "Jordan",
    precio: "689.990",
    talla: ["12", "14"],
    img: "img/JORDAN3.png",
  },
  {
    id: 11,
    modelo: "UA HOVR Havoc 3",
    marca: "Under Amour",
    precio: "245.990",
    talla: ["14", "UN"],
    img: "img/UNAM3.png",
  },
  {
    id: 12,
    modelo: "Zion 1",
    marca: "Nike",
    precio: "313.990",
    talla: ["14", "7"],
    img: "img/NIKE3.png",
  },
];
const pesos = "$";
const productos = document.querySelector("#productos");

//FUNCION PARA MOSTRAR PRODUCTOS EN CARDS
function EstructuraProductos() {
  producto.forEach((info) => {
    //Estructura
    const estructura = document.createElement("div");
    estructura.classList.add("col-sm-4");
    // Card
    const card = document.createElement("div");
    card.classList.add("card");
    // Body
    const CardBody = document.createElement("div");
    CardBody.classList.add("card-content");
    // Titulo
    const CardTitle = document.createElement("h5");
    CardTitle.classList.add("title", "is-7");
    CardTitle.textContent = info.modelo;
    // Imagen
    const CardImagen = document.createElement("div");
    const CardFigure = document.createElement("figure");
    const Img = document.createElement("img");
    CardImagen.classList.add("card-image");
    CardFigure.classList.add("image", "is-4by3");
    Img.setAttribute("src", info.img);
    CardFigure.insertAdjacentElement("afterbegin", Img);
    CardImagen.insertAdjacentElement("afterbegin", CardFigure);
    // Precio
    const text_precio = document.createElement("p");
    text_precio.classList.add("subtitle", "is-8");
    text_precio.textContent = `${pesos}${info.precio}`;
    //Marca
    const text_marca = document.createElement("p");
    text_marca.classList.add("is-8");
    text_marca.textContent = `Marca ${info.marca}`;
    //Talla
    const text_talla = document.createElement("div");
    const select_talla = document.createElement("select");
    let tallas = info.talla;
    let select = `<select>
                  <option>Talla</option>`;
    tallas.forEach((value) => {
      select += `<option value=${value}> ${value}</option>`;
    });
    select += `</select><br/>`;

    select_talla.innerHTML = select;

    text_talla.classList.add("select", "is-primary");
    text_talla.insertAdjacentElement("beforeend", select_talla);

    // Boton
    // Boton
    const Agregar = document.createElement("button");
    Agregar.classList.add("button", "is-primary","is-pulled-right");
    Agregar.textContent = "+ agregar";
    Agregar.setAttribute("marcador", info.id);
/*     Agregar.addEventListener("click", anyadirProductoAlCarrito);
 */
    // Insercion de los elmentos
    estructura.appendChild(card);
    CardBody.appendChild(CardTitle);
    CardBody.appendChild(text_precio);
    CardBody.appendChild(text_marca);
    CardBody.appendChild(text_talla);
    CardBody.appendChild(Agregar);
    card.appendChild(CardImagen);
    card.appendChild(CardBody);
    productos.appendChild(estructura);
  });
}
EstructuraProductos();

//FUNCION PARA FILTRAR POR MARCA
function MarcaFiltrar(marca) {
  let EliminarCard = Array.prototype.slice.call(
    document.getElementsByClassName("col-sm-4"),
    0
  );
  for (Eliminar of EliminarCard) {
    Eliminar.remove();
  }
  marca.forEach((info) => {
    //Estructura
    const estructura = document.createElement("div");
    estructura.classList.add("col-sm-4");
    // Card
    const card = document.createElement("div");
    card.classList.add("card");
    // Body
    const CardBody = document.createElement("div");
    CardBody.classList.add("card-content");
    // Titulo
    const CardTitle = document.createElement("h5");
    CardTitle.classList.add("title", "is-7");
    CardTitle.textContent = info.modelo;
    // Imagen
    const CardImagen = document.createElement("div");
    const CardFigure = document.createElement("figure");
    const Img = document.createElement("img");
    CardImagen.classList.add("card-image");
    CardFigure.classList.add("image", "is-4by3");
    Img.setAttribute("src", info.img);
    CardFigure.insertAdjacentElement("afterbegin", Img);
    CardImagen.insertAdjacentElement("afterbegin", CardFigure);
    // Precio
    const text_precio = document.createElement("p");
    text_precio.classList.add("subtitle", "is-8");
    text_precio.textContent = `${pesos}${info.precio}`;
    //Marca
    const text_marca = document.createElement("p");
    text_marca.classList.add("is-8");
    text_marca.textContent = `Marca ${info.marca}`;
    //Talla
    const text_talla = document.createElement("div");
    const select_talla = document.createElement("select");
    let tallas = info.talla;
    let select = `<select>
                  <option>Talla</option>`;
    tallas.forEach((value) => {
      select += `<option value=${value}> ${value}</option>`;
    });
    select += `</select><br/>`;

    select_talla.innerHTML = select;

    text_talla.classList.add("select", "is-primary");
    text_talla.insertAdjacentElement("beforeend", select_talla);
    // Boton
    /*     const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
  miNodoBoton.addEventListener('click', anyadirProductoAlCarrito); */

    // Insercion de los elmentos
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
//FUNCION PARA FILTRAR POR TALLA
function TallaFiltrar(talla) {
  let EliminarCard = Array.prototype.slice.call(
    document.getElementsByClassName("col-sm-4"),
    0
  );
  for (Eliminar of EliminarCard) {
    Eliminar.remove();
  }
  talla.forEach((info) => {
    //Estructura
    const estructura = document.createElement("div");
    estructura.classList.add("col-sm-4");
    // Card
    const card = document.createElement("div");
    card.classList.add("card");
    // Body
    const CardBody = document.createElement("div");
    CardBody.classList.add("card-content");
    // Titulo
    const CardTitle = document.createElement("h5");
    CardTitle.classList.add("title", "is-7");
    CardTitle.textContent = info.modelo;
    // Imagen
    const CardImagen = document.createElement("div");
    const CardFigure = document.createElement("figure");
    const Img = document.createElement("img");
    CardImagen.classList.add("card-image");
    CardFigure.classList.add("image", "is-4by3");
    Img.setAttribute("src", info.img);
    CardFigure.insertAdjacentElement("afterbegin", Img);
    CardImagen.insertAdjacentElement("afterbegin", CardFigure);
    // Precio
    const text_precio = document.createElement("p");
    text_precio.classList.add("subtitle", "is-8");
    text_precio.textContent = `${pesos}${info.precio}`;
    //Marca
    const text_marca = document.createElement("p");
    text_marca.classList.add("is-8");
    text_marca.textContent = `Marca ${info.marca}`;
    //Talla
    const text_talla = document.createElement("div");
    const select_talla = document.createElement("select");
    let tallas = info.talla;
    let select = `<select>
                  <option>Talla</option>`;
    tallas.forEach((value) => {
      select += `<option value=${value}> ${value}</option>`;
    });
    select += `</select><br/>`;

    select_talla.innerHTML = select;

    text_talla.classList.add("select", "is-primary");
    text_talla.insertAdjacentElement("beforeend", select_talla);
    // Boton
    /*     const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
  miNodoBoton.addEventListener('click', anyadirProductoAlCarrito); */

    // Insercion de los elmentos
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
//FUNCION PARA ORDENAR PRECIOS
function PrecioMenor() {
  let EliminarCard = Array.prototype.slice.call(
    document.getElementsByClassName("col-sm-4"),
    0
  );
  for (Eliminar of EliminarCard) {
    Eliminar.remove();
  }
  producto.sort(function (a, b) {
    return a.precio - b.precio;
  });
  for (let poduct of producto) {
    //Estructura
    const estructura = document.createElement("div");
    estructura.classList.add("col-sm-4");
    // Card
    const card = document.createElement("div");
    card.classList.add("card");
    // Body
    const CardBody = document.createElement("div");
    CardBody.classList.add("card-content");
    // Titulo
    const CardTitle = document.createElement("h5");
    CardTitle.classList.add("title", "is-7");
    CardTitle.textContent = poduct.modelo;
    // Imagen
    const CardImagen = document.createElement("div");
    const CardFigure = document.createElement("figure");
    const Img = document.createElement("img");
    CardImagen.classList.add("card-image");
    CardFigure.classList.add("image", "is-4by3");
    Img.setAttribute("src", poduct.img);
    CardFigure.insertAdjacentElement("afterbegin", Img);
    CardImagen.insertAdjacentElement("afterbegin", CardFigure);
    // Precio
    const text_precio = document.createElement("p");
    text_precio.classList.add("subtitle", "is-8");
    text_precio.textContent = `${pesos}${poduct.precio}`;
    //Marca
    const text_marca = document.createElement("p");
    text_marca.classList.add("is-8");
    text_marca.textContent = `Marca ${poduct.marca}`;
    //Talla
    const text_talla = document.createElement("div");
    const select_talla = document.createElement("select");
    let tallas = poduct.talla;
    let select = `<select>
                  <option>Talla</option>`;
    tallas.forEach((value) => {
      select += `<option value=${value}> ${value}</option>`;
    });
    select += `</select><br/>`;

    select_talla.innerHTML = select;

    text_talla.classList.add("select", "is-primary");
    text_talla.insertAdjacentElement("beforeend", select_talla);
    // Boton
    /*     const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', poduct.id);
  miNodoBoton.addEventListener('click', anyadirProductoAlCarrito); */

    // Insercion de los elmentos
    estructura.appendChild(card);
    CardBody.appendChild(CardTitle);
    CardBody.appendChild(text_precio);
    CardBody.appendChild(text_marca);
    CardBody.appendChild(text_talla);
    /*  CardBody.appendChild(miNodoBoton);*/
    card.appendChild(CardImagen);
    card.appendChild(CardBody);
    productos.appendChild(estructura);
  }
}
function PrecioMayor() {
  let EliminarCard = Array.prototype.slice.call(
    document.getElementsByClassName("col-sm-4"),
    0
  );
  for (Eliminar of EliminarCard) {
    Eliminar.remove();
  }
  producto.sort(function (a, b) {
    return b.precio - a.precio;
  });
  for (let poduct of producto) {
    //Estructura
    const estructura = document.createElement("div");
    estructura.classList.add("col-sm-4");
    // Card
    const card = document.createElement("div");
    card.classList.add("card");
    // Body
    const CardBody = document.createElement("div");
    CardBody.classList.add("card-content");
    // Titulo
    const CardTitle = document.createElement("h5");
    CardTitle.classList.add("title", "is-7");
    CardTitle.textContent = poduct.modelo;
    // Imagen
    const CardImagen = document.createElement("div");
    const CardFigure = document.createElement("figure");
    const Img = document.createElement("img");
    CardImagen.classList.add("card-image");
    CardFigure.classList.add("image", "is-4by3");
    Img.setAttribute("src", poduct.img);
    CardFigure.insertAdjacentElement("afterbegin", Img);
    CardImagen.insertAdjacentElement("afterbegin", CardFigure);
    // Precio
    const text_precio = document.createElement("p");
    text_precio.classList.add("subtitle", "is-8");
    text_precio.textContent = `${pesos}${poduct.precio}`;
    //Marca
    const text_marca = document.createElement("p");
    text_marca.classList.add("is-8");
    text_marca.textContent = `Marca ${poduct.marca}`;
    //Talla
    const text_talla = document.createElement("div");
    const select_talla = document.createElement("select");
    let tallas = poduct.talla;
    let select = `<select>
                  <option>Talla</option>`;
    tallas.forEach((value) => {
      select += `<option value=${value}> ${value}</option>`;
    });
    select += `</select><br/>`;

    select_talla.innerHTML = select;

    text_talla.classList.add("select", "is-primary");
    text_talla.insertAdjacentElement("beforeend", select_talla);
    // Boton
    const Agregar = document.createElement("button");
    Agregar.classList.add("btn", "btn-primary");
    Agregar.textContent = "+ agregar";
    Agregar.setAttribute("marcador", poduct.id);
    Agregar.addEventListener("click", anyadirProductoAlCarrito);

    // Insercion de los elmentos
    estructura.appendChild(card);
    CardBody.appendChild(CardTitle);
    CardBody.appendChild(text_precio);
    CardBody.appendChild(text_marca);
    CardBody.appendChild(text_talla);
    CardBody.appendChild(Agregar);
    card.appendChild(CardImagen);
    card.appendChild(CardBody);
    productos.appendChild(estructura);
  }
}
//AÑIDIR CARRITO
function carrito() {
  
}
//EVENTO DE FILTRAR MARCA
let jordan = document.getElementById("jordan");
jordan.onclick = () => {
  let Jordan = producto.filter((info) => info.marca.includes("Jordan"));
  MarcaFiltrar(Jordan);
};
let nike = document.getElementById("nike");
nike.onclick = () => {
  let Nike = producto.filter((info) => info.marca.includes("Nike"));
  MarcaFiltrar(Nike);
};
let adidas = document.getElementById("adidas");
adidas.onclick = () => {
  let Adidas = producto.filter((info) => info.marca.includes("Adidas"));
  MarcaFiltrar(Adidas);
};
let umna = document.getElementById("unam");
umna.onclick = () => {
  let Under = producto.filter((info) => info.marca.includes("Under Amour"));
  MarcaFiltrar(Under);
};
//SELCCION DE TALLAS
let talla_UN = document.getElementById("UN");
talla_UN.onclick = () => {
  let UN_T = producto.filter((info) => info.talla.includes("UN"));
  console.log(UN_T);
  TallaFiltrar(UN_T);
};
let talla_3 = document.getElementById("3");
talla_3.onclick = () => {
  let T_3 = producto.filter((info) => info.talla.includes("3"));
  TallaFiltrar(T_3);
};
let talla_4 = document.getElementById("4");
talla_4.onclick = () => {
  let T_4 = producto.filter((info) => info.talla.includes("4"));
  TallaFiltrar(T_4);
};
let talla_7 = document.getElementById("7");
talla_7.onclick = () => {
  let T_7 = producto.filter((info) => info.talla.includes("7"));
  TallaFiltrar(T_7);
};
let talla_10 = document.getElementById("10");
talla_10.onclick = () => {
  let T_10 = producto.filter((info) => info.talla.includes("10"));
  TallaFiltrar(T_10);
};
let talla_12 = document.getElementById("12");
talla_12.onclick = () => {
  let T_12 = producto.filter((info) => info.talla.includes("12"));
  TallaFiltrar(T_12);
};
let talla_14 = document.getElementById("14");
talla_14.onclick = () => {
  let T_14 = producto.filter((info) => info.talla.includes("14"));
  TallaFiltrar(T_14);
};
let talla_16 = document.getElementById("16");
talla_16.onclick = () => {
  let T_16 = producto.filter((info) => info.talla.includes("16"));
  TallaFiltrar(T_16);
};
//Eventos de Ordenar
const Precios_orden = document.querySelector("#orden");
Precios_orden.addEventListener("change", (event) => {
  resultado = `${event.target.value}`;
  console.log(resultado);
  if (resultado == "menor_mayor") {
    //menor a Mayor
    PrecioMenor();
  } else {
    //mayor a menor
    PrecioMayor();
  }
});
