// home banner slide


$('.banner_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow:'.next_arrow',
  prevArrow:'.prev_arrow',
});


// home blog slide

$('.hblog_main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow:'.bn_arrow',
  prevArrow:'.bp_arrow',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// home testimonial slide

$('.htesti_top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.htesti_img'
});
$('.htesti_img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.htesti_top',
  centerMode: true,
  centerPadding: '0',
  autoplay: true,
  autoplaySpeed: 1700,
  nextArrow:'.htn_arrow',
  prevArrow:'.htp_arrow',
});



// home market place js

$('.home_marketplace').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1900,
  centerMode: true,
  centerPadding: '0',
  nextArrow:'.mn_arrow',
  prevArrow:'.mp_arrow',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
        
      }
    },
    {
      breakpoint: 762,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});


// team part js

$('.team_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow:'.tmn_arrow',
  prevArrow:'.tmp_arrow',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
        
      }
    },
    {
      breakpoint: 762,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});