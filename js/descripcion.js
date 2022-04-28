//ESTRUCTURA
function estructuraDescripcion() {
  //LLAMAR LOS DATOS DEL PRODUCTO(STORAGE)
  let id = localStorage.getItem("Id");
  let id_img = localStorage.getItem("img");
  let id_modelo = localStorage.getItem("modelo");
  let id_precio = localStorage.getItem("precio");
  let id_marca = localStorage.getItem("marca");
  let id_talla = localStorage.getItem("talla");
  const opTalla = JSON.parse(id_talla);
  //LLAMAR ETIQUETAS
  let img = document.getElementById("imagen");
  let modelo = document.getElementById("modelo");
  let marca = document.getElementById("marca");
  let precio = document.getElementById("precio");
  let talla = document.getElementById("talla");
  //INSERTAR TEXTO
  img.setAttribute("src", "../" + id_img);
  modelo.textContent = id_modelo;
  marca.textContent = "Marca " + id_marca;
  precio.textContent = id_precio;
  let select = `<select name="talla" required>
    <option value="">Talla</option>`;
  for (let i = 0; i < opTalla.length; i++) {
    select += `<option value=${opTalla[i]} > ${opTalla[i]}</option>`;
  }
  select += `</select><br/>`;

  talla.innerHTML = select;
}
estructuraDescripcion();
