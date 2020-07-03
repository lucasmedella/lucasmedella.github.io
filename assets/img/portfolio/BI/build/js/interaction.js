////////////////////////////////////////////////////    
// Interaction primary
/////////////////////////////////////////////////////


// function anime.js animate value indicator global
function AboutIndicatorValueAnimate() {
    $('.about-indicator__value__animate .letters').each(function(){
        $(this).html($(this).text().replace(/([^]|\w)/g, "<span class='letter'>$&</span>"));
        });
        
        anime.timeline({loop: false})
        .add({
            targets: '.about-indicator__value__animate .line',
            scaleY: [0,0.81],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 1500
        })
        .add({
            targets: '.about-indicator__value__animate .line',
            translateX: [0,$(".about-indicator__value__first").width()],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
            targets: '.about-indicator__value__animate .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: function(el, i) {
            return 34 * (i+1)
            }
        }).add({
            targets: '.about-indicator__value__animate .line',
            translateX: [$(".about-indicator__value__first").width()],
            scaleY: [0.81,0],
            easing: "easeOutExpo",
            duration: 500
        }); 
}


$(document).ready(function () {
    
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
    
    //function anime text
    AboutIndicatorValueAnimate();

    
    //laod page add class body
    $('body').addClass('start-animate-page');
  

    //next prev indicator click add class and animate interaction
    $('.indicator-nav__btn, .card').on('click', function (e) {
        
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
         
        //Function anime text
         AboutIndicatorValueAnimate();
         
        //toogle class star for remove
        $('body').removeClass('start-animate-page next');
        $('body').addClass('next-animate-page');
        
        // whating 2s toogle class next for start
        setTimeout(function(){ 
            $('body').removeClass('next-animate-page');
            $('body').addClass('start-animate-page');
            $('.hilight-country').addClass('hilight-country--is-animate');
        }, 2000);

        //remove class animate flags
        setTimeout(function(){
            $('.hilight-country').removeClass('hilight-country--is-animate');
        }, 1000);

    });


    ////////////////////////////////////////////////////    
    // Interaction secondary
    /////////////////////////////////////////////////////

    //Add Class list coutry/register
    $('.value-indicator__container .value-indicator__item').click(function(event){
        $('.value-indicator__item').removeClass('value-indicator__item--is-active');    
        $(this).addClass('value-indicator__item--is-active');    
    });


    $('.js-btntab-toolge, .card').click(function(event){
        $('.indicator-nav').animate({
            scrollTop: 0
        }, 700);
        $(".indicator-nav").toggleClass("indicator-nav__is-close indicator-nav__is-open"); 
        $("body").toggleClass("disable-scroll");

     
    });

    

    /*
    $('#map__selecteds .map__territory').each(function(i) {
        (function(bself) {
            setTimeout(function() {
                $(bself).addClass('animation2');
            },(i*500)+100);
        })(this);
    });
    */

//Button Fullscreen
   function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  
  document.getElementById('js-btnFullscreen').addEventListener('click', function() {
    
		var timer = setTimeout(function() {
            window.location='template-indicator.html'
        }, 3000);	
  });


});






$('.btn-load').click(function(event){
    $(".logo__svg--is-loading").toggleClass("logo__svg--is-animed"); 
    $(".btn-load").html("<i class='fas fa-fw fa-spinner fa-pulse'></i> Carregando"); 
    $(".btn-load").toggleClass("disabled");
    $("body").toggleClass("body-loading");
});


var path = document.querySelector('#Vector_2');
var length = path.getTotalLength();
console.log(length)
