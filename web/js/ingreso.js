var botonIngresar = document.querySelector("#ingresar");
botonIngresar.setAttribute("onclick","ingresarUsuario()");
var spanUsuario = document.querySelector("#nombreUsuario");
spanUsuario.setAttribute("onmouseover","sacarSpanUsuario()");
var spanClave = document.querySelector("#clave");
spanClave.setAttribute("onmouseover","sacarSpanClave()");

function ingresarUsuario(){
var nombreUsurio = document.querySelector("#nombreUsuario").value;
var clave = document.querySelector("#clave").value;

json= {};
json.nombreUsurio = nombreUsurio;
json.clave = clave;

var datos = JSON.stringify(json);

    ajaxLogin(datos);
}
 
function ajaxLogin(json){
var ajax_url = "./Registrarse?peticion="+json;
var xhr = ajaxHeader("GET",ajax_url);
xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
        if (xhr.responseText == "Este usuario no existe"){
 var usuarioMsg = document.querySelector("#usuarioMensaje");
 usuarioMsg.innerHTML= xhr.responseText;
        }else if(xhr.responseText == "La clave es incorrecta"){
    var claveMsg = document.querySelector("#claveMensaje");
      claveMsg.innerHTML= xhr.responseText;
    
  }else {
      sessionStorage.setItem("usuario",xhr.responseText);
      document.querySelector("#nombreUsuario").value = "";
      document.querySelector("#clave").value = "";
   }
  }
 };
 xhr.send();
}

function ajaxHeader(metodo, url){
     if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if(window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(xhr){
        xhr.open(metodo, url);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    return xhr;
}

function sacarSpanUsuario(){
    document.querySelector("#usuarioMensaje").innerHTML="";
}

function sacarSpanClave(){
    document.querySelector("#claveMensaje").innerHTML="";
}