//PETICION FETCH
async function getProduct() {
  let url = "data/producto.json";
  try {
    let product = await fetch(url);
    return await product.json();
  } catch (error) {
    console.log(error);
  }
}

const pesos = "$";
const productos = document.querySelector("#productos");
let carritoProducto = [];
let lastcarrito = localStorage.getItem("carrito");
let saveProduct=[];
saveProduct.push(lastcarrito);

//FUNCION PARA MOSTRAR PRODUCTOS EN CARDS
async function EstructuraProductos() {
  let producto = await getProduct();
  //EVENTO DE FILTRAR MARCA
  let jordan = document.getElementById("jordan");
  jordan.onclick = () => {
    let Jordan = producto.filter((info) => info.marca.includes("Jordan"));
    Filtrar(Jordan);
  };
  let nike = document.getElementById("nike");
  nike.onclick = () => {
    let Nike = producto.filter((info) => info.marca.includes("Nike"));
    Filtrar(Nike);
  };
  let adidas = document.getElementById("adidas");
  adidas.onclick = () => {
    let Adidas = producto.filter((info) => info.marca.includes("Adidas"));
    Filtrar(Adidas);
  };
  let umna = document.getElementById("unam");
  umna.onclick = () => {
    let Under = producto.filter((info) => info.marca.includes("Under Amour"));
    Filtrar(Under);
  };
  //SELCCION DE TALLAS
  let talla_UN = document.getElementById("UN");
  talla_UN.onclick = () => {
    let UN_T = producto.filter((info) => info.talla.includes("UN"));
    console.log(UN_T);
    Filtrar(UN_T);
  };
  let talla_3 = document.getElementById("3");
  talla_3.onclick = () => {
    let T_3 = producto.filter((info) => info.talla.includes("3"));
    Filtrar(T_3);
  };
  let talla_4 = document.getElementById("4");
  talla_4.onclick = () => {
    let T_4 = producto.filter((info) => info.talla.includes("4"));
    Filtrar(T_4);
  };
  let talla_7 = document.getElementById("7");
  talla_7.onclick = () => {
    let T_7 = producto.filter((info) => info.talla.includes("7"));
    Filtrar(T_7);
  };
  let talla_10 = document.getElementById("10");
  talla_10.onclick = () => {
    let T_10 = producto.filter((info) => info.talla.includes("10"));
    Filtrar(T_10);
  };
  let talla_12 = document.getElementById("12");
  talla_12.onclick = () => {
    let T_12 = producto.filter((info) => info.talla.includes("12"));
    Filtrar(T_12);
  };
  let talla_14 = document.getElementById("14");
  talla_14.onclick = () => {
    let T_14 = producto.filter((info) => info.talla.includes("14"));
    Filtrar(T_14);
  };
  let talla_16 = document.getElementById("16");
  talla_16.onclick = () => {
    let T_16 = producto.filter((info) => info.talla.includes("16"));
    Filtrar(T_16);
  };
  //Eventos de Ordenar
  const Precios_orden = document.querySelector("#orden");
  Precios_orden.addEventListener("change", (event) => {
    resultado = `${event.target.value}`;
    if (resultado == "menor_mayor") {
      //menor a Mayor
      PrecioMenor();
    } else {
      //mayor a menor
      PrecioMayor();
    }
  });
  producto.forEach((info) => {
    //Estructura
    const estructura = document.createElement("div");
    const espacio = document.createElement("br");
    estructura.insertAdjacentElement("beforeend", espacio);

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
    //Direccion
    const dir = document.createElement("a");
    dir.setAttribute("href", "html/descripcion.html");
    // Boton
    const Agregar = document.createElement("button");
    Agregar.classList.add("button", "is-primary", "is-pulled-right");
    Agregar.textContent = "Detalles";
    Agregar.setAttribute("marcador", info.id);
    dir.appendChild(Agregar);
    Agregar.addEventListener("click", obtener);

    // Insercion de los elmentos
    estructura.appendChild(card);
    CardBody.appendChild(CardTitle);
    CardBody.appendChild(text_precio);
    CardBody.appendChild(text_marca);
    CardBody.appendChild(dir);
    card.appendChild(CardImagen);
    card.appendChild(CardBody);
    productos.appendChild(estructura);
  });
}
EstructuraProductos();

