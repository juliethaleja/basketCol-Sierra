const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
let carritoProducto = [];
let id = localStorage.getItem("Id");
//EVENTO CLICK AÑADIR
let comprar = document.getElementById("comprar");
comprar.addEventListener("click", Agregarcarrito);
//EVENTO ELIMINAR PRODUCTO
carrito.addEventListener("click", Eliminar);


//AÑIDIR CARRITO
function Agregarcarrito() {
  const product = document.querySelector("[name='talla']").value;
  const clave=[''+product+'_'+id+'']
  let Calzado = carritoProducto.push(...clave);
  EstructuraCarrito(Calzado);
}

function EstructuraCarrito(e) {
  //Limpiar Filas
  limpiarHTML()
  const producto = {
    //LLAMAR ETIQUETAS
    img: document.getElementById("imagen").getAttribute("src"),
    modelo: document.getElementById("modelo").textContent,
    marca: document.getElementById("marca").textContent,
    precio: document.getElementById("precio").textContent,
    talla: document.querySelector("[name='talla']").value,
    id:id,
  };
  Toastify({
    text: "Se agrego al carrito de compras un producto de"+producto.modelo+"con un valor de "+producto.precio,
  
    duration: 1000,
    style: {
      background: "#00d1b2",
    }
    }).showToast();
  //CREAR NUEVO CARRITO
  const Norepetir = [...new Set(carritoProducto)];
  console.log( Norepetir );
  Norepetir.forEach((item) => {
    const { img, marca, modelo, precio, talla } = producto;
    const Cantidad = carritoProducto.reduce((total, itemId) => {
      return itemId === item ? total += 1 : total;
    }, 0);
    const row = document.createElement("tr");
    row.id = `row${e}`;
    row.innerHTML = `<td>
              <img src="${img}" width="100">
          </td>
          <td>
              ${Cantidad}
          </td>
          <td>
              ${modelo}
          </td>
          <td>
              ${marca}
          </td>
          <td class='sum_precio'>
              ${precio}
          </td>
          <td>
              ${talla}
          </td>
          <td>
              <a href="#" class="borrar-curso" data-id="${row.id}" >
                  X
              </a>
              </td>`;

    contenedorCarrito.appendChild(row);
    total();
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
//Eliminar productos

function Eliminar(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const idproducto = e.target.getAttribute("data-id");
    let row = document.getElementById(`${idproducto}`);
    let entero = parseInt(carritoProducto.indexOf(`${id}`));
    carritoProducto.splice(entero, 1);
    contenedorCarrito.removeChild(row);
    total();
    Toastify({
      text: "Se removio un producto al carrito de compras",
    
      duration: 1000,
      style: {
        background: "#c83e36",
      }
      }).showToast();
    localStorage.setItem("carrito", contenedorCarrito);
  }
}
//Calculo Total de los productos
function total() {
  let suma = document.getElementsByClassName("sum_precio");
  let recorrido = [];
  let total = 0;
  for (let i = 0; i < suma.length; i++) {
    const incremet = suma[i].textContent;
    let valor_i = parseFloat(incremet);
    recorrido.push(valor_i);
    total += parseFloat(recorrido);
  }

  let mostrar = document.getElementById("total");
  mostrar.textContent = total;
}
function limpiarHTML(){

  while( contenedorCarrito.firstChild ){
      contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}