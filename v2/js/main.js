$(function() {
  // Initialize fullPage jQuery plugin. SO COOL
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'skills', 'projects', 'contact'],
    menu: '#menu',
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
  });
});