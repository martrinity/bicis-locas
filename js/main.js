/*function validateForm(){
   var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
   var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

   var nombre = document.getElementById("name").value;
   var apellido = document.getElementById("lastname").value;
   var correo = document.getElementById("input-email").value;
   var pass = document.getElementById("input-password").value;
   var seleccion = document.getElementsByClassName("form-control").value;
}
function validarNombre(){
    if (nombre.length === 0){ 
      var requeridoNombre = document.getElementsByClassName("input-box");
      var spanName = document.createElement("span");
      var nombreChild = document.createTextNode("Campo obligatorio");
      spanName.appendChild(nombreChild);
      requeridoNombre.appendChild(spanName);
      return nombreChild;
    }
}

function validarApellido(){
   if apellido === "" || apellido === undefined {
      var requeridoApellido = document.getElementsByClassName("input-box")[0]
      var spanLN = document.createElement("span");
      var apellidoChild = document.createTextNode("Campo obligatorio. Solo letras");
      spanLN.appendChild(apellidoChild);
      requeridoApellido.appendChild(spanLN);
      return apellidoChild;
}
}*/


