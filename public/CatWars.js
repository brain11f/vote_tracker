'use strict';

// (function($) {
  var images = window.images;

  var saveToLocalStorage = function(data) {
    localStorage.setItem('ajaxData', JSON.stringify(data));
  };
    saveToLocalStorage(images);

  $.ajax({
    url: 'https://api.imgur.com/3/album/rnmNz.json',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID b9b1e34b30d75a8'
    }
  })
  .done(function(res) {
    images = res.data.images
    onAjaxLoad();
  })
  .fail(function(err) {
    console.log(err);
  });

  var theCat1;
  var theCat2;
  window.theCat1 = theCat1
  window.theCat2 = theCat2

  function onAjaxLoad() {

  var randomCat = function() {
   var randomNum1 = Math.ceil(Math.random() * 14) - 1;
   var randomNum2 = Math.ceil(Math.random() * 14) - 1;
   theCat1 = images[randomNum1];
   theCat2 = images[randomNum2];
      if (theCat1 === theCat2) {
        randomCat();
      };
  };

  var renderRandomCat = function() {
    randomCat();
    $('#image1').attr({
      src: theCat1.link
    });
    $('#image2').attr({
      src: theCat2.link
    });

    };

   renderRandomCat();
   window.renderRandomCat = renderRandomCat;

  };

// })(jQuery);
