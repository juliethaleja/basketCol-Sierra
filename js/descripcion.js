//ESTRUCTURA
function estructuraDescripcion() {
    //LLAMAR ETIQUETAS
    let img = document.getElementById("imagen");
    let modelo = document.getElementById("modelo");
    let marca = document.getElementById("marca");
    let precio = document.getElementById("precio");
    let talla = document.getElementById("talla");
  //LLAMAR LOS DATOS DEL PRODUCTO(STORAGE)
  const producto={
     id_img :localStorage.getItem("img"),
     id_modelo : localStorage.getItem("modelo"),
     id_precio : localStorage.getItem("precio"),
     id_marca : localStorage.getItem("marca"),
     id_talla : localStorage.getItem("talla"),
    }
    const{id_img,id_modelo,id_precio,id_marca,id_talla}=producto;
    //Conversion a array
    opTalla = JSON.parse(id_talla);
  //INSERTAR TEXTO
  img.setAttribute("src", "../" + id_img);
  modelo.textContent = id_modelo;
  marca.textContent = "Marca " + id_marca;
  precio.textContent = id_precio;
  let select = `<select name="talla" required>
    <option hidden selected>Talla</option>`;
  for (let i = 0; i < opTalla.length; i++) {
    select += `<option value=${opTalla[i]} > ${opTalla[i]}</option>`;
  }
  select += `</select><br/>`;

  talla.innerHTML = select;

}
estructuraDescripcion();
