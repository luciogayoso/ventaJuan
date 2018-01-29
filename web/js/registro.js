var botonRegistrar = document.querySelector("#registrarse")

botonRegistrar.setAttribute("onclick","tomarInfomacion()")

function tomarInfomacion(){
var nombre = document.querySelector("#nombre").value;
var apellido = document.querySelector("#apellido").value;
var mail = document.querySelector("#mail").value;
var nombreUsurio = document.querySelector("#nombreUsuario").value;
var clave = document.querySelector("#clave").value;
var cliente = "cliente";

json= {};
json.nombre = nombre;
json.apellido = apellido;
json.mail = mail;
json.nombreUsurio = nombreUsurio;
json.clave = clave;
json.tipo = cliente;

var datos = JSON.stringify(json);

    ajaxRegistro(datos);
}

function ajaxRegistro(json){
var ajax_url = "Registrarse";

var xhr = new XMLHttpRequest();
xhr.open( "POST", ajax_url, true );
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send( json );

xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
document.querySelector("#nombre").value = "";
document.querySelector("#apellido").value = "";
document.querySelector("#mail").value = "";
document.querySelector("#nombreUsuario").value = "";
document.querySelector("#clave").value = "";

 var resul = xhr.responseText;
        if (resul == "FUNCIONO"){
           location.href = "login.html" 
       }else {
         alert(xhr.responseText);
       }
    }
  };
 }
 
