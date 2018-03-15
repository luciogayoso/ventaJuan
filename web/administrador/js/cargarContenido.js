window.addEventListener("load",cargarSelecProducto,false);

imagenes = {};
imagenes.cargar = function (){
var cajaFoto = document.querySelector("#foto");
var foto = document.querySelector("#cargar");
var archivo = foto.files;
    if (archivo.length === 0) {
         cajaFoto.innerHTML = "";
    } else {

        for (var i = 0; i < archivo.length; i++) {
            var image = document.createElement('img');
            image.src = window.URL.createObjectURL(archivo[i]);
            image.style.width = "200px";
            image.style.height = "300px";
            image.id = "img";
            mostrar.style.marginRight = "60%";
            mostrar.appendChild(image);
        }

    }

};


imagenes.cargarb = function (){
var cajaFotob = document.querySelector("#fotob");
var fotob = document.querySelector("#cargarb");
var archivo = fotob.files;
    if (archivo.length === 0) {
        cajaFotob.innerHTML = "";
    } else {

        for (var i = 0; i < archivo.length; i++) {
            var image = document.createElement('img');
            image.src = window.URL.createObjectURL(archivo[i]);
            image.style.width = "200px";
            image.style.height = "300px";
            image.id = "imgb";
            mostrarb.style.marginRight = "60%";
            mostrarb.appendChild(image);
        }

    }

};

imagenes.actualizarProducto =function (){
var cajaFoto = document.querySelector("#fotoActulizar");
var foto = document.querySelector("#actualiza");
var archivo = foto.files;
    if (archivo.length === 0) {
        cajaFoto.innerHTML = "";
    } else {

        for (var i = 0; i < archivo.length; i++) {
            var image = document.createElement('img');
            image.src = window.URL.createObjectURL(archivo[i]);
            image.style.width = "200px";
            image.style.height = "300px";
            image.id = "imgb";
            mostrarUpdate.style.marginRight = "60%";
            mostrarUpdate.appendChild(image);
        }

    }

};

Enviar = {};
Enviar.enviar = function (){
    var eligirPro = document.querySelector("#productos");
    var elegir = eligirPro.selectedOptions.text;
   
    if (elegir === undefined){
        var span = document.querySelector("#span8");
        span.innerHTML = "Debe elegir un producto";
    }else if (updateFoto.files.length === undefined){
        var span = document.querySelector("#span9");
        span.innerHTML = "Debe escoger una foto";
    }else if (colorUpdate === ""){
        var span = document.querySelector("#span4");
        span.innerHTML = "Debe escoger un color";
    }else {
        var colorUpdate = colorUpdate.value;
        var data = new FormData();
        data.append("producto", elegir);
        data.append("foto", updateFoto.files[0]);
        data.append("color", colorUpdate);
    
 var xhr = ajaxFile("PUT","../cargarProductos");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           eligirPro.selectedOptions = "";
           updateFoto.value = "";
           mostrarUpdate.innerHTML = "";
           colorUpdate.value = "#rrggbb";
           
         console.log(xhr.responseText);
        } 
    };
    xhr.send(data);
    }
};

Enviar.validar = function (){
    var nombreE = nombre.value;
    var precioE = precio.value;
    var stockE = stock.value;
    var colorE = color.value;
   var tipoE = tipo.selectedOptions.value;
    if (nombreE === ""){
        var span = document.querySelector("#span1");
        span.innerHTML = "Debe ingresar un nombre para este producto";
    }else if (foto.files.length === undefined){
        var span = document.querySelector("#span2");
        span.innerHTML = "Debe escoger una foto";
    }else if (fotob.files.length === undefined){
        var span = document.querySelector("#span3");
        span.innerHTML = "Debe escoger una foto";
    }else if (colorE === ""){
        var span = document.querySelector("#span4");
        span.innerHTML = "Debe escoger un color";
    }else if (stockE === ""){
        var span = document.querySelector("#span5");
        span.innerHTML = "Debe ingresar el precio";
    }else if (stockE === ""){
        var span = document.querySelector("#span6");
        span.innerHTML = "Debe ingresar el stock";
    }else if (tipoE === ""){
        var span = document.querySelector("#span7");
        span.innerHTML = "Debe elegir un tipo de producto";
    }else  {
        var data = new FormData();
        data.append("nombre", nombreE);
        data.append("foto", foto.files[0]);
        data.append("fotob", fotob.files[0]);
        data.append("color", colorE);
        data.append("precio", precioE);
        data.append("stock", stockE);
        data.append("tipo", tipoE);
    
 var xhr = ajaxFile("POST","../cargarProductos");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           nombre.value = "";
           color.value = "#rrggbb";
           stock.value = "";
           precio.value = "";
           foto.value = "";
           fotob.value = "";
           mostrar.innerHTML = "";
           mostrarb.innerHTML = "";
           
         console.log(xhr.responseText);
        } 
    };
    xhr.send(data);
    }
};

function cargarSelecProducto(){
    
    var xhr = ajaxHeader("GET","../cargarProductos");
  xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
               var respuesta = xhr.responseText; 
               var json = JSON.parse(respuesta);
               var select = document.querySelector("#productos");
               
                var output = '<option id="vacio"></option>\n\
                              <option disabled>Seleccione un producto</option>';
                              
    
                                for (var i = 0; i < json.length; i++) {

                    output += '<option id="' + json[i].id_producto + '" value="' + json[i].p_nombre + '">' + json[i].p_nombre + '</option>';
                }
                               
                            
                 select.innerHTML = output;
                console.log(json[0].p_img);
            }           
  };
   xhr.send();
}

var enviar = document.querySelector("#enviar");
enviar.addEventListener("click",function () {Enviar.validar();},false);
var agregar = document.querySelector("#agregar");
agregar.addEventListener("click",function () {Enviar.enviar();},false);

var mostrar = document.querySelector("#foto");
var mostrarb = document.querySelector("#fotob");
var mostrarUpdate = document.querySelector("#fotoActulizar");
var foto = document.querySelector("#cargar");
foto.addEventListener("change", function () {imagenes.cargar();},false);
var fotob = document.querySelector("#cargarb");
fotob.addEventListener("change", function () {imagenes.cargarb();},false);
var updateFoto = document.querySelector("#actualiza");
updateFoto.addEventListener("change", function () {imagenes.actualizarProducto();},false);
var nombre = document.querySelector("#nombre");
var nombre = document.querySelector("#nombre");
var precio = document.querySelector("#precio");
var stock = document.querySelector("#stock");
var color = document.querySelector("#color");
var tipo = document.querySelector("#tipo");
var eligirPro = document.querySelector("#productos");
var colorUpdate = document.querySelector("#colorUpdate");

var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var span3 = document.querySelector("#span2");
var span4 = document.querySelector("#span4");
var span5 = document.querySelector("#span5");
var span6 = document.querySelector("#span6");  
var span7 = document.querySelector("#span7");  
var span8 = document.querySelector("#span8");  
var span9 = document.querySelector("#span9");  

nombre.addEventListener("mouseover",function (){
    span1.innerHTML = "";
},false);

foto.addEventListener("mouseover",function (){
    span2.innerHTML = "";
},false);

fotob.addEventListener("mouseover",function (){
    span3.innerHTML = "";
},false);

color.addEventListener("mouseover",function (){
    span4.innerHTML = "";
},false);

precio.addEventListener("mouseover",function (){
    span5.innerHTML = "";
},false);

stock.addEventListener("mouseover",function (){
    span6.innerHTML = "";
},false);

tipo.addEventListener("mouseover",function (){
    span7.innerHTML = "";
},false);

eligirPro.addEventListener("mouseover",function (){
    span8.innerHTML = "";
},false);

colorUpdate.addEventListener("mouseover",function (){
    span9.innerHTML = "";
},false);

function ajaxFile(metodo, url){
     if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if(window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(xhr){
        xhr.open(metodo, url);
    }
    return xhr; 
};

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