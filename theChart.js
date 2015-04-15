(function() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var data;
  try {
    data = JSON.parse(localStorage.getItem('chartData'));
  } catch(e) {
    console.log(e);
    var data = null;
  }
  if (!data) {
    data = [
      {
        value: 68,
        color: '#FDFD49',
        highlight: '#4A49FD',
        label: 'Not the answer'
      },
      {
        value: 42,
        color: '#4A49FD',
        highlight: '#88FF88',
        label: 'The answer'
      }
    ];
  }

  var donut = new Chart(ctx).Doughnut(data);
  var button = ctx = document.getElementById('increase');
  button.addEventListener('click', function(e) {
    var notAnswer = _.find(donut.segments, {label: 'Not the answer'});
    notAnswer.value = notAnswer.value + 1;

    data = _.map(donut.segments, function(segment) {
      console.log(segment);
      return {value: segment.value,
              color: segment.fillColor,
              highlight: segment.highlightColor,
              label: segment.label};
    });
    localStorage.setItem('chartData', JSON.stringify(data));

    donut.update();
  });
})();
