

(function ($) {

    $(function () {



    $('.sidenav').sidenav();
    $('.parallax').parallax();

    });

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
    });// end of document ready

    
})(jQuery); // end of jQuery name space

// function enviarFormulario(){
//     console.log("Envía!");
// }