 (function($) {
   'use strict';

   var images = window.images;
     $('#button1').click(function() {
        data[0].value + theCat1.vote;
        // donut.update()
   });
     $('#button2').click(function() {
        data[1].value + theCat2.vote;
        // donut.update()
   });

  var ctx = document.getElementById('myChart').getContext('2d');
  var data;

    data = [
      {
        value: 0,
        color: '#FDFD49',
        highlight: '#F37395',
        label: 'Not the answer'
      },
      {
        value: 0,
        color: '#4A49FD',
        highlight: '#F39246',
        label: 'The answer'
      }
    ];

  var donut = new Chart(ctx).Doughnut(data);
  window.data = data;
   donut.update()

 })(jQuery);

