function hola1() {
 
  //FIN MOMENTANEO
  
    if (screen.width < 769) {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
        });
        
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById("img01");
        $("img").click(function () {
            document.querySelector(".contenedor").style.display = "none";
            modal.style.display = "block";
            modalImg.src = this.src;
        });

        var span = document.getElementsByClassName("close")[0];
        span.addEventListener("click", function () {
            document.querySelector(".contenedor").style.display = "grid";
            modal.style.display = "none";
        }, false);
    }


    $('#ex1').zoom();

    $(".nav-img img").hover(function () {
        $(".img-principal").attr("src", $(this).attr('src'));
        $('#ex1').zoom().trigger('zoom.destroy');
        $(".zoomImg").attr("src", $(this).attr('src'));
        $('#ex1').zoom();
    });
  }


$(document).ready(function hola(){
    var idProducto = localStorage.getItem("idProducto");
    
    $.ajax({
                data:  idProducto,
                url:   './cargarProductos?id_producto='+idProducto,
                type:  'get',
                beforeSend: function () {
                        $("#resultado").html("Procesando, espere por favor...");
                },
                success:  function (response) {
                 var res =eval(response);
            var segundos = $("#secundarios");
            var img2 = '<img src="img/'+ res[0].p_img +'" id="'+res[0].id_producto+'" alt=""/>'+
                    '<img id="'+res[0].id_producto+'" src="img/' + res[0].p_img_b + '" alt=""/>';
            segundos.html(img2);
                    
                    var zoom = $("#ex1");
                    var img1 = '<img class="img-principal" style="width: 100%; margin: auto; display: block;" src="img/'+res[0].p_img+'" alt="Daisy on the Ohoopee"/>';
                    zoom.html(img1);
                   
                   var nombre = $("#nombre"); 
                   var titulo = res[0].p_nombre;
                   nombre.text(titulo);
                    
                    var precio = $("#precio"); 
                   var monto = "$ "+res[0].p_precio;
                   precio.text(monto);
                   
               var color = $("#colores");
               var colorBase = '<a id="color1" class="color" style="background-color:'+res[0].p_color+'" href="#"></a>';
                   color.html(colorBase);
          
            
            $(".talleM").attr(":id",res[0].p_talleM);
           $(".talleL").attr(":id",res[0].p_talleL);
           $(".talleXL").attr(":id",res[0].p_talleXL);
           $(".talleS").attr(":id",res[0].p_talleS);
            
            var talleS = document.querySelector("#talleS");
            var talleM = document.querySelector("#talleM");
            var talleL = document.querySelector("#talleL");
            var talleXL = document.querySelector("#talleXL");
            
                    if ( talleS.checked == true){
                var divt = document.querySelector(".talleS");
                divt.style.backgroundColor = "black";
                divt.style.color = "white";
            }
            
            if ( talleM.checked == true){
                var divt = document.querySelector(".talleM");
                divt.style.backgroundColor = "black";
                divt.style.color = "white";
            }
            if ( talleL.checked == true){
                var divt = document.querySelector(".talleL");
                divt.style.backgroundColor = "black";
                divt.style.color = "white";
            }
            if ( talleXL.checked == true){
                var divt = document.querySelector(".talleXL");
                divt.style.backgroundColor = "black";
                divt.style.color = "white";
            }
            hola1();     
           }        
     });
    
  });
 
