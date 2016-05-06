$(document).ready(function(){
  $('#top').append('<button class="generator">Generate</button>');
  $('#top').append('<h4>Clicked 0 times.</h4>');
  var i = 0;

  $('.generator').on('click', function(){
    i++;
    $('#container').append('<div class="magic-box"></div>');
    $('#container').children().last().append('<button class="delete">Delete</button>');
    $('#container').children().last().append('<button class="toggle-switch">Change Color</button>');
    $('h4').text("Clicked " + i + " times.");
  });

  $('#container').on('click', '.delete', function(){
    $(this).parent().remove();
  });

  $('#container').on('click', '.toggle-switch', function(){
    $(this).parent().toggleClass("altered");
  });
});
