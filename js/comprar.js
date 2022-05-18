 
 //Pago exitoso
 export function mensaje(nombre,ciudad,direccion,total){

     document.getElementById("anuncio").textContent=`!Hola ${nombre},El pago fue realizado con éxito¡`
     document.getElementById("ubicacion").textContent=`Los productos  comprados seran enviado a la siguiente direccion ${ciudad}, ${direccion}`
     document.getElementById("total_anuncio").textContent=`Coun un costo total de $ ${total}`
 }