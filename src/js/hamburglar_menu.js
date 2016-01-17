console.log('Hamburger menu - order up!');

$(function() {
  var $menu = $('ul#menu');
  var $toggleButton = $('.toggle');

  $toggleButton.on('click', function(event) {
    $(event.currentTarget).toggleClass('x');
    $menu.toggleClass('show');
  });
});