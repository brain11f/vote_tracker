'use strict';

//$(document).ready(function() {
  var catOjcArr = [];
  var theCat1
  var theCat2
  var catOjc = function(photoSource, name) {
    this.photoSource = photoSource;
    this.name = name;
  };

  var trackerOjc = function(vote, ect) {
   this.vote = vote;
  };

  //-----------trackerOjcfunctions---------

  trackerOjc.prototype.vote = function() {

  };

  //-----------catOjcfunctions--------------

  catOjc.prototype.randomCat = function() {
   var randomNum1 = Math.ceil(Math.random() * 14) - 1;
     console.log(randomNum1);
   var randomNum2 = Math.ceil(Math.random() * 14) - 1;
     console.log(randomNum2);
   var theCat1 = catOjcArr[randomNum1];
     console.log(theCat1);
   var theCat2 = catOjcArr[randomNum2];
     console.log(theCat2);
      if (theCat1 === theCat2) {
        catOjc.prototype.randomCat();
      };

  };

  catOjc.prototype.renderRandomCat = function() {
    console.log(theCat1);
    console.log(theCat2);

  };

  //-----------catOjcList------------------
  var cat1 = new catOjc ('catPhotos/01 - pPA0iM0.jpg', 'Bob');
  var cat2 = new catOjc ('catPhotos/02 - 7ykJ1xi.jpg', 'Bill');
  var cat3 = new catOjc ('catPhotos/03 - n91EiPd.jpg', 'Kylle');
  var cat4 = new catOjc ('catPhotos/04 - LDiTFeQ.jpg', 'Joe');
  var cat5 = new catOjc ('catPhotos/05 - ywavhKp.jpg', 'Rob');
  var cat6 = new catOjc ('catPhotos/06 - 9Fg6CZS.jpg', 'Carll');
  var cat7 = new catOjc ('catPhotos/07 - leaDJOY.jpg', 'Boo');
  var cat8 = new catOjc ('catPhotos/08 - XA0PRs2.jpg', 'Dave');
  var cat9 = new catOjc ('catPhotos/09 - rkO8XVX.jpg', 'Pat');
  var cat10 = new catOjc ('catPhotos/10 - QBZjjMe.jpg', 'Rick');
  var cat11 = new catOjc ('catPhotos/11 - aGJW6lS.jpg', 'Jason');
  var cat12 = new catOjc ('catPhotos/12 - 60maZWt.jpg', 'Josh');
  var cat13 = new catOjc ('catPhotos/13 - u9wzm0f.jpg', 'Criss');
  var cat14 = new catOjc ('catPhotos/14 - vyz8MGP.jpg', 'Sack');

catOjcArr.push(cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13, cat14);


//});
