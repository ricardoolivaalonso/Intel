$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
    });


    $("#show-search").on("click", function(event){
        $("#search-form").toggleClass("is-menu-hide");
        $("body").toggleClass("is-100vh");
    });
    $("#close-search").on("click", function(event){
        $("#search-form").toggleClass("is-menu-hide");
        $("body").toggleClass("is-100vh");
    });


    $("#show-login").on("click", function(event){
        $("#login-form").toggleClass("is-menu-hide");
        $("body").toggleClass("is-100vh");
    });
    $("#close-login").on("click", function(event){
        $("#login-form").toggleClass("is-menu-hide");
        $("body").toggleClass("is-100vh");
    });


    $("#show-country").on("click", function(event){
        $("#country-form").toggleClass("is-menu-hide");
        $("body").toggleClass("is-100vh");
    });
    $("#close-country").on("click", function(event){
        $("#country-form").toggleClass("is-menu-hide");
        $("body").toggleClass("is-100vh");
    });


    $(".show-menu").on("click", function(event){
        $("#main-menu").toggleClass("is-menu-hide-left");
        $("body").toggleClass("is-100vh");
    });


});
