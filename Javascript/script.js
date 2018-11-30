$(document).ready(function () {
    //Navbar on Scroll
   $(window).on('scroll', function () {
       if ($(this).scrollTop()>=5 ) {
           $(".navbar").css({
               height: 'auto',
               backgroundColor: '#e0e0e0'
           });
           $(".navbar .links a").css({
               color: '#0f0f0f',
               borderRight: '#e0e0e0'
           });
           $("#dropdown").css({
               backgroundColor: '#fff'
           });
           $(".navbar .logo .main").hide();
           $(".navbar .logo .sec").show();
       } else {
           $(".navbar").css({
               backgroundColor: '#0f0f0f'
           });
           $(".navbar .links a").css({
               color: '#fff'
           });
           $("#dropdown").css({
               backgroundColor: '#0f0f0f'
           })
           $(".navbar .logo .main").show();
           $(".navbar .logo .sec").hide();
       }
       // assosiative navbar responsive
       if ($(this).scrollTop()>=5 && ($(window).width() < 975)) {
           $(".navbar2").css({
               top: 0
           })
           $(".header .links3").css({
               top: '4%'
           })
       } else {
           $(".navbar2").css({
               top: 'auto'
           })
           $(".header .links3").css({
               top: '67%'
           })
       }
       //Active on assosiative navbar by scrolling
       if($(this).scrollTop() >= 0 && $(this).scrollTop() < 395){
           $(".header .navbar2 #offers").addClass("active").siblings().removeClass("active");
       } else if ($(this).scrollTop() > 400 && $(this).scrollTop() < 945){
           $(".header .navbar2 #new").addClass("active").siblings().removeClass("active");
       } else if ($(this).scrollTop() > 950 && $(this).scrollTop() < 1195){
           $(".header .navbar2 #reg").addClass("active").siblings().removeClass("acitve");
       } else if($(this).scrollTop() > 1200){
           $(".header .navbar2 #partners").addClass("active").siblings().removeClass("active");
       } else{
           $(this).removeClass("active");
       }
       //Showing arrowup on scroll
       if ($(this).scrollTop() >= 200){
           $(".arrowup").show(300);
       } else {
           $(".arrowup").hide(300);
       }
   });
    //Scrolling Down by clicking on assosiative navbar
    $(".header .navbar2 #offers").on('click', function (){
        $("body, html").animate({
            scrollTop: 0
        }, 1200)
    })
    $(".header .navbar2 #new").on('click', function(){
        $("body, html").animate({
            scrollTop: '680px'
        }, 1200)
    })
    $(".header .navbar2 #reg").on('click', function (){
        $("body, html").animate({
            scrollTop: '1100px'
        }, 1200)
    })
    $(".header .navbar2 #partners").on('click', function (){
        $("body, html").animate({
            scrollTop: '1250px'
        }, 1200)
    })
    //Toggling Dropdown
    $(".navbar #services").on('mouseenter', function () {
        $("#dropdown").slideToggle();
    })
    $("#dropdown").on('mouseleave', function () {
        $(this).slideUp();
    })
    //Scrolling up by clicking arrow
    $(".arrowup").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1200)
    })
    // Bars on click
    $(".navbar .navbar2 .bars").on('click', function () {
        $(".header .links3").slideToggle(500);
    });
    //Activ on navbar links
    $(".navbar .links ul li").on('mouseenter', function () {
        $(this).addClass("activ").siblings().removeClass("activ");
    });
    $(".navbar .links ul li").on('mouseleave', function () {
        $(this).removeClass("activ");
    });
    // Activate slider
    $(".slider .owl-carousel").owlCarousel({
        items: 6,
        margin: 50,
        loop: true, 
        autoplay: true,
        autoplayTimeout: 4000,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2
            },
            768: {
                items: 4
            },
            992:{
                items: 6
            }
        }
    });
    $(".servicesslider .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
    });
    // Srvices Results hover
    $(".results .row .col .imgwrap img").hover(function () {
        $(this).siblings(".before").toggleClass("after");
    })
    $(".results .row .col .imgwrap img").hover(function () {
        $(this).toggleClass("imgs")
    });
});