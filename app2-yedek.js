var words = new Array();
var except = /\b((?!(a|s))\w)+\b/;
var ascenders = /(j|p|q|y|g)/;
var ligatures = /(ff|fi|fj|fl|ffi|gg|ae|fb|ct|fy|ee|gi|it|fh|it|ky|oe|sp|ggy|fr|st|ft|ip|tt|tw|ffb|fk|ch)/;
var descenders = /(b|d|h|l|t|k|f)/;
var rounded = /(c|a|e|o|s|w|v|x|y)/;
// var regx = /^(?=^a)(?=.*b$)(?=.*a)(?=^(?:(?!456).)*$).*$/; 
var regx = /^(?=^a)(?=.*b$)(?=.*a)(?=^(?:(?!456).)*$).*$/; 
console.log(regx);

jQuery.get('wordlist.txt', function(data) {
   
   words = data.split('\n');
   // var newone = words.match(regx).val();
});

// jQuery.get('wordlist.txt', function(data) {
   
//    english = data.split('\n');
//    // var newone = words.match(regx).val();
// });s



function checkWords(words) {
  return words.match(regx);
}

function pressedKey(words) {
  return words.startsWith();
}

function wordGenerator() {

  var foundWords = words.filter(checkWords);
  // console.log(ligatures);

  var charLimitedArray = foundWords.filter( function( element ) {
	  return element.length < 11 && element.length > 3;
    return true;
	});

  console.log(foundWords);
  var randomItem = charLimitedArray[Math.floor(Math.random()*charLimitedArray.length)];


  document.getElementById('generatedWord').innerHTML = "<a target='_blank' href='https://www.google.com/search?q=" + randomItem +"+meaning&oq=Impurples+meaning'>" +randomItem+"</a>";
  $("#generatedWord").attr("href", ""); 

}

// Her harfe tiklayinca bas harfiyle bir kelime uretiyor
$(document).keypress(function(event){
  var foundWords = words.filter(checkWords);
  var charLimitedArray = foundWords.filter( function( element ) {
    return element.length < 11 && element.length > 3 && element.substr(0,1) == String.fromCharCode(event.which);
  });
  var randomItem = charLimitedArray[Math.floor(Math.random()*charLimitedArray.length)];s
  document.getElementById('generatedWord').innerHTML = randomItem;
});
// end







// var typedWord = '';
// var theWord = ['lau','james','mo'];
// console.log(typedWord);
// window.addEventListener('keypress', function(e){
//   var c = String.fromCharCode(e.keyCode);
//   typedWord += c.toLowerCase();
//   if(typedWord.length > theWord.length) {
//     typedWord = typedWord.slice(1);
//   }
//   console.log(typedWord);
//   if(yourArray.includes(typeWord)){
//       document.getElementById('generatedWord').innerHTML = "Are you Lauren?";
//       document.getElementById('generatedWord').style.fontFamily = "Mogra";
//   }else{
//       document.getElementById('generatedWord').style.fontFamily = "Volkhov";
//   }
// })







