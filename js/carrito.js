const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
let carritoProducto = [];
let id = localStorage.getItem("Id");
//EVENTO CLICK AÑADIR
let comprar = document.getElementById("comprar");
comprar.addEventListener("click", Agregarcarrito);
//EVENTO ELIMINAR PRODUCTO
carrito.addEventListener('click', Eliminar)

//AÑIDIR CARRITO
function Agregarcarrito(e) {
  let Calzado = carritoProducto.push(id);
  console.log(Calzado);
  EstructuraCarrito(Calzado);
}
function EstructuraCarrito(e) {
    Eliminar();
  //LLAMAR ETIQUETAS
  let img = document.getElementById("imagen").getAttribute("src");
  let modelo = document.getElementById("modelo").textContent;
  let marca = document.getElementById("marca").textContent;
  let precio = document.getElementById("precio").textContent;
  let talla = document.querySelector("[name='talla']").value;
  console.log(img, modelo, marca, precio, talla);

  const row = document.createElement("tr");

  row.innerHTML = `<td>
              <img src="${img}" width="100">
          </td>
          <td>
              ${modelo}
          </td>
          <td class='sum_precio'>
              ${precio}
          </td>
          <td>
              ${talla}
          </td>
          <td>
              <a href="#" class="borrar-curso" data-id="${e}" >
                  X
              </a>
          </td>`;

  contenedorCarrito.appendChild(row);
  total();
}
//Eliminar productos

function Eliminar() {
    e.preventDefault();
    if ( e.target.classList.contains('borrar-curso') ){
        const idCurso = e.target.getAttribute('data-id');

        // Eliminar del arreglo
        carritoProducto.forEach( curso => {
            if( curso.id === idCurso){
                if( curso.cantidad > 1 ) {
                    curso.cantidad--;
                    carritoHTML();
                } else {
                    articulosCarrito = articulosCarrito.filter(curso => curso.id !== idCurso);
                    carritoHTML();
                }
            }
        })
    }
}
//Calculo Total dde los productos
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
  let mostrar=document.getElementById("total");
  mostrar.textContent=total;
}
