 'use strict';

 (function($) {
   var images = window.images;
     $('#button1').click(function() {
       ++theCat1.vote;
       var renderRandomCat = window.renderRandomCat;
       renderRandomCat();
   });
     $('#button2').click(function() {
       ++theCat2.vote;
       var renderRandomCat = window.renderRandomCat;
       renderRandomCat();
   });

 })(jQuery);
