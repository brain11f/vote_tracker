'use strict';

// (function() {
  var images;

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
  })
  .fail(function(err) {
    console.log(err);
  });
// })();
