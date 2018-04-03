var agregarCarrito = document.querySelector("#carrito");
agregarCarrito.addEventListener("click",cargar);

var tallesxl = document.querySelector(".talleXL");
tallesxl.addEventListener("click",function (){
    var radio = document.querySelector("#talleXL");
    radio.checked = true;
    if (radio.checked == true){
        tallesxl.style.backgroundColor = "black";
        tallesxl.style.color = "white";
        tallesl.style.backgroundColor = "white";
        tallesl.style.color = "black";
        tallesm.style.backgroundColor = "white";
        tallesm.style.color = "black";
        talless.style.backgroundColor = "white";
        talless.style.color = "black";
    }
    
});

var tallesl = document.querySelector(".talleL");
tallesl.addEventListener("click",function (){
    var radio = document.querySelector("#talleL");
    radio.checked = true;
    if (radio.checked == true){
        tallesl.style.backgroundColor = "black";
        tallesl.style.color = "white";
        tallesxl.style.backgroundColor = "white";
        tallesxl.style.color = "black";
        tallesm.style.backgroundColor = "white";
        tallesm.style.color = "black";
        talless.style.backgroundColor = "white";
        talless.style.color = "black";
    }
    
});

var tallesm = document.querySelector(".talleM");
tallesm.addEventListener("click",function (){
    var radio = document.querySelector("#talleM");
    radio.checked = true;
    if (radio.checked == true){
        tallesm.style.backgroundColor = "black";
        tallesm.style.color = "white";
        tallesl.style.backgroundColor = "white";
        tallesl.style.color = "black";
        tallesxl.style.backgroundColor = "white";
        tallesxl.style.color = "black";
        talless.style.backgroundColor = "white";
        talless.style.color = "black";
    }
    
});

var talless = document.querySelector(".talleS");
talless.addEventListener("click",function (){
    var radio = document.querySelector("#talleS");
    radio.checked = true;
    if (radio.checked == true){
        talless.style.backgroundColor = "black";
        talless.style.color = "white";
        tallesl.style.backgroundColor = "white";
        tallesl.style.color = "black";
        tallesm.style.backgroundColor = "white";
        tallesm.style.color = "black";
        tallesxl.style.backgroundColor = "white";
        tallesxl.style.color = "black";
    }
});

var cantidad = document.querySelector("#cantidad");
cantidad.addEventListener("mouseover",function (){
    var span = document.querySelector("#elegirCantidad");
span.textContent = "";
});

function cargar(){
    var talle = document.querySelectorAll(".talle");
    var radioCheked;
    var cantidad = document.querySelector("#cantidad");
    
    for (var i=0; i<talle.length;i++){
        if (talle[i].checked == true){
            radioCheked = i;
        }
    }
    
    var idProducto = localStorage.getItem("idProducto"); 
       var idUsuario = sessionStorage.getItem("usuario");
        if (idUsuario == null){
            alert("debe ingresar al sistema");
            location.href = "login.html";
        }else if (radioCheked == undefined){
            var span = document.querySelector("#elegirTalle");
        span.innerHTML = "Debe seleccionar un talle";
        }else if (cantidad.selectedIndex == 0){
            var span = document.querySelector("#elegirCantidad");
        span.innerHTML = "Debe elegir cantidad";
        }else{
            var usr = JSON.parse(idUsuario);
            usrId = usr.id;
            var tal = talle[radioCheked].value;
            var cant = cantidad.selectedIndex;
            
            var dato = {
               "idUsuario":usrId,
               "idProducto":idProducto,
               "talle":tal,
               "cantidad":cant
         };
         
    var json = JSON.stringify(dato);
    
   var xhr = ajaxHeader("post","./cargarCarrito"); 
   xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200){
           console.log(xhr.responseText);
         talle[radioCheked].checked = false;
         cantidad.selectedIndex = 0;
         var idRadio = talle[radioCheked].id;
         var classDiv = "."+idRadio;
         var divTi = document.querySelector(classDiv);
          divTi.style.backgroundColor = "white";
          divTi.style.color = "black";
       }  
       
   };
   xhr.send(json);
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
}

