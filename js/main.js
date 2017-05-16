function validateForm(){
   var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
   var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

   var nombre = document.getElementById("name").value;
   var apellido = document.getElementById("lastname").value;
   var correo = document.getElementById("input-email").value;
   var pass = document.getElementById("input-password").value;
   var seleccion = document.getElementsByClassName("form-control").value;

if(Validador.soloTexto(nombre)){
   quitarInfo("name");
}else{
   alertInfo("name", "Nombre no es válido");
}
if(Validador.soloTexto(apellido)){
   quitarInfo("apellido");
}else{
   alertInfo("apellido", "Ingresa un apellido válido");
}



function quitarInfo(idInput){
   var el =document.getElementById(idInput);
   if(el.nextSibling != null){
      el.parentNode.removeChild(el.nextSibling);
   }
}

function alertInfo(idInput, info){
   var el = document.getElementById(idInput);
   if(el.nextSibling == null){
      var span = document.createElement("span");
      span.innerHTML = info;
      el.parentNode.appendChild(span);
   }else if(el.nextSibling.tagName =="SPAN"){
      el.nextSibling.innerHTML = info;
      }else{
        el.parentNode.removeChild(el.nextSibling);

      var span = document.createElement("span");
      span.innerHTML = info;
      el.parentNode.appendChild(span);
      }

   }
}