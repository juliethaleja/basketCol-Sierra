import { Descripcion } from "./descripcion.js";
import { Agregarcarrito, Eliminar,contador } from "./carrito.js";
import { mensaje} from "./comprar.js";

 const pesos = "$";
const productos = document.querySelector("#productos");
let carritoProducto = [];
document.querySelector("#contador").textContent=0;


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
window.onload=function () {
  async function eventos() {
  //Inicio
  document.getElementById("inicio").addEventListener("click",EstructuraProductos)
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
    let resultado = `${event.target.value}`;
    if (resultado == "menor_mayor") {
      //menor a Mayor
      PrecioMenor();
    } else {
      //mayor a menor
      PrecioMayor();
    }
  });
  EstructuraProductos();
  //Pre-compra
  document.getElementById("Comprar").addEventListener("click",Finalizar)

 }
// funcion Boton Detalle
 async function detalle() {
  let detalles = Array.prototype.slice.call(
    document.getElementsByClassName("detalles")
  );
}
 //FUNCION PARA MOSTRAR PRODUCTOS EN CARDS
async function EstructuraProductos() {
  productos.innerHTML='';
  document.getElementById("panel").style.display='block';
  let producto = await getProduct(); 
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
    dir.classList.add("detalles");
    // Boton
    const Agregar = document.createElement("button");
    Agregar.classList.add("button", "is-primary", "is-pulled-right");
    Agregar.textContent = "Detalles";
    Agregar.setAttribute("marcador", info.id);
    dir.appendChild(Agregar);

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
  let detalles = Array.prototype.slice.call(
    document.getElementsByClassName("detalles")
  );
  for (detalle of detalles) {
    detalle.addEventListener("click", obtener);
  }
} 
//FUNCION PARA FILTRAR
 function Filtrar(clave) {
productos.innerHTML='';
  clave.forEach((info) => {
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
    dir.classList.add("detalles");
    // Boton
    const Agregar = document.createElement("button");
    Agregar.classList.add("button", "is-primary", "is-pulled-right");
    Agregar.textContent = "Detalles";
    Agregar.setAttribute("marcador", info.id);
    dir.appendChild(Agregar);

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
  let detalles = Array.prototype.slice.call(
    document.getElementsByClassName("detalles")
  );
  for (detalle of detalles) {
    detalle.addEventListener("click", obtener);
  }
}
//FUNCION PARA ORDENAR PRECIOS
async function PrecioMenor() {
  productos.innerHTML='';
  let producto = await getProduct();
  producto.sort(function (a, b) {
    return a.precio - b.precio;
  });
  for (let poduct of producto) {
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
      dir.classList.add("detalles");
      // Boton
      const Agregar = document.createElement("button");
      Agregar.classList.add("button", "is-primary", "is-pulled-right");
      Agregar.textContent = "Detalles";
      Agregar.setAttribute("marcador", poduct.id);
      dir.appendChild(Agregar);
  
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
    let detalles = Array.prototype.slice.call(
      document.getElementsByClassName("detalles")
    );
    for (detalle of detalles) {
      detalle.addEventListener("click", obtener);
    }

}
async function PrecioMayor() {
  productos.innerHTML='';
  let producto = await getProduct();
  producto.sort(function (a, b) {
    return b.precio - a.precio;
  });
  for (let poduct of producto) {
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
    dir.classList.add("detalles");
    // Boton
    const Agregar = document.createElement("button");
    Agregar.classList.add("button", "is-primary", "is-pulled-right");
    Agregar.textContent = "Detalles";
    Agregar.setAttribute("marcador", poduct.id);
    dir.appendChild(Agregar);

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
  let detalles = Array.prototype.slice.call(
    document.getElementsByClassName("detalles")
  );
  for (detalle of detalles) {
    detalle.addEventListener("click", obtener);
  }

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
    let array_talla = JSON.stringify(talla);
    localStorage.setItem("talla", array_talla);
  });
}
//ESTRUCTURA DE DESCRIPCIÓN
function Base() {
  document.getElementById("panel").style.display='none';
  document.getElementById("ordenar").style.display='none';
  let productos=document.querySelector("#productos");
  let producto=document.querySelector("#producto");
  productos.innerHTML='';
producto.innerHTML=`          
<div class="column is-12" >
<div class="card ">
    <div class="row">
        <div class="col-lg-8 pr-4 " >
            <img id="imagen" class="img-shadow img-fluid "  alt="wrapkit" />
        </div>
        
        <div class="col-lg-4 p-5">
            <div class="text-box">
                <form class="mt-3">
                    <h4 id="modelo"class="font-weight-blod block"></h4>
                    <h2 id="precio"class="font-weight-light"><span>$</span></h2>
                    <p id="marca"></p>
                    <div id ="talla" class="mb-3 select is-primary is-fullwidth">
                      <select required>
                        <option>Talla</option>
                      </select>
                    </div>
                    <input id ="comprar" type="button" value="Agregar"class="button is-primary is-medium is-fullwidth"/>
                </form>
                <h1 id="respuesta"></h1>
            </div>
        </div>
    </div>
</div>
</div>` 
//Organizar datos del producto
let descripcion=  new Descripcion();
descripcion.estructuraDescripcion();
//Escuchar evento de los botones de aggregar y eliminar
let comprar = document.getElementById("comprar");
const tienda = document.querySelector("#carrito");
//evento agregar
comprar.onclick = () => {
  //Agregar carrito
  Agregarcarrito();

  document.querySelector("#Comprar").style.display='block';
  document.querySelector("#contador").textContent=contador.length;
}
//Eliminar
tienda.onclick = (e) => {
  if (e.target.classList.contains("borrar-curso")) {
    const idproducto = e.target.getAttribute("data-id");
    let row = document.getElementById(`${idproducto}`);
  Eliminar(row);
  document.querySelector("#contador").textContent=contador.length;
  let comprar= (document.querySelector("#contador") == 0) ?  document.querySelector("#Comprar").style.display='none' :  document.querySelector("#Comprar").style.display='none';

  }
}
}
//DESCRIPCION
function obtener(e) {
  let id = e.target.getAttribute("marcador");
  carritoProducto.push(id);
  console.log(carritoProducto);
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
  Base();

}
function Finalizar() {
  document.getElementById("panel").style.display='none';
  document.getElementById("ordenar").style.display='none';
  document.getElementById("Comprar").style.display='none';
  document.getElementById("icon-carrito").style.display='none';
  let productos=document.querySelector("#productos");
  let producto=document.querySelector("#producto");
  let listado=document.getElementById("carrito").innerHTML;
  productos.innerHTML='';
  producto.innerHTML=`          
<div class="column is-12" >
  <h2 class="text-center">Finalizar Compra</h2>
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="card p-5">
        <h4 class="text-center">Listado de productos</h4>
          <div id="listado">
          ${listado}
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
      <div class="card p-3">
     <h4 class="text-center">Datos del Usuario</h4>
      <form id="pagar">
      <div class="field">
      <div class="control">
      <input class="input text-uppercase" id="nombre_p" type="text" placeholder="Nombre del cliente" required>
      </div>
      </div>
      <div class="field">
      <div class="control">
      <input class="input text-uppercase" id="ciudad_p" type="text" placeholder="Ciudad" required>
      </div>
      </div>
      <div class="field">
      <div class="control">
      <input class="input text-uppercase" id="direccion_p" type="text" placeholder="Direccion" required>
      </div>
      </div>
      <div class="field">
      <div class="control">
      <input class="input" id="email" type="email" placeholder="Correo electronico" required>
      </div>
      </div>
      <div class="field">
      <div class="control">
      <input class="input" type="number" id="card-number" placeholder="Numero de tarjeta"required>
      </div>
      </div>
      <div class="field">
      <div class="control">
      <input class="input" type="number" id="card-date" placeholder="MM/YY" maxlength="7" required>
      </div>
      </div>
      <div class="field">
      <div class="control">
      <input class="input" id="card-ccv" type="number" placeholder="CCV" maxlength="4" required>
      </div>
      </div>
      <button class="button is-primary is-outlined is-fullwidth" type="submit" >Pagar</button>
      </form>
      </div>
      </div>
    </div>
    </br>
</div>`;

const tienda = document.querySelector("#listado");
tienda.onclick = (e) => {
  if (e.target.classList.contains("borrar-curso")) {
    const idproducto = e.target.getAttribute("data-id");
    let row = document.getElementById(`${idproducto}`);
  Eliminar(row);
  listado=document.getElementById("carrito").innerHTML;
  document.getElementById("listado").innerHTML="";
  document.getElementById("listado").innerHTML=listado;
  document.querySelector("#contador").textContent=contador.length;
  }
}
 document.getElementById("pagar").addEventListener("submit",Pagar);
}
function Pagar() {
  let nombre=document.getElementById("nombre_p").value;
let ciudad=document.getElementById("ciudad_p").value;
let direccion=document.getElementById("direccion_p").value;
let total=document.getElementById("total").textContent;
  document.getElementById("panel").style.display='none';
  document.getElementById("ordenar").style.display='none';
  document.getElementById("Comprar").style.display='none';
  document.getElementById("icon-carrito").style.display='none';
  let productos=document.querySelector("#productos");
  let producto=document.querySelector("#producto");
  productos.innerHTML='';
  producto.innerHTML=`          
<div class="column is-12" >
  <h2 class="text-center">Gracia por la compra</h2>

        <div class="card p-5">
         <h4 class="text-center" id="anuncio"></h4>
         <h4 class="text-center" id="ubicacion"></h4>
         <h4 class="text-center" id="total_anuncio"></h4>
        <div>
</div>`
mensaje(nombre,ciudad,direccion,total);
}
eventos();

}


