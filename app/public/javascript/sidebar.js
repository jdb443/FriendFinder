// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//     instance.open();
// instance.close();
// instance.destroy();
// });

// // Or with jQuery

// $(document).ready(function(){
//     $('.sidenav').sidenav();
// });

(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  