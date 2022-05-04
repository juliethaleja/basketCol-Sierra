function baseCarrito() {
    let baseCarrito=document.querySelector(".BaseCarrito");
baseCarrito.innerHTML=`<li class="submenu">
<i class="fas fa-shopping-cart  fa-lg pt-3" id="img-carrito"></i>
      <div id="carrito">
        <table id="lista-carrito" class=" table is-striped
        u-full-width">
          <thead>
              <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Talla</th>
                  <th>Cantidad</th>
              </tr>
          </thead>
          <tbody></tbody>
      </table>
        <p class="text-left">Total: <span id="total"></span>$</p>
      </div>
</li>`
}
baseCarrito()