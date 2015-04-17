 (function($) {
   'use strict';

  var ctx = document.getElementById('myChart').getContext('2d');
  var data;

    data = [
      {
        value: 1,
        color: '#FDFD49',
        label: 'Not the answer'
      },
      {
        value: 1,
        color: '#4A49FD',
        label: 'The answer'
      }
    ];

  var donut = new Chart(ctx).Doughnut(data);
  window.data = data;
  window.donut = donut
   donut.update()

 })(jQuery);

