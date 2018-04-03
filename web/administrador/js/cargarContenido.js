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

imagenes.actualizarProducto2 =function (){
var cajaFoto = document.querySelector("#fotoActulizar2");
var foto = document.querySelector("#actualiza2");
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
            mostrarUpdate2.style.marginRight = "60%";
            mostrarUpdate2.appendChild(image);
        }
    }
};

stockTalle = {};
stockTalle.sumar = function (){
  var talles = document.querySelector("#S");
  var tallem = document.querySelector("#M");
  var tallel = document.querySelector("#L");
  var tallexl = document.querySelector("#XL");
  
    if (talles.value === ""){
        talles.value = 0;
        stockTalle.sumar();
    }else if (tallem.value === ""){
        tallem.value = 0;
        stockTalle.sumar();
    }else if (tallel.value === ""){
        tallel.value = 0; 
        stockTalle.sumar();
    }else if (tallexl.value === ""){
        tallexl.value = 0;  
        stockTalle.sumar();
    }else {
        var s = parseInt(talles.value);
        var m = parseInt(tallem.value);
        var l = parseInt(tallel.value);
        var xl = parseInt(tallexl.value);


        var inputStock = document.querySelector("#stock");

        var n = s + m + l + xl;

        inputStock.value = n; 
    }
};

Enviar = {};
Enviar.enviarOtraFoto = function (){
    var eligirPro2 = document.querySelector(".productos");
    var elegir = eligirPro2.selectedOptions[0].attributes[0].value;
    if (elegir === ""){
        var span = document.querySelector("#span11");
        span.innerHTML = "Debe elegir un producto";
    }else if (updateFoto2.files.length === 0){
        var span = document.querySelector("#span12");
        span.innerHTML = "Debe escoger una foto";
    }else {
        var data = new FormData();
        data.append("put","true1");
        data.append("producto", elegir);
        data.append("foto", updateFoto2.files[0]);
        
 var xhr = ajaxFile("POST","../cargarProductos");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           eligirPro2.value = "";
           updateFoto2.value = "";
           mostrarUpdate2.innerHTML = "";
           console.log(xhr.responseText);
         } 
    };
    xhr.send(data);
    }
};

Enviar.enviar = function () {
    var eligirPro = document.querySelector("#productos");
    var elegir = eligirPro.selectedOptions[0].attributes[0].value;
    var colorUpdate = document.querySelector("#colorUpdate").value;
    if (elegir === ""){
        var span = document.querySelector("#span8");
        span.innerHTML = "Debe elegir un producto";
    }else if (updateFoto.files.length === 0){
        var span = document.querySelector("#span9");
        span.innerHTML = "Debe escoger una foto";
    }else if (colorUpdate === undefined){
        var span = document.querySelector("#span10");
        span.innerHTML = "Debe escoger un color";
    }else {
        var data = new FormData();
        data.append("put","true");
        data.append("producto", elegir);
        data.append("foto", updateFoto.files[0]);
        data.append("color", colorUpdate);
   
 var xhr = ajaxFile("POST","../cargarProductos");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           eligirPro.value = "";
           updateFoto.value = "";
           mostrarUpdate.innerHTML = "";
           colorUpdate.value = "#050505";
           
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
    var talleSE = talleS.value;
    var talleME = talleM.value;
    var talleLE = talleL.value;
    var talleXLE = talleXL.value;
    var descripcionE = descripcion.value;
    
   var tipoE = tipo.selectedOptions[0].value;
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
    }else if (precioE === ""){
        var span = document.querySelector("#span5");
        span.innerHTML = "Debe ingresar el precio";
    }else  if (tipoE === ""){
        var span = document.querySelector("#span6");
        span.innerHTML = "Debe elegir un tipo de producto";
    }else if (descripcionE === ""){
        var span = document.querySelector("#span7");
        span.innerHTML = "Debe poner una pequeña descripcion";
    }else{
        var data = new FormData();
        data.append("put","false");
        data.append("nombre", nombreE);
        data.append("foto", foto.files[0]);
        data.append("fotob", fotob.files[0]);
        data.append("color", colorE);
        data.append("precio", precioE);
        data.append("stock", stockE);
        data.append("tipo", tipoE);
        data.append("talleS", talleSE);
        data.append("talleS", talleSE);
        data.append("talleM", talleME);
        data.append("talleL", talleLE);
        data.append("talleXL", talleXLE);
        data.append("descripcion", descripcionE);
        
    
 var xhr = ajaxFile("POST","../cargarProductos");
    xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                nombre.value = "";
                color.value = "#000000";
                stock.value = 0;
                precio.value = "";
                foto.value = "";
                fotob.value = "";
                talleS.value = 0;
                talleM.value = 0;
                talleL.value = 0;
                talleXL.value = 0;
                tipo.value = "";
                descripcion.value = "";
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
               var select2 = document.querySelector(".productos");
                var output = '<option id="vacio"></option>\n\
                              <option disabled>Seleccione un producto</option>';
                              
    
                                for (var i = 0; i < json.length; i++) {

                    output += '<option id="' + json[i].id_producto + '" value="' + json[i].p_nombre + '">' + json[i].p_nombre + '</option>';
                }
                               
                            
                 select.innerHTML = output;
                select2.innerHTML = output;
          console.log(json[0].p_img);
            }           
  };
   xhr.send();
}

