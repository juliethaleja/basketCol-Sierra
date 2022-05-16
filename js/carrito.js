const contenedorCarrito = document.querySelector("#lista-carrito tbody");
let mostrar = document.getElementById("total");
let carritoProducto = [];
let bd = [];
export function Agregarcarrito() {
  let id = localStorage.getItem("Id");
  const product = document.querySelector("[name='talla']").value;
  const clave = ["" + product + "_" + id + ""];
  let contador=carritoProducto.push(...clave);
  EstructuraCarrito();
}

export function Eliminar(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const idproducto = e.target.getAttribute("data-id");
    let row = document.getElementById(`${idproducto}`);
    let entero = parseInt(carritoProducto.indexOf(`${id}`));
    bd.splice(entero, 1);
    carritoProducto.splice(entero, 1);
    contenedorCarrito.removeChild(row);
    Toastify({
      text: "Se removio un producto al carrito de compras",

      duration: 500,
      style: {
        background: "#c83e36",
      },
    }).showToast();
  }
  let total = new Total();
  mostrar.textContent = total.total();
}
function EstructuraCarrito() {
  //CREAR UN NUEVO ID
  const product = document.querySelector("[name='talla']").value;
  let Id= localStorage.getItem("Id");
  //Limpiar Filas
  let producto = {
    //LLAMAR ETIQUETAS
    img: document.getElementById("imagen").getAttribute("src"),
    modelo: document.getElementById("modelo").textContent,
    marca: document.getElementById("marca").textContent,
    precio: document.getElementById("precio").textContent,
    talla: document.querySelector("[name='talla']").value,
    id: product + "_" + Id,
  };
  let {img,modelo,marca,precio,talla,id} = producto;
  bd.push(producto);

  //CREAR NUEVO CARRITO
    const row = document.createElement("tr");
    row.id = `row${id}`;
    row.innerHTML = `<td >
              <img class='img_car' src="${img}" width="100">
          </td>
          <td class='model_car'>
              ${modelo}
          </td>
          <td class='marc_car'>
              ${marca}
          </td>
          <td class='sum_precio'>
              ${precio}
          </td>
          <td class='talla_car'>
              ${talla}
          </td>
          <td>
              <a href="#" class="borrar-curso" data-id="${row.id}" >
                  X
              </a>
              </td>`;
    contenedorCarrito.appendChild(row);
  mostrar.textContent = total();
  Toastify({
    text:
    "Se agrego al carrito de compras un producto de  " +
      producto.modelo +
      " con un valor de " +
      producto.precio,

    duration: 2000,
    style: {
      background: "#00d1b2",
    },
  }).showToast();
}
function  total() {
  return carritoProducto.reduce((total, item) => {
    const miItem = bd.filter((itembd) => {
      return itembd.id === item;
    });
    let precio = parseFloat(miItem[0].precio);
    return total + precio;
  }, 0);
}


function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
