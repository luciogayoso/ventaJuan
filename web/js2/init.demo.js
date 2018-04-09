$(document).ready(function () {

    if (screen.width < 1025) {
         var swiper = new Swiper('#slider .swiper-container', {
      pagination: {
        el: '#slider .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });

        //MODAL
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


        // NAV
        $('.hamburger').click(function () {
            this.classList.toggle('is-active');
            $('.menuMobile').animate({
                width: 'toggle'}, {
                duration: 50
            });
        });

        //MENU DESPLEGABLE
        $('nav .menuMobile li').click(function () {
            
            if(this.children[1] !== undefined){
            this.classList.toggle('active');
            $(this.children[1]).animate({
                height: 'toggle'}, {
                duration: 50
            });
        }
        });


    }



    $('#ex1').zoom();
    $(".Thumbs .swiper-slide").on("click", function () {
        var op = document.querySelectorAll(".Thumbs .swiper-slide");
        for (var i = 0; i < op.length; i++) {
            op[i].style.opacity = 1;
        }
        this.style.opacity = 0.4;
        $(".img-principal").attr("src", $(this.children[0]).attr('src'));
        $('#ex1').zoom().trigger('zoom.destroy');
        $(".zoomImg").attr("src", $(this.children[0]).attr('src'));
        $('#ex1').zoom();

    });

     new Swiper('.Thumbs', {
     
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween:15,
        autoHeight: true,
        freeMode: true,
        freeModeSticky: true,
        grabCursor: true,
        pagination: {
        el: '.Thumbs .swiper-pagination',
        clickable: true
      }
    });
    
    new Swiper('.publicidad', {
         spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.publicidad .swiper-pagination',
        clickable: true,
      },
  });



});