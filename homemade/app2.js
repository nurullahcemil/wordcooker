

$( document ).ready(
    wordGenerator()
);



function wordGenerator() {

  var fonts = [
  'Ultra',
  'Holtwood+One+SC',
  'Plaster',
  'Nosifer',
  'Chango',
  'Seymour+One',
  'Anton',
  'Geo',
  'Righteous',
  'Sigmar+One',
  'Fredoka+One',
  'Luckiest+Guy',
  'Poiret+One',
  'Monoton',
  'Black+Ops+One',
  'Shrikhand',
  'Modak',
  'Chonburi',
  'Bowlby+One',
  'Denk+One',
  'Gravitas+One',
  'Rakkas',
  'Rammetto+One',
  'Spicy+Rice',
  'Wendy+One',
  'Ribeye',
  'Unlock',
  'Grenze',
  'Sancreek',
  'Smokum',
  'Goblin+One',
  'Fruktur',
  'Erica+One',
  'Fascinate'
  ];

  var familyName = [
  'Ultra',
  'Holtwood One SC',
  'Plaster',
  'Nosifer',
  'Chango',
  'Seymour One',
  'Anton',
  'Geo',
  'Righteous',
  'Sigmar One',
  'Fredoka One',
  'Luckiest Guy',
  'Poiret One',
  'Monoton',
  'Black Ops One',
  'Shrikhand',
  'Modak',
  'Chonburi',
  'Bowlby One',
  'Denk One',
  'Gravitas One',
  'Rakkas',
  'Rammetto One',
  'Spicy Rice',
  'Wendy One',
  'Ribeye',
  'Unlock',
  'Grenze',
  'Sancreek',
  'Smokum',
  'Goblin One',
  'Fruktur',
  'Erica One',
  'Fascinate'
  ];

  for(var i =0; i<95; i++){

  }

  var randomItem = Math.floor(Math.random()*152);
  var randomNumber = Math.floor(Math.random()*fonts.length);
  var randomFont = fonts[randomNumber];
  var randomFamily = familyName[randomNumber];

  document.querySelector('.randomImg').src = "img/i" + randomItem +".jpg";
    document.querySelector('.randomImg2').src = "img/i" + randomItem +".jpg";
  document.querySelector("link").href = 'https://fonts.googleapis.com/css?family=' + randomFont + '&display=swap';
  $(".fontName").html("Font Family : " + randomFamily);
  document.querySelector("body").style.fontFamily = randomFamily;
}


$(function() {


  $("#btnSave").click(function() {
    html2canvas($(".downloadImg"), {
      useCORS: true,
                   allowTaint: true,
      onrendered: function(canvas) {
        saveAs(canvas.toDataURL(), 'canvas.jpg');
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