//FUNCION PARA FILTRAR
async function Filtrar(clave) {
  let EliminarCard = Array.prototype.slice.call(
    document.getElementsByClassName("col-sm-4")
  );
  for (Eliminar of EliminarCard) {
    Eliminar.remove();
  }
  clave.forEach((info) => {
    console.log(info);
    //Estructura
    const estructura = document.createElement("div");
    estructura.classList.add("col-sm-4");
    const espacio = document.createElement("br");
    estructura.insertAdjacentElement("beforeend", espacio);
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
    //Direccion
    const dir = document.createElement("a");
    dir.setAttribute("href", "html/descripcion.html");
    // Boton
    const Agregar = document.createElement("button");
    Agregar.classList.add("button", "is-primary", "is-pulled-right");
    Agregar.textContent = "Detalles";
    Agregar.setAttribute("marcador", info.id);
    dir.appendChild(Agregar);
    Agregar.addEventListener("click", obtener);

    // Insercion de los elmentos
    estructura.appendChild(card);
    CardBody.appendChild(CardTitle);
    CardBody.appendChild(text_precio);
    CardBody.appendChild(text_marca);
    CardBody.appendChild(dir);
    card.appendChild(CardImagen);
    card.appendChild(CardBody);
    productos.appendChild(estructura);
  });
}
//FUNCION PARA ORDENAR PRECIOS
async function PrecioMenor() {
  let EliminarCard = Array.prototype.slice.call(
    document.getElementsByClassName("col-sm-4")
  );
  for (Eliminar of EliminarCard) {
    Eliminar.remove();
  }
  let producto = await getProduct();
  producto.sort(function (a, b) {
    return a.precio - b.precio;
  });
  for (let poduct of producto) {
    //Estructura
    const estructura = document.createElement("div");
    estructura.classList.add("col-sm-4");
    const espacio = document.createElement("br");
    estructura.insertAdjacentElement("beforeend", espacio);
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
    //Direccion
    const dir = document.createElement("a");
    dir.setAttribute("href", "html/descripcion.html");
    // Boton
    const Agregar = document.createElement("button");
    Agregar.classList.add("button", "is-primary", "is-pulled-right");
    Agregar.textContent = "Detalles";
    Agregar.setAttribute("marcador", poduct.id);
    dir.appendChild(Agregar);
    Agregar.addEventListener("click", obtener);

    // Insercion de los elmentos
    estructura.appendChild(card);
    CardBody.appendChild(CardTitle);
    CardBody.appendChild(text_precio);
    CardBody.appendChild(text_marca);
    CardBody.appendChild(dir);
    card.appendChild(CardImagen);
    card.appendChild(CardBody);
    productos.appendChild(estructura);
  }
}
async function PrecioMayor() {
  let EliminarCard = Array.prototype.slice.call(
    document.getElementsByClassName("col-sm-4")
  );
  for (Eliminar of EliminarCard) {
    Eliminar.remove();
  }
  let producto = await getProduct();
  producto.sort(function (a, b) {
    return b.precio - a.precio;
  });
  for (let poduct of producto) {
    //Estructura
    const estructura = document.createElement("div");
    estructura.classList.add("col-sm-4");
    const espacio = document.createElement("br");
    estructura.insertAdjacentElement("beforeend", espacio);
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
    //Direccion
    const dir = document.createElement("a");
    dir.setAttribute("href", "html/descripcion.html");
    // Boton
    const Agregar = document.createElement("button");
    Agregar.classList.add("button", "is-primary", "is-pulled-right");
    Agregar.textContent = "Detalles";
    Agregar.setAttribute("marcador", poduct.id);
    dir.appendChild(Agregar);
    Agregar.addEventListener("click", obtener);

    // Insercion de los elmentos
    estructura.appendChild(card);
    CardBody.appendChild(CardTitle);
    CardBody.appendChild(text_precio);
    CardBody.appendChild(text_marca);
    CardBody.appendChild(dir);
    card.appendChild(CardImagen);
    card.appendChild(CardBody);
    productos.appendChild(estructura);
  }
}
//DESCRIPCION
function obtener(e) {
  let id = e.target.getAttribute("marcador");
  let Calzado = carritoProducto.push(id);
  ConsultarProducto();
}
//CONFIRMAR LA EXITENCIA DE PRODUCTO
async function ConsultarProducto() {
  let producto = await getProduct();
  carritoProducto.forEach((item) => {
    const miItem = producto.filter((itemBaseDatos) => {
      return itemBaseDatos.id === parseInt(item);
    });
    if (miItem) {
      const calzados = miItem.map((calzado) => {
        return calzado;
      });
      carritoProducto = [...calzados];
    } else {
      carritoProducto = [...carritoProducto, producto];
    }
  });
  setstorage_producto();
}
// GUARDAR LA INFORMACION DE LOS ATRIBUTOS DEL PRODUCTO
function setstorage_producto() {
  carritoProducto.forEach((info) => {
    const { id, img, marca, modelo, precio, talla } = info;
    localStorage.setItem("Id", id);
    localStorage.setItem("img", img);
    localStorage.setItem("marca", marca);
    localStorage.setItem("modelo", modelo);
    localStorage.setItem("precio", precio);
    array_talla = JSON.stringify(talla);
    localStorage.setItem("talla", array_talla);
  });
}
