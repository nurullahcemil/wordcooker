
var txt;
var ascenders = /(g|j|p|q)+(b|d|f|h|l|t)+(a|b|c|d|e|o)/;


function preload(){
	txt = loadStrings("wordlist2.txt");

}

function setup(){
	noCanvas();
}


function checkWords(txt) {
  return txt.match(ascenders);

}

function wordGenerator() {

  var foundWords = txt.filter(checkWords);
  var charLimitedArray = foundWords.filter( function( element ) {
	  return element.length < 12 && element.length > 3;
	});

  var randomItem = charLimitedArray[Math.floor(Math.random()*charLimitedArray.length)];
  console.log(randomItem.length);
  document.getElementById('generatedWord').innerHTML = randomItem;
}

