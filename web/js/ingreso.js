var botonIngresar = document.querySelector("#ingresar");
botonIngresar.setAttribute("onclick","ingresarUsuario()");

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

console.log(xhr.responseText);

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
};