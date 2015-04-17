 'use strict';

 (function($) {
   var images = window.images;
     $('#button1').click(function() {
       ++theCat1.vote;
       var renderRandomCat = window.renderRandomCat;
       renderRandomCat();
       donut.segments[0].value = 0 + theCat1.vote;
       donut.update();
   });
     $('#button2').click(function() {
       ++theCat2.vote;
       var renderRandomCat = window.renderRandomCat;
       renderRandomCat();
       donut.segments[1].value = 0 + theCat2.vote;
       donut.update();
   });

 })(jQuery);
