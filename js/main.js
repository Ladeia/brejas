
var cervejas = {
  litrao: 1000,
  classica: 600,
  longneck: 355,
  safadinha: 300,
  latao: 550,
  lata: 350,
  piriguete: 269,
};

var _calcular = document.getElementById('calcular');

_calcular.addEventListener('click', function() {
    clear_best();
    var max = -1, cervejaMax = '';
    for (var cerveja in cervejas) {
      var n = parseFloat(document.getElementById(cerveja).value.replace(",","."));
      if (n > 0) {

        var x = cervejas[cerveja]/n;  // O que quer que x seja
        if (x > max) {
          max = x;
          cervejaMax = cerveja;
        }
      }
    }
    document.getElementById(cervejaMax+"-container").className = 'best';
    console.log("melhor valor: " + max);
    console.log("cerveja: " + cervejaMax);
}, false);

function clear_best()
{
  var div = document.getElementsByTagName('p');
  for( var i=0; i<div.length; i++ )
  {
      div[ i ].className = '';
  }
};
