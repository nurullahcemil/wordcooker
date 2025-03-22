// $(document).ready(function(){
//     setTimeout(function() {
//         wordGenerator();
//     }, 3000);
//     if($("#generatedWord") == 'undefined'){
//       wordGenerator();
//     }
// })

$( function() {
    $('.wrongAnswer').click( function() {
      $('.wrongAnswer').removeClass('shakeAnimation');
        $(this).addClass('shakeAnimation');
    });
    $('.wrongAnswer').mouseleave( function() {
      $('.wrongAnswer').removeClass('shakeAnimation');
    });
    $('.grendlMode').click( function() {
      $(this).addClass('shakeAnimation');
      setTimeout(function() {
       $('.grendlMode').removeClass('shakeAnimation');
      }, 800);
      
      //alert('Are you looking for Chamber of Secrets(which is brand new Grendl Mode)? It is a riddle. You have to call it to find!');
    });
});

$('.uppercaseBtn').click(function(){
  $(this).addClass('activeBtn');
  $('.usiBtn').removeClass('activeBtn');
  $('.lowercaseBtn').removeClass('activeBtn');
  $('#generatedWord').addClass('uppercase');
  $('#generatedWord').removeClass('capitalize');
  $('#generatedWord').removeClass('lowercase');
});
$('.usiBtn').click(function(){
  $(this).addClass('activeBtn');
  $('.lowercaseBtn').removeClass('activeBtn');
  $('.uppercaseBtn').removeClass('activeBtn');
  $('#generatedWord').addClass('capitalize');
  $('#generatedWord').removeClass('uppercases');
  $('#generatedWord').removeClass('lowercase');
});
$('.lowercaseBtn').click(function(){
  $(this).addClass('activeBtn');
  $('.usiBtn').removeClass('activeBtn');
  $('.uppercaseBtn').removeClass('activeBtn');
  $('#generatedWord').addClass('lowercase');
  $('#generatedWord').removeClass('uppercases');
  $('#generatedWord').removeClass('capitalize');
});

var words = new Array();

$( ".ascender" ).click(function() {
  
  $(this).toggleClass("active");
  wordGenerator();
});
$( ".descender" ).click(function() {
  
  $(this).toggleClass("active");
  wordGenerator();
});
$( ".ligatures" ).click(function() {
  
  $(this).toggleClass("active");
  wordGenerator();
});

jQuery.get('wordlist.txt', function(data) {
   words = data.split('\n');
});




function pressedKey(words) {
  return words.startsWith();
}

function wordGenerator() {
  var ascendersEx = /(?=^(?:(?!b|d|h|l|t|k|f|i|j).)*$)/;
  var sub = /.*$/;
  var descenders = /^(?=^(j|p|q|y|g))/;
  var descendersEx = /(?=^(?:(?!j|p|q|y|g).)*$)/;
  var ligatures = /(ff|fj|fl|ffl|fi|ffi|fb|fh|ffh|ft|fft|tt|Th|ct)/;
  var ligaturesEx = /(?=^(?:(?!ff|fi|fj|fl|ffi|gg|ae|fb|ct|fy|ee|gi|it|fh|it|ky|oe|sp|ggy|fr|st|ft|ip|tt|tw|ffb|fk|ch).)*$)/;
  var ascenders = /(b|d|h|l|t|k|f)/;
  var rounded = /^(?=^(c|a|e|o|s|w|v|x|y))/;
  var cooker = /(j|p|q|y|g)+(b|d|h|l|t|k)+(c|a|e|o|s)+(w|v|x|y|u|m|n)/;
  console.log(cooker);
  var all = /(?=^(j|p|q|y|g|b|d|h|l|t|k|f|a|e|o|s|w|v|x|y))/; 
  //var all = new RegExp(ascenders.source+descenders.source+ligatures.source);
  // if($(".ascender").hasClass("active")){
  //   var regx = new RegExp(all.source);
  // }else{
  //   var regx = new RegExp(all.source+ascendersEx.source);
  // }

  // var regx =  new RegExp(rounded.source+descendersEx.source);
  // console.log(regx);
  if($(".descender").hasClass("active") && $(".ascender").hasClass("active") && $(".ligatures").hasClass("active")){
    var regx =  RegExp(cooker.source);
  }else if(!$(".descender").hasClass("active") && !$(".ascender").hasClass("active") && !$(".ligatures").hasClass("active")){
    var regx =  RegExp(all.source+ascendersEx.source+ligaturesEx.source+descendersEx.source+sub.source);
  }else if($(".descender").hasClass("active") && !$(".ascender").hasClass("active") && !$(".ligatures").hasClass("active")){
    var regx =  RegExp(all.source+ascendersEx.source+ligaturesEx.source+sub.source);
  }else if($(".descender").hasClass("active") && $(".ascender").hasClass("active") && !$(".ligatures").hasClass("active")){
    var regx =  RegExp(all.source+ligaturesEx.source+sub.source);
  }else if(!$(".descender").hasClass("active") && !$(".ascender").hasClass("active") && $(".ligatures").hasClass("active")){
    var regx =  RegExp(all.source+ascendersEx.source+descendersEx.source+sub.source);
  }else if(!$(".descender").hasClass("active") && $(".ascender").hasClass("active") && $(".ligatures").hasClass("active")){
    var regx =  RegExp(all.source+descendersEx.source+sub.source);
  }else if(!$(".descender").hasClass("active") && $(".ascender").hasClass("active") && !$(".ligatures").hasClass("active")){
    var regx =  RegExp(all.source+descendersEx.source+ligaturesEx.source+sub.source);
  }
  else if($(".descender").hasClass("active") && !$(".ascender").hasClass("active") && $(".ligatures").hasClass("active")){
    var regx =  RegExp(all.source+ascendersEx.source);
  }
  

  var foundWords = words.filter(words => words.match(regx));
  // console.log(ligatures);

  var charLimitedArray = foundWords.filter( function( element ) {
	  return element.length < 11 && element.length > 3;
	});

  console.log(foundWords);
  var randomItem = charLimitedArray[Math.floor(Math.random()*charLimitedArray.length)];


  document.getElementById('generatedWord').innerHTML = "<a target='_blank' href='https://www.google.com/search?q=" + randomItem +"+meaning&oq=Impurples+meaning'>" +randomItem+"</a>";
  $("#generatedWord").attr("href", ""); 
  $(".gameContainer").css("display", "none");
  $('.wordCookerContainer').css({ top: '50%' });
  $('.selected-word-container').css({ top: '3000px' });

}

//her sayida ona gore kelime
$(document).keypress(function(event){
  var cooker = /(j|p|q|y|g)+(b|d|h|l|t|k)+(c|a|e|o|s)+(w|v|x|y|u|m|n)/;
  var foundWords = words.filter(words => words.match(cooker));
  // console.log(ligatures);

  var charLimitedArray = foundWords.filter( function( element ) {
    var pressedCount = String.fromCharCode(event.which);
    if(pressedCount >= 4){
      return element.length == String.fromCharCode(event.which);
    }else if(pressedCount == 0){
      return element.length == 10;
    }else if(pressedCount == 1){
      return element.length == 11;
    }else if(pressedCount == 2){
      return element.length == 12;
    }else if(pressedCount == 3){
      return element.length == 13;
    }

    
    console.log
  });
  var randomItem = charLimitedArray[Math.floor(Math.random()*charLimitedArray.length)];
  document.getElementById('generatedWord').innerHTML = randomItem;
});


//Below is extra


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var chooseEmoji = function () {
    var unique = true;
    num = Math.floor(Math.random() * a.length - 5);
    name = a.splice(num,1);
    a.push(name);
}


var typedName = '';

var theNames = [
"kevin",
"mo",
"stephen",
"james",
"nathan",
"kate",
"graham",
"elise",
"emma",
"grendl",
"jeremy",
"jessica",
"john",
"kel",
"kristina",
"libbie",
"lizzy",
"tommi",
"nadine",
"dj",
"lauren",
"bert",
"leigh",
"martha",
"michael",
"michelle",
"sara",
"laura",
"stephen",
];

var theWord = [
"Aşk",
"Çilek",
"너그러움",
"Mise-en-scène",
"mütevazı",
"forelsket",
"Hej Då",
"梦蝶",
"μεράκι",
"nefelibata",
"Mercoledi",
"شفق",
"لحظة",
"benvenuto",
"abendrot",
"Gökyüzü",
"selenophile",
"Luftschloss",
"Dugnaður",
"armonioso",
"querencia",
"风花雪月",
"favola",
"favoloso",
"懐かしい",
"甘美な",
"Gökotta",
"نكته‌دان",
"너그러움",];
var theMeaning = [
"love",
"Strawberry",
"Generosity",
"Arrangement of a scene",
"Humble",
"To experience the euphoric, blissful feelings which proceed falling in love; not quite like and not quite love",
"An informal way of saying 'goodbye'",
"Dream to be a butterfly.",
"the soul, creativity, or love put into something; the essence of yourself that is put into your work",
"'Cloud Walker'; One who lives in the clouds of their own imagination or dreams, or one who does not obey conventions of society, literature, or art",
"Wednesday",
"Twilight",
"Lahzah which means 'moment', 'blink of an eye'.",
"Welcome",
"The color of the sky while the sun is settinng.",
"Sky",
"person who is attracted by the moon, moon lover.",
"An unrealistic dream. Literally an air castle",
"A mark of character exemplified by diligence, determination, intelligence and hard work; best translated as 'You have what it takes to make it happen.'",
"Harmonious",
"a place from which one's strength is drawn, where one feels at home; the place where you are your most authentic self.",
"Wind, Flower, Snow, Moon",
"Fairy Tale",
"Fabulous",
"Bringing back happy memories of the past",
"A word that sounds sweet and pleasant to the ear",
"The rejuvenating act of rising at dawn to listen to the birds sing; to immerse oneself in nature.",
"wisecracking",
"Generosity",];
var theLanguage = [
"Turkish",
"Turkish",
"Korean",
"French",
"Turkish",
"Norwegian",
"Swedish",
"Chinese",
"Greek",
"Portuguese",
"Italian",
"Arabic",
"Arabic",
"Italian",
"German",
"Turkish",
"Greek",
"German",
"Icelandic",
"Italian",
"Spanish",
"Chinese",
"Italian",
"Italian",
"Japanese",
"Japanese",
"Swedish",
"Arabic",];
var emoji = [
"&#x1F9D4",
"&#x1F452",
"&#x1F60E",
"&#x1F934",
"&#x1F913",
"&#x1F4DA",
"&#x1F934",
"&#x1F5BC",
"&#x1F5BC",
"&#x1F480",
"&#x1F9D0",
"&#x1F41A",
"&#x1F9E6",
"&#x1F9E2",
"&#x1F33C",
"&#x1F9E4",
"&#x1F380",
"&#x1F478",
"&#x1F9F6",
"&#x1F52B",
"&#x2615",
"&#x1F3BC",
"&#x1F98B",
"&#x1F338",
"&#x1F6F8",
"&#x1F38E",
"&#x1F4AA",
"&#x1F457",
"&#x1F60E"
];

$(document).keypress(function(e) {
  var c = String.fromCharCode(e.keyCode);
  typedName += c.toLowerCase();
  for(var i = 0; i < theNames.length; i++){
    console.log(typedName);

    if(typedName.includes("nurullah")){
      $('#generatedWord').html("Restricted Area!");
      typedName = typedName.slice(("nurullah").length);
      $('.wordCookerContainer').css({ top: '50%' });
      $('.subText').html("Ask my word personally");
      $('.selected-word-container').css({ top: '3000px' });
      $('.emojiContainer').css("display","none");
      $(".gameContainer").css("display", "block");
    }else if(typedName.includes(theNames[i])) {
        $("#generatedWord").attr("href", ""); 
  $(".gameContainer").css("display", "none");
  $('.wordCookerContainer').css({ top: '50%' });
  $('.selected-word-container').css({ top: '3000px' });
      if(typedName.includes("grendl")){
        $("body").css("background-color", "black");
        $("body").css("color", "white");
        $('#generatedWord').css("font-family", "UnifrakturCook");
        $("#generatedWord").addClass("whiteImp");
      }else{
      $('#generatedWord').html("Hi " + capitalizeFirstLetter(theNames[i]) + "!");
      $(".gameContainer").css("display", "block");
      if(typedName.includes("kevin")){
        $('.gameContainer .subText').html("Do you love Emma?");
        $('.gameContainer .emojiContainer a:eq(1)').html("&#x2665;");
        $('.your-word-title').html("Hey " + capitalizeFirstLetter(theNames[i]) +" this beautiful word is for Emma and you!");
      }else{
        $('.gameContainer .subText').html("Do you remember your emoji?");
        $('.gameContainer .emojiContainer a:eq(1)').html(emoji[i]);
        $('.your-word-title').html("Hey " + capitalizeFirstLetter(theNames[i]) +" this beautiful word is for you!");
        // $("body").css("background-color", "white");
        // $("body").css("color", "black");
        // $('#generatedWord').css("font-family", "UnifrakturCook");
        // $("#generatedWord").removeClass("whiteImp");
      }
      
      $("body").css("background-color", "white");
        $("body").css("color", "black");
        $('#generatedWord').css("font-family", "inherit");
        $("#generatedWord").removeClass("whiteImp");
      $('.selected-word').html(theWord[i]);
      $('.selected-word').css("font-family", "inherit");
      $('.selected-word-meaning').html(theMeaning[i]);
      $('.selected-language').html(theLanguage[i]);
      $('.emojiContainer').css("display","block");
      }
      //$('.selected-emoji').html(emoji[i+1]);

      // let canvas = document.querySelector("selected-emoji");
      // let contex = canvas.getContext("2d");

      // // The size of the emoji is set with the font
      // contex.font = '70px serif'
      // // use these alignment properties for "better" positioning
      // contex.textAlign = "center"; 
      // contex.textBaseline = "middle"; 
      // // draw the emoji
      // contex.fillText("😍", canvas.width / 2, canvas.height / 2);
      
      if(theWord[i] == "نكته‌دان" || theWord[i] == "شفق" || theWord[i] == "لحظة" || theWord[i] == "نكته‌دان"){
        $('.selected-word').css("font-family", "kafa");
      }
      // $('.wordCookerContainer').css({ top: '-500px' });
      // $('.selected-word-container').css({ top: '3000px' });
      typedName = typedName.slice(theNames[i].length);
    }
  }

});



function randomColor(color){
  $(".selected-word-main").css("background-color", color);
  $(".selected-language").css("color", color);
}


function wordAnimation(){
  $('.wordCookerContainer').css({ top: '-500px' });
  $('.selected-word-container').css({ top: '45%' });
}



$(function() {


  $("#btnSave").click(function() {
    html2canvas($(".hiddenword"), {
      useCORS: true,
                   allowTaint: true,
      onrendered: function(canvas) {
        saveAs(canvas.toDataURL(), 'canvas.png');
      }
    });
  });

  function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
});














