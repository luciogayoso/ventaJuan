window.addEventListener("load", pedirProducto, false);
function pedirProducto(){
 var xhr = ajaxHeader("GET","./cargarProductos?pagina =");
  xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
               var respuesta = xhr.responseText; 
               var json = JSON.parse(respuesta);
               var seccion2 = document.querySelector("#galeria");
               var seccion = seccion2.childNodes[1];
                var output = '';
                  
                                for (var i = 0; i < json.length; i++) {

                    output += '<article class="galeria-img col-lg-3 col-lg-right-1 col-sm-4 col-xs-6">\n\
                            <div class="container-article">\n\
                                <div class="hover-img">\n\
                                    <div class="frente">\n\
                                        <img id="imagen" src="img/'+json[i].p_img+'" value="'+ json[i].id_producto +'" alt=""/>\n\
                                    </div>\n\
                                    <div class="atras">\n\
                                        <img src="img/'+json[i].p_img_b+'" alt=""/>\n\
                                    </div>\n\
                                </div>\n\
                                <div class="detallePedido">\n\
                                    <h4>'+json[i].p_nombre+'</h4>\n\
                                    <ul id="ul'+ json[i].id_producto +'" class="colores">\n\
                                        <li>\n\
                                            <input class="otros1" name="colores" type="radio" id="'+json[i].p_img+'" value="'+ json[i].id_producto +'" />\n\
                                            <label for="'+json[i].p_img+'" class="red" style="background:'+json[i].p_color+';" onclick="cambiarFotoRadio(this)"></label>\n\
                                        </li>\n\
                                    </ul>\n\
                                </div>\n\
                            </div>\n\
                        </article>';
                otrosColores1(json[i].id_producto);
          }              
                 seccion.innerHTML = output; 
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

function cambiarFotoRadio(label){
   var e = label.previousElementSibling;
   
   var idFoto = e.attributes[4].nodeValue;
   var classNombre = e.attributes[0].nodeValue;
   var imagenes = document.querySelectorAll("#imagen");
   
  var ruta = e.attributes[3].nodeValue;
   var rutaCompleta = "http://localhost:8080/ventaJuan/img/"+ruta;
   
    for (var i = 0; i< imagenes.length;i++){
        var localImg = imagenes[i].attributes[2].nodeValue;
        var evento = imagenes[i];   
        
        if (localImg === idFoto){
            if (classNombre === "otros1"){
                evento.src = rutaCompleta;
                console.log(classNombre);
                return;
            }else {
                evento.src = rutaCompleta;
                console.log("secundario");
                return;
            }
             
        }
    }}
   
   function otrosColores1(e){
      
      var idProducto = e;
    var xhr = ajaxHeader("GET","./seleccionarTipoPro?contenido=null&idPro="+idProducto);
  xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
               var respuesta = xhr.responseText;
               var json = JSON.parse(respuesta);
          var ul = document.getElementById("ul"+idProducto);
               
                for (var i = 0; i < json.length; i++) {
            
                 var li = document.createElement("li");
                 var input = document.createElement("input");
                 var label = document.createElement("label");

              input.setAttribute("class","otros");
                 input.setAttribute("name","colores");
                 input.setAttribute("type","radio");
                 input.setAttribute("id",json[i].o_img);
                 input.setAttribute("value",idProducto);
                 
              label.setAttribute("for",json[i].o_img);
              label.setAttribute("class","red");
              label.setAttribute("style","background:"+json[i].o_color);
              label.setAttribute("onclick","cambiarFotoRadio(this)");
   
                li.appendChild(input);
                li.appendChild(label);
                
                ul.appendChild(li);
                }
                 
      }           
     };
    xhr.send();
        
 }

