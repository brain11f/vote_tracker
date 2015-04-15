'use strict';

(function($) {
  var catOjc = window.catOjc;
    $('#button1').click(function() {
      ++theCat1.vote;
      console.log(theCat1.vote);
    if (theCat1.vote > 1) {
      catOjc.renderRandomCat();
    };
  });
    $('#button2').click(function() {
      ++theCat2.vote;
      if (theCat2.vote > 1) {
      catOjc.renderRandomCat();
    };
  });

})(jQuery);
