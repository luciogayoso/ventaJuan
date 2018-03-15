window.addEventListener("load",cambiaImg,false);
window.addEventListener("load",efectoImg,false);
window.addEventListener("load",pedirProducto,false);
window.addEventListener("load",pedirProductob,false);
var radio = document.querySelectorAll(".radio");

function pedirProducto(){
    
  var xhr = ajaxHeader("GET","./cargarProductos?id_usuario=");
  xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
               var respuesta = xhr.responseText; 
               var json = JSON.parse(respuesta);
               var seccion = document.querySelector(".section");
               
                var output = '';
                       
    
                                for (var i = 0; i < json.length; i++) {

                    output += '<div class="producto">\n\
                    <div class="img">\n\
                    <img id="imagen" src="img/' + json[i].p_img + '" value="' + json[i].id_producto + '" onmouseover="cambioFoto(this)" onmouseout="cambioFotob(this)" alt=""/>\n\
                    </div>\n\
                    <div class="DComprar">\n\
                    <p>' + json[i].p_nombre + '</p>\n\
                    <input id="colores" style= "background-color:' + json[i].p_color + '" ></input><input name="color" type="radio" />\n\
                    <button>Comprar</button>\n\
                    </div>\n\
                    </div>';
                }
                                
                            
                 seccion.innerHTML = output;
                console.log(json[0].p_img);
            }           
  };
   xhr.send();
}

function pedirProductob(){
    var divUsr = document.querySelector(".usr");
    var nUsr = document.querySelector("#nusr");
    var ISboton = document.querySelector(".incio-sesion");
    var usuario = JSON.parse(sessionStorage.getItem("usuario"));
    if (usuario !== null){
    var nombreUsuario = usuario.nombre;
    var apellido = usuario.apellido;
    
      cerrarSesion = document.createElement("input");
      cerrarSesion.setAttribute("value","Cerrar Sesion");
      cerrarSesion.setAttribute("id","usrBoton");
      cerrarSesion.setAttribute("class","cerrar-sesion");
      cerrarSesion.setAttribute("type","button");
      cerrarSesion.setAttribute("omclick","cerraSesion()");
      divUsr.replaceChild(cerrarSesion,ISboton);
        nUsr.innerText = "Hola, bienvenido "+nombreUsuario+" "+apellido;
      
    }
}


function efectoImg() {
    var imagen = document.querySelectorAll("#imagen");
    
    for (var i = 0; i < imagen.length; i++) {

        imagen[i].addEventListener("mouseover", cambioFoto, false);
        imagen[i].addEventListener("mouseout", cambioFotob, false);

    }
}

function cambioFotob(e){
    var ruta = e.src;
    var rutaDivida = ruta.split("@");
    var extencion = rutaDivida[1];
    var rutaCortada = rutaDivida[0];
    
    var nuevaRuta = rutaCortada+extencion;
    
    e.src = nuevaRuta;
}

function cambioFoto(e){
    var ruta = e.src;
    var rutaDivida = ruta.split(".");
    var extencion = rutaDivida[1];
    var rutaCortada = rutaDivida[0];
    
    var nuevaRuta = rutaCortada +"@."+extencion;
    
    e.src = nuevaRuta;
}

var inicio = document.querySelector(".incio-sesion");
inicio.addEventListener("click", function () {
    location.href = "login.html";
},false);

var registro = document.querySelector(".registrarse");
registro.addEventListener("click", function () {
    location.href = "registro.html";
},false);

var radio1 = radio[0];
radio1.addEventListener("click",elegirFoto,false);
var radio2 = radio[1];
radio2.addEventListener("click",elegirFoto,false);
var radio3 = radio[2];
radio3.addEventListener("click",elegirFoto,false);

function elegirFoto(e){
    var rutaFoto = e.target.value;
    var contenedor = document.querySelector(".panoramica");

contenedor.src=rutaFoto;

}


var imagenes = new Array(
        ["img/foto-panoramica.jpg"],
        ["img/foto-panoramica1.jpg"],
        ["img/foto-panoramica2.jpg"]
        );

function cambiarFoto(){
var contenedor = document.querySelector(".panoramica");

var index = Math.floor((Math.random()*imagenes.length));
 var ra1 = radio1.id;
 var ra2 = radio2.id;
 var ra3 = radio3.id;
    if (index == ra1){
        radio1.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra2){
        radio2.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra3){
        radio3.checked=true;
        contenedor.src = imagenes[index];
    }
}

function cambiaImg(){
    
    cambiarFoto();
    
    setInterval(cambiarFoto,5000);
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