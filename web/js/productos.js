window.addEventListener("load",cambiaImg,false);
window.addEventListener("load",efectoImg,false);
window.addEventListener("load",pedirProducto,false);
window.addEventListener("load",pedirProductob,false);
var radio = document.querySelectorAll(".radio");

var carrito = document.querySelector("#comprar");
carrito.addEventListener("click",function (){
    var usuario = sessionStorage.getItem("usuario");
    if (usuario != null){
        location.href = "Carrito.html";
    }else {
        var span = document.querySelector("#errorCarrito");
       span.textContent = "Debe inciar sesion";
    }
});

var sesion = document.querySelector(".incio-sesion");
sesion.addEventListener("mouseover",function (){
    var span = document.querySelector("#errorCarrito");
       span.textContent = "";
});

carrito.addEventListener("mouseover",function (){
    var span = document.querySelector("#errorCarrito");
       span.textContent = "";  
});

var vestido = document.querySelector("#Vestido");
vestido.addEventListener("click",pedirProductoPagima,false);

var falda = document.querySelector("#Falda");
falda.addEventListener("click",pedirProductoPagima,false);

var blusa = document.querySelector("#Blusas");
blusa.addEventListener("click",pedirProductoPagima,false);

var camisa = document.querySelector("#Camisa");
camisa.addEventListener("click",pedirProductoPagima,false);

var campera = document.querySelector("#Campera");
campera.addEventListener("click",pedirProductoPagima,false);

var Mvestido = document.querySelector(".MiniVestido");
Mvestido.addEventListener("click",pedirProductoPagimaMini,false);

var Mfalda = document.querySelector(".MiniFalda");
Mfalda.addEventListener("click",pedirProductoPagimaMini,false);

var Mblusa = document.querySelector(".MiniBlusas");
Mblusa.addEventListener("click",pedirProductoPagimaMini,false);

var liquidacion = document.querySelector("#Liquidacion");
liquidacion.addEventListener("click",pedirProductoPagima,false);

var historia = document.querySelector("#Historia");
historia.addEventListener("click",pedirProductoPagimaLH,false);

var sesionFotos = document.querySelector("#Sesionfotos");
sesionFotos.addEventListener("click",pedirProductoPagimaLH,false);


function pedirProductoPagima(e){
  var titulos = e.target.attributes[1].nodeValue;
 
  var xhr = ajaxHeader("GET","./seleccionarTipoPro?contenido="+titulos);
  xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
               var respuesta = xhr.responseText; 
               var json = JSON.parse(respuesta);
               var seccion = document.querySelector(".section");
               
                var output = '';
                       
                 for (var i = 0; i < json.length; i++) {

                    output += '<div class="producto" id="'+ json[i].id_producto +'" >\n\
                    <div class="img">\n\
                    <img id="imagen" src="img/' + json[i].p_img + '" value="' + json[i].id_producto + '" onmouseover="cambioFoto(this)" onmouseout="cambioFotob(this)" onclick="detalleProducto(this)" alt=""/>\n\
                    </div>\n\
                    <div class="DComprar">\n\
                    <p>' + json[i].p_nombre + '</p>\n\
                    <div id="color'+json[i].id_producto+'"> \n\
                    <button id='+ json[i].id_producto +' onclick="otrosColores(this)" style= "background-color:white;border:0px;color:black;">Colores</button>\n\
                    <input id="colores" style= "background-color:' + json[i].p_color + '" ></input><input id="'+ json[i].p_img +'" class="otros1"  name="color" value="'+ json[i].id_producto +'" onclick="cambiarFotoRadio(this)" type="radio" />\n\
                    </div><br>\n\
                    <button>Comprar</button>\n\
                    </div>\n\
                    </div>';
                }
                                
            var panoramica = document.querySelector(".img-panoramica");
            panoramica.innerHTML = "";
            panoramica.style = "height:0px;";
            window.cambiarFoto = null;
            var pagina = document.querySelector("#tituloP");
            pagina.textContent = titulos;
            seccion.innerHTML = output;
           }           
  };
   xhr.send();
 }
 
 function pedirProductoPagimaMini(e){
  var titulos = e.target.attributes[0].nodeValue;
 
  var xhr = ajaxHeader("GET","./seleccionarTipoPro?contenido="+titulos);
  xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
               var respuesta = xhr.responseText; 
               var json = JSON.parse(respuesta);
               var seccion = document.querySelector(".section");
               
                var output = '';
                       
                 for (var i = 0; i < json.length; i++) {

                    output += '<div class="producto" id="'+ json[i].id_producto +'" >\n\
                    <div class="img">\n\
                    <img id="imagen" src="img/' + json[i].p_img + '" value="' + json[i].id_producto + '" onmouseover="cambioFoto(this)" onmouseout="cambioFotob(this)" onclick="detalleProducto(this)" alt=""/>\n\
                    </div>\n\
                    <div class="DComprar">\n\
                    <p>' + json[i].p_nombre + '</p>\n\
                    <div id="color'+json[i].id_producto+'"> \n\
                    <button id='+ json[i].id_producto +' onclick="otrosColores(this)" style= "background-color:white;border:0px;color:black;">Colores</button>\n\
                    <input id="colores" style= "background-color:' + json[i].p_color + '" ></input><input id="'+ json[i].p_img +'" class="otros1"  name="color" value="'+ json[i].id_producto +'" onclick="cambiarFotoRadio(this)" type="radio" />\n\
                    </div><br>\n\
                    <button>Comprar</button>\n\
                    </div>\n\
                    </div>';
                }
                                
            var panoramica = document.querySelector(".img-panoramica");
            panoramica.innerHTML = "";
            panoramica.style = "height:0px;";
            window.cambiarFoto = null;
            var haeder = document.querySelector("#haederTitulo");
            haeder.textContent = "Mini Noe";
            haeder.style = "color:pink;";
            var pagina = document.querySelector("#tituloP");
            pagina.textContent = titulos;
            seccion.innerHTML = output;
           }           
  };
   xhr.send();
 }

function pedirProducto(){
 var xhr = ajaxHeader("GET","./cargarProductos?pagina =");
  xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
               var respuesta = xhr.responseText; 
               var json = JSON.parse(respuesta);
               var seccion = document.querySelector(".section");
                var output = '';
                  
                                for (var i = 0; i < json.length; i++) {

                    output += '<div class="producto" id="'+ json[i].id_producto +'" >\n\
                    <div class="img">\n\
                    <img id="imagen" src="img/' + json[i].p_img + '" value="' + json[i].id_producto + '" onmouseover="cambioFoto(this)" onmouseout="cambioFotob(this)" onclick="detalleProducto(this)" alt=""/>\n\
                    </div>\n\
                    <div class="DComprar">\n\
                    <p>' + json[i].p_nombre + '</p>\n\
                    <div id="color'+json[i].id_producto+'"> \n\
                    <button id='+ json[i].id_producto +' onclick="otrosColores(this)" style= "background-color:white;border:0px;color:black;">Colores</button>\n\
                    <input id="colores" style= "background-color:' + json[i].p_color + '" ></input><input id="'+ json[i].p_img +'"  name="color" class="otros1" value="'+ json[i].id_producto +'" onclick="cambiarFotoRadio(this)" type="radio" />\n\
                    </div><br>\n\
                    <button>Comprar</button>\n\
                    </div>\n\
                    </div>';
          }              
                 seccion.innerHTML = output; 
      }           
  };
   xhr.send();
     
}

function pedirProductoPagimaLH(e){
    var htmlSesion = "";
    var htmlHis = "";
    var seccion = document.querySelector(".section");
    
    var titulos = e.target.attributes[1].nodeValue;
    var panoramica = document.querySelector(".img-panoramica");
    panoramica.innerHTML = "";
    panoramica.style = "height:0px;";
    window.cambiarFoto = null;
            
    var pagina = document.querySelector("#tituloP");
    
    
    if (titulos == "Historia"){
    seccion.innerHTML = htmlHis;
    pagina.textContent = "Historia";
    }else {
      seccion.innerHTML = htmlSesion;
      pagina.textContent = "Sesion de fotos";
    }
}
;

function otrosColores(e){
      
      var idProducto = e.attributes[0].nodeValue;
    var divId = idProducto+"divColoras";
    var divColor = document.getElementById(divId);
    if (divColor === null){
    var xhr = ajaxHeader("GET","./seleccionarTipoPro?contenido=null&idPro="+idProducto);
  xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
               var respuesta = xhr.responseText;
               var json = JSON.parse(respuesta);
               var id =idProducto;
             var idDiv = "color"+id;
          var div = document.getElementById(idDiv);
               
                for (var i = 0; i < json.length; i++) {
            
                 var input = document.createElement("input");
                 input.setAttribute("id","colores");
                 input.setAttribute("style","background-color:" + json[i].o_color );
                 var inputRadio = document.createElement("input");
                 inputRadio.setAttribute("id",json[i].o_img);
                 inputRadio.setAttribute("name","color");
                 inputRadio.setAttribute("class","otros");
                 inputRadio.setAttribute("value",idProducto);
                 inputRadio.setAttribute("type","radio");
                 inputRadio.setAttribute("onclick","cambiarFotoRadio(this)");
                div.appendChild(input);
                div.appendChild(inputRadio);
                
                }
                 
      }           
     };
    xhr.send();
    }     
 }

function cambiarFotoRadio(e){
   var idFoto = e.attributes[3].nodeValue;
   var classNombre = e.attributes[2].nodeValue;
   var imagenes = document.querySelectorAll("#imagen");
   
  var ruta = e.attributes[0].nodeValue;
   var rutaCompleta = "http://localhost:8080/ventaJuan/img/"+ruta;
   
    for (var i = 0; i< imagenes.length;i++){
        var localImg = imagenes[i].attributes[2].nodeValue;
        var evento = imagenes[i];   
        
        if (localImg === idFoto){
            if (classNombre === "otros1"){
                evento.src = rutaCompleta;  
                evento.addEventListener("mouseover",cambioFoto1,false);
                evento.addEventListener("mouseout",cambioFotob1,false);
                return;
            }else {
                evento.src = rutaCompleta;
                evento.onmouseover = "";
                evento.onmouseout = "";
                return;
            }
             
        }
    }
   
   
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
      cerrarSesion.setAttribute("onclick","cerraSesion()");
      divUsr.replaceChild(cerrarSesion,ISboton);
        nUsr.innerText = "Hola, bienvenido "+nombreUsuario+" "+apellido;
      
    }
}

function cerraSesion(){
    sessionStorage.removeItem("usuario");
    
    location.reload();
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

function cambioFotob1(e){
    var ruta = e.target.src;
    var rutaDivida = ruta.split("@");
    var extencion = rutaDivida[1];
    var rutaCortada = rutaDivida[0];
    
    var nuevaRuta = rutaCortada+extencion;
    
    e.target.src = nuevaRuta;
}

function cambioFoto(e){
    var ruta = e.src;
    var rutaDivida = ruta.split(".");
    var extencion = rutaDivida[1];
    var rutaCortada = rutaDivida[0];
    
    var nuevaRuta = rutaCortada +"@."+extencion;
    
    e.src = nuevaRuta;
}

function cambioFoto1(e){
    var ruta = e.target.src;
    var img = e.target;
    var rutaDivida = ruta.split(".");
    var extencion = rutaDivida[1];
    var rutaCortada = rutaDivida[0];
    
    var nuevaRuta = rutaCortada +"@."+extencion;
    
    img.src = nuevaRuta;
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
var radio4 = radio[3];
radio4.addEventListener("click",elegirFoto,false);
var radio5 = radio[4];
radio5.addEventListener("click",elegirFoto,false);
var radio6 = radio[5];
radio6.addEventListener("click",elegirFoto,false);
var radio7 = radio[6];
radio7.addEventListener("click",elegirFoto,false);

function  detalleProducto(e){
        
        idProducto = e.attributes[2].nodeValue;
        localStorage.setItem("idProducto",idProducto);
        location.href="descripcionProducto.html";
    }

function elegirFoto(e){
    var rutaFoto = e.target.value;
    var contenedor = document.querySelector(".panoramica");

contenedor.src = rutaFoto;

}

var imagenes = new Array(
        ["img/Produccion NoeliaLP20185.jpg"],
        ["img/Produccion NoeliaLP20184.jpg"],
        ["img/Produccion NoeliaLP20183.jpg"],
        ["img/tabla talles Noelialp.jpg"],
        ["img/look book 2018.jpg"],
        ["img/look book 20181.jpg"],
        ["img/ecocuero.jpg"]
           
);

function cambiarFoto(){
var contenedor = document.querySelector(".panoramica");

var pagina = document.querySelector("#tituloP").textContent;
    
    if (pagina == "Novedades"){

  var index = localStorage.getItem("index");
    
    if (index == undefined){
    
    index = 0;
    
 var ra1 = radio1.id;
 var ra2 = radio2.id;
 var ra3 = radio3.id;
 var ra4 = radio1.id;
 var ra5 = radio2.id;
 var ra6 = radio3.id;
 var ra7 = radio3.id;
 
    if (index == ra1){
        radio1.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra2){
        radio2.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra3){
        radio3.checked=true;
        contenedor.src = imagenes[index];
    }else if (index == ra4){
        radio4.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra5){
        radio5.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra6){
        radio6.checked=true;
        contenedor.src = imagenes[index];
    }else if (index == ra7){
        radio7.checked = true;
        contenedor.src = imagenes[index];
    }
    index++;
       localStorage.setItem("index",index); 
    
    }else if (index < 7 && index >= 0){
        var ra1 = radio1.id;
        var ra2 = radio2.id;
        var ra3 = radio3.id;
        var ra4 = radio4.id;
        var ra5 = radio5.id;
        var ra6 = radio6.id;
        var ra7 = radio7.id;
 
    if (index == ra1){
        radio1.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra2){
        radio2.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra3){
        radio3.checked=true;
        contenedor.src = imagenes[index];
    }else if (index == ra4){
        radio4.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra5){
        radio5.checked=true;;
        contenedor.src = imagenes[index];
    }else if (index == ra6){
        radio6.checked=true;
        contenedor.src = imagenes[index];
    }else if (index == ra7){
        radio7.checked = true;
        contenedor.src = imagenes[index];
    }
    index++;
       localStorage.setItem("index",index); 
      
    }else {
        localStorage.removeItem("index");
    }
}
}

function cambiaImg(){
    
    var pagina = document.querySelector("#tituloP").textContent;
    
    if (pagina == "Novedades"){
    cambiarFoto();
    
    
    
    setInterval(cambiarFoto,5000);
   }
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
