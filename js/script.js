
function main() {
  var map = L.map('map', { 
    zoomControl: false,
    center: [40.7127, -74.0059],
    zoom: 12
    });
 // add a nice baselayer from Stamen 
L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Stamen'
    }).addTo(map);

cartodb.createLayer(map, 'https://bk741.cartodb.com/api/v2/viz/647e6d7a-d8c6-11e4-b0ec-0e853d047bba/viz.json')
      .addTo(map)
      .on('done', function(layer) {
      // get sublayer 0 and set the infowindow template
      var sublayer = layer.getSubLayer(1);
      // sublayer.setInteraction(true);
      layer.infowindow.set('template', $('#infowindow_template').html());
        });
      }
window.onload = main;