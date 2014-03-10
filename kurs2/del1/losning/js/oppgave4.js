var boksknapp = document.querySelector('#boksknapp');

boksknapp.addEventListener('click', function () {
  var boks = document.querySelector('#boks');
  boks.classList.add('synlig');
  //Det ville også fungert å fjerne usynlig-klassen på denne måten:
  //boks.classList.remove('usynlig');
});