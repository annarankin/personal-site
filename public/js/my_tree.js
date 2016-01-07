// var Tree = function(width, height, parentSelector) {
//   // renders tree
//   this.$el = $(parentSelector);
//   this.render = function() {
//     console.log("Rendering into", this.$el);
//     // create a new canvas element & append to this tree's el
//     // this function can be called recursively to render child nodes
//     var renderNode = function(data) {

//     };
    
//   };
//   // loads JSON data into tree
//   this.load = function(data){
//     if(data) {
//       this.data = data;
//     }; 
//     console.log("Current data:",this.data);
//   };
// };

  // SPACETREE from JIT. Makin' it werk.
//   var treeDiv = document.getElementById('tree-vis');

//   spacetree = new $jit.ST({
//     injectInto: 'tree-vis',
//     duration: 200,
//     transition: $jit.Trans.Quart.easeInOut,
//     levelDistance: 50,
//     Navigation: {
//       enable: true,
//       panning: true
//     },
//     offsetX: width / 3,
//     width: width,
//     height: height,
//     Node: {
//       height: 28,
//       autoHeight: false,
//       autoWidth: true,
//       type: 'rectangle',
//       color: '#aac973',
//       overridable: true
//     },
//     Edge: {
//       type: 'bezier',
//       overridable: true
//     },
//     onCreateLabel: function(label, node) {
//       label.id = node.id;
//       label.innerHTML = node.name;
//       label.onclick = function() {
//         // debugger
//         // if (normal.checked) {
//           // spacetree.onClick(node.id);
//         // } else {
//           // debugger
//           if (node.getSubnodes().length < 1) {return;}
//           spacetree.setRoot(node.id, 'animate');
//           // debugger
//         // }
//       }.bind(this);
//       //set label styles  
//       var style = label.style;
//       // style.width = 60 + 'px';
//       // style.height = 17 + 'px';
//       style.cursor = 'pointer';
//       // style.backgroundColor = ['red', 'orange', 'yellow', 'green', '#eaa', '#faa'][node._depth];
//       style.fontSize = '0.8em';
//       style.textAlign = 'center';
//       style.padding = '0.5em';
//     },
//     onBeforePlotNode: function(node) {
//       if (node.selected) {
//         node.data.$color = 'yellow';
//       } else if (!node.anySubnode("exist")) {
//         node.data.$color = 'salmon';
//       } else if (node.id === 1) {
//         node.data.$color = 'red';
//       } else {
//         node.data.$color = ['red', 'orange', 'green'][node._depth];
//       }
//       // debugger;
//     },
//       // onPlaceLabel: function(domElement, node) {
//       //   var style = domElement.style;
//       //   style.display = '';
//       //   style.cursor = 'pointer';
//       //   if (node._depth <= 1) {
//       //     style.fontSize = "0.8em";
//       //     style.color = "#ddd";

//     //   } else if (node._depth == 2) {
//     //     style.fontSize = "0.7em";
//     //     style.color = "#555";

//     //   } else {
//     //     style.display = 'none';
//     //   }

//     //   var left = parseInt(style.left);
//     //   var top = parseInt(style.top);
//     //   var w = domElement.offsetWidth;
//     //   var t = domElement.offsetHeight;
//     //   style.left = (left - w / 2) + 'px';
//     //   style.top = (top - t / 2) + 'px';
//     // },
//       onBeforePlotLine: function(adj) {
//       if (adj.nodeFrom.selected && adj.nodeTo.selected) {
//         adj.data.$color = "#eed";
//         adj.data.$lineWidth = 3;
//       } else {
//         delete adj.data.$color;
//         delete adj.data.$lineWidth;
//       }
//     }
//   });
//   spacetree.loadJSON(skills);
//   spacetree.compute();
//   spacetree.onClick(spacetree.root);
// //   // spacetree.switchPosition('top', 'replot');
// //   // spacetree

// //   // Put a resize listener on window
//   $(window).on('resize', function() {
//     var height = $('#tree-vis').height();
//     var width = $('#tree-vis').width();
//     console.log(height);
//     console.log(width);
//     spacetree.canvas.resize(width, height);
//   });
