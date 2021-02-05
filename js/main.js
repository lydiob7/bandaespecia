// Código escrito y diseñado por Tomás Scattini en la ciudad de Melbourne, Australia durante la cuarentena del año 2020
// Code written and designed by Tomás Scattini in Melbourne, Australia on the 2020's quarantine
// Instagram: @tomiscattini
// E-mail: tomasscattini@gmail.com

$(document).ready(function() {

    // Marca color

    $('.marca').on('mouseenter', function() {
        $(this).children().children('img').attr('src', 'img/marca2.png');
    });

    $('.marca').on('mouseleave', function() {
        $(this).children().children('img').attr('src', 'img/marca1.png');
    });

    // Iconos redes sociales

    const iconos = $('.iconos-redes-sociales a').clone();
    $('footer .iconos-redes-sociales').append(iconos);

    // Navegacion

    $('#botonNavegacion').on('click', function(e) {
        e.preventDefault();
        $('.navegacion').toggle();
        $('.navegacion').toggleClass('color-fondo');
        $('.barra').toggleClass('color-fondo');
        $('header .iconos-redes-sociales').toggleClass('fixed');
        // $('#efecto-menu').get(0).play();
    });

    $('.navegacion a').on('click', function() {
        $('.navegacion').toggle();
        $('.navegacion').toggleClass('color-fondo');
        $('.barra').toggleClass('color-fondo');
        $('header .iconos-redes-sociales').toggleClass('fixed');
    });

    // Videos


    $('.videos h4').on('click', function(e) {
        e.preventDefault();
        $(this).parent().children('.descripcion').slideToggle();
    });

    // Galeria

    $("#galeria .button").on('click', function(e) {
        e.preventDefault();
        $('.galeria .resto-galeria').slideToggle();
        $(this).parent().children('.mas').toggle();
        $(this).parent().children('.menos').toggle();
    });


    // Bio

    $('.texto-bio .button').on('click', function(e) {
        e.preventDefault();
        $(this).parent().children('.ver').toggle();
        $(this).parent().children('.ocultar').toggle();
        $(this).parent().children('p').slideToggle();
    });

    // Copyright

    const today = new Date();
    const year = today.getFullYear();

    $('.copyright').html(`&copy; Banda Especia ${year}`);

});