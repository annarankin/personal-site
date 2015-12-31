var tree;

$(function() {
  var height = $('#tree-vis').height();
  var width = $('#tree-vis').width();
  console.log(height)
  console.log(width)
  tree = d3.layout.tree().size([height, width]);
  // Initialize fullPage jQuery plugin. SO COOL
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'skills', 'projects', 'contact'],
    menu: '#menu',
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
  });

  // Using d3 to generate a collapsible node map of tech skils

  var margin = {
      top: 20,
      right: 120,
      bottom: 20,
      left: 120
    },
    width = 500 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;

  var tree = d3.layout.tree()
    .size([height, width]);

  // Note to self: look up d3 diagonal once I get internets
  var diagonal = d3.svg.diagonal()
    .projection(function(d) {
      return [d.y, d.x]
    });

  var svg = d3.select('#tree-vis').append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  d3.json(data, function(err, skill) {
    if (err) {
      throw err;
    }
    debugger;
    // root = skill;
    // root.x0 = height / 2;
    // root.y0 = 0;

    // function collapse(d) {
    //   if (d.children) {
    //     d._children = d.children;
    //     d._children.forEach(collapse);
    //     d.children = null;
    //   }
    //   root.children.forEach(collapse);
    //   update(root);
    // }

  });



});