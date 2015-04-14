'use strict';

(function($) {
  var catOjc = window.catOjc;
    $('#button1').click(function() {
      ++theCat1.vote;
      console.log(theCat1.vote);
    if (theCat1.vote > 10) {
      catOjc.renderRandomCat();
    };
  });
    $('#button2').click(function() {
      ++theCat2.vote;
  });

})(jQuery);
