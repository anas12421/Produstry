$(function(){

  "use strick"

  // preloader js

setTimeout(function () {
  $(".preloader_bg ").fadeToggle()
 }, 1500);

  // back2top i js

  $(".back2top i").on('click' , function(){
    $("html,body").animate({
      scrollTop:0
    },1200)
  })

  $(window).on('scroll' , function(){
    let scrolling = $(this).scrollTop()

    if( scrolling > 20){
      $(".back2top i").fadeIn(500)
    }else{
      $(".back2top i").fadeOut(500)
    }

    // navbar js

    if(scrolling > 50){
      $(".menu").addClass("menu_ex")
    }else{
      $(".menu").removeClass("menu_ex")
    }
  })






// home counter js
$('.counter').counterUp({
  delay: 10,
  time: 1000
});




// blog part js

var mixer = mixitup('.mix_main');







})