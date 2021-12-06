console.log('Script works!');

$('h1').text('JavaScript Power!')
$('h2').toggleClass('lime')
$('main').append('<p>A Paragraph is appended</p>')



function func1() {
  if ($('p').length < 5) {
    $('main').append('<p>Function works!</p>')
  } else {
    console.log('Too many paragraphs!')
  }
}

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta'];

colors.forEach(function (colorPick) {
  $('#box-container').append('<div class="box"></div>');
  $('.box:last-child').css('background', colorPick);
});

// i = i + 1
// ugyanaz, mint
// i++

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

let age = 2020 - 1997;
let ww2 = 1945 - 1939;

let tesla = 701.32 * 76;
let secondsOfDay = 24 * 60 * 60;
let hungarians = (14500000 / 7500000000) * 100;
let bigger = 9600000 / 78865;
let participants = 654 % 7;


let names = ['Kristof', 'Levi', 'Julia'];


let obj1 = {
  colors: [ "blue", "pink", "red", "purple" ]
};

obj1.hasManyColors = obj1.colors.length > 3;

// console.log(names[2]);



$('#add').click(func1)
$('#remove').click(function(){
   $('p:last-child').remove();
});
