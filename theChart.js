(function() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var data;

    data = [
      {
        value: 68,
        color: '#FDFD49',
        highlight: '#F37395',
        label: 'Not the answer'
      },
      {
        value: 42,
        color: '#4A49FD',
        highlight: '#F39246',
        label: 'The answer'
      }
    ];

  var donut = new Chart(ctx).Doughnut(data);
  donut.update();
})();
