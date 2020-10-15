jQuery('#carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
jQuery('#carousel-2, #carousel-3, #carousel-4').owlCarousel({
    loop: true,
    margin: 35,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop() > 174){  

        jQuery('.menu-top').addClass("sticky");
        jQuery('.article-right-sidebar').addClass("fixed-sidebar");
        
        

    }  else{

        jQuery('.menu-top').removeClass("sticky");
        jQuery('.article-right-sidebar').removeClass("fixed-sidebar");
    }

});

jQuery(document).ready(function() {
     jQuery(window).resize(function() {
                
     });
});
function windowSize(){
    if (jQuery(window).width() <= '575'){
        jQuery(".banner-left-sidebar").appendTo(".mobile-sidebar");
    }
}
jQuery(window).on('load resize',windowSize);