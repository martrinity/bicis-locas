function validateForm(){
   
   var nombre = document.getElementById("name").value;
   var apellido = document.getElementById("lastname").value;
   var correo = document.getElementById("input-email").value;
   var pass = document.getElementById("input-password").value;

   if(Validador.soloTexto(nombre)){
      quitarInfo("name");
   }else{
      alertInfo("name", "Nombre no es válido");
   }
   if(Validador.soloTexto(apellido)){
      quitarInfo("lastname");
   }else{
      alertInfo("lastname", "Ingresa un apellido válido");
   }

   if(Validador.passValida(pass)){
      quitarInfo("input-password");
   }else{
      alertInfo("input-password", "Debes ingresar contraseña válida");
   }

   if(Validador.esCorreo(correo)){
      quitarInfo("input-email");
   }else{
      alertInfo("input-email", "Debes ingresar correo válido");
   }
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

var Validador = {
   soloTexto:function (string){
      var digitos = /([0-9]+)/;
      return !digitos.test(string);
   },

   passValida: function (string){
      var esValida = true;
      if(string.length < 6 || string == "098754" || string == "123456" || string == "password")
         esValida = false;

      return esValida;
   },

   esCorreo:function (string){
      var especiales = /([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g;
      return especiales.test(string);
   }
   
};