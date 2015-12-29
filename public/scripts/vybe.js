/*
  vybe.js
*/
$(document).ready(function() {
  console.log('--> vybe.js');
});
moment().utcOffset("-07:00");
// Flowtype Init
// http://simplefocus.com/flowtype/
$('body').flowtype({
   minimum   : 320,
   maximum   : 1980,
   minFont   : 10,
   maxFont   : 20,
   fontRatio : 30
});

//
// Home Page Love
//

//var setup
var homeInput = $('#pageHome #amount'),
    homeButton = $('#pageHome .button'),
    homeSubmit = $('#pageHome input[type=submit]'),
    homeResultsSpan = $('#pageHome .results span'),
    loves = 0;

//Count loves
function countLove() {
  TweenLite.to(homeButton, .1, {border:"20px solid #fff",background:"#e35db6",ease:Power1.easeInOut,onComplete:returnBorder})
  loves++;
  homeInput.val(loves);
  return loves;
}
function returnBorder() {
  TweenLite.to(homeButton, .1, {"border":"1px solid #e35db6", background:"#fff",ease:Power1.easeInOut})
}
homeButton.click(function() {
  var $this = $(this);
  countLove();
});
homeSubmit.click(function(e) {
  e.preventDefault;
  if(loves >= 1) {
    console.log('sent!');
    return true;
  }
  else {
    console.log('click the thing first!');
    return false;
  }
});

homeResultsSpan.each(function() {
  var currentDate = $(this).text();
  var relativeDate = moment(currentDate, "YYYYMMDDhmm").from(currentDate);
  $(this).text(relativeDate);
});


