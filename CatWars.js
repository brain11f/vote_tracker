'use strict';

// (function($) {
  var theCat1;
  var theCat2;

  var catOjc = function(photoSource, name) {
    this.photoSource = photoSource;
    this.name = name;
    this.vote = 0;
  };

  //-----------trackerOjcfunctions---------

  // catOjc.prototype.trackerOjc = function() {
    // if (theCat1.vote > 10) {
      // catOjc.randomCat();
    // };
  // };

  catOjc.randomCat = function() {
   var randomNum1 = Math.ceil(Math.random() * 14) - 1;
   var randomNum2 = Math.ceil(Math.random() * 14) - 1;
   theCat1 = catOjcArr[randomNum1];
   theCat2 = catOjcArr[randomNum2];
      if (theCat1 === theCat2) {
        catOjc.randomCat();
      };
  };


  catOjc.renderRandomCat = function() {
    catOjc.randomCat();
    $('#image1').attr({
      src: theCat1.photoSource
    });
    $('#image2').attr({
      src: theCat2.photoSource
    });

    };

  //-----------catOjcList------------------
  var catOjcArr = [
    new catOjc('catPhotos/01 - pPA0iM0.jpg', 'Bob'),
    new catOjc('catPhotos/02 - 7ykJ1xi.jpg', 'Bill'),
    new catOjc('catPhotos/03 - n91EiPd.jpg', 'Kylle'),
    new catOjc('catPhotos/04 - LDiTFeQ.jpg', 'Joe'),
    new catOjc('catPhotos/05 - ywavhKp.jpg', 'Rob'),
    new catOjc('catPhotos/06 - 9Fg6CZS.jpg', 'Carll'),
    new catOjc('catPhotos/07 - leaDJOY.jpg', 'Boo'),
    new catOjc('catPhotos/08 - XA0PRs2.jpg', 'Dave'),
    new catOjc('catPhotos/09 - rkO8XVX.jpg', 'Pat'),
    new catOjc('catPhotos/10 - QBZjjMe.jpg', 'Rick'),
    new catOjc('catPhotos/11 - aGJW6lS.jpg', 'Jason'),
    new catOjc('catPhotos/12 - 60maZWt.jpg', 'Josh'),
    new catOjc('catPhotos/13 - u9wzm0f.jpg', 'Criss'),
    new catOjc('catPhotos/14 - vyz8MGP.jpg', 'Sack')
  ];

  catOjc.renderRandomCat();

// })(jQuery);
