window.onload = carrito;

function carrito(){
    var usuario = sessionStorage.getItem("usuario");
    
    var jusuario = JSON.parse(usuario);
    
    var id = jusuario.id;
    
      var xhr = ajaxHeader("get","./cargarCarrito?idUsuario="+id); 
   xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200){
           var respuesta = eval(xhr.responseText)
           var restotal = {};
           var resSave = new Array();
           
           var output = '<table style="text-align: center;width: 60%;">\n\
                       <tr>\n\
                        <th>Img</th>\n\
                        <th>Nombre</th>\n\
                        <th>Precio</th>\n\
                        <th>talle</th>\n\
                        <th>Cantidad</th>\n\
                    </tr>';
           
            for (var i = 0; i < respuesta.length ; i++){
                var img = respuesta[i][0];
                var nombre = respuesta[i][1];
                var precio = respuesta[i][2];
                var talle = respuesta[i][3];
                var cantidad = respuesta[i][4];
                var idCarrito = respuesta[i][5];
             
             resSave[i] = { 
             "img" : img,
             "nombre" : nombre,
             "precio" : precio,
             "talle" : talle,
             "cantidad" : cantidad,
             "idCarrito" : idCarrito
         };
         
              output += '<tr>\n\
                        <td><img src="img/' + img + '" width="60px" alt=""/></td>\n\
                        <td>' + nombre + '</td>\n\
                        <td>$ ' + precio + '</td>\n\
                        <td>' + talle + '</td>\n\
                        <td>' + cantidad + '</td>\n\
                        <td><button id="'+idCarrito+'" onclick="eliminar(this)">X</button></td>\n\
                    </tr>';
                
             
           }
           
           output += '</table>';
           var jsonC = JSON.stringify(resSave);
           localStorage.setItem("carrito",jsonC);
          document.querySelector(".seccion").innerHTML = output;
            botonPago();
       }   
   };
   xhr.send();
}

function eliminar(e){
    var id = e.id;
    
    var xhr = ajaxHeader("delete","./cargarCarrito?idUsuario="+id); 
   xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200){
            alert(xhr.responseText);
          carrito();
       }    
};
xhr.send();
}

function botonPago(){
        
    var jCarrito = localStorage.getItem("carrito");

    var xhr = ajaxHeader("post","./mercadoPago"); 
   xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200){
           var comprar = document.querySelector("#comprarMercado");
           comprar.href = xhr.responseText;
           
           console.log(comprar);
          
       }    
};
xhr.send(jCarrito);
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