var enviar = document.querySelector("#enviar");
enviar.addEventListener("click",function () {Enviar.validar();},false);
var agregar = document.querySelector("#agregar");
agregar.addEventListener("click",function () {Enviar.enviar();},false);
var agregarOtraFot = document.querySelector("#agregarFoto");
agregarOtraFot.addEventListener("click",function () {Enviar.enviarOtraFoto();},false);

var mostrar = document.querySelector("#foto");
var mostrarb = document.querySelector("#fotob");
var mostrarUpdate = document.querySelector("#fotoActulizar");
var mostrarUpdate2 = document.querySelector("#fotoActulizar2");
var foto = document.querySelector("#cargar");
foto.addEventListener("change", function () {imagenes.cargar();},false);
var fotob = document.querySelector("#cargarb");
fotob.addEventListener("change", function () {imagenes.cargarb();},false);
var updateFoto = document.querySelector("#actualiza");
updateFoto.addEventListener("change", function () {imagenes.actualizarProducto();},false);
var updateFoto2 = document.querySelector("#actualiza2");
updateFoto2.addEventListener("change", function () {imagenes.actualizarProducto2();},false);
var nombre = document.querySelector("#nombre");
var precio = document.querySelector("#precio");
var stock = document.querySelector("#stock");
var color = document.querySelector("#color");
var tipo = document.querySelector("#tipo");
var talleS = document.querySelector("#S");
talleS.addEventListener("input",function (){ stockTalle.sumar();},false);
var talleM = document.querySelector("#M"); 
talleM.addEventListener("input",function (){ stockTalle.sumar();},false);
var talleL = document.querySelector("#L");
talleL.addEventListener("input",function (){ stockTalle.sumar();},false);
var talleXL = document.querySelector("#XL");
talleXL.addEventListener("input",function (){ stockTalle.sumar();},false);
var descripcion = document.querySelector("#descripcion");

var eligirPro = document.querySelector("#productos");
var colorUpdate = document.querySelector("#colorUpdate");
var eligirPro2 = document.querySelector(".productos");


var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var span3 = document.querySelector("#span2");
var span4 = document.querySelector("#span4");
var span5 = document.querySelector("#span5");
var span6 = document.querySelector("#span6");  
var span7 = document.querySelector("#span7");  
var span8 = document.querySelector("#span8");  
var span9 = document.querySelector("#span9");  
var span10 = document.querySelector("#span10");  
var span11 = document.querySelector("#span11");  
var span12 = document.querySelector("#span12");  

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

tipo.addEventListener("mouseover",function (){
    span6.innerHTML = "";
},false);

descripcion.addEventListener("mouseover",function (){
    span7.innerHTML = "";
},false);

eligirPro.addEventListener("mouseover",function (){
    span8.innerHTML = "";
},false);

updateFoto.addEventListener("mouseover",function (){
    span9.innerHTML = "";
},false);

colorUpdate.addEventListener("mouseover",function (){
    span10.innerHTML = "";
},false);

eligirPro2.addEventListener("mouseover",function (){
    span11.innerHTML = "";
},false);

updateFoto2.addEventListener("mouseover",function (){
    span12.innerHTML = "";
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

function ajaxFilePut(metodo, url){
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