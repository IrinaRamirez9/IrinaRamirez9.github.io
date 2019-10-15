function map()
{
  var mymap = L.map('mapid');
  var options = {
    key: geocoder_api_key,
    limit:10
  };
    var control = L.Control.openCageSearch(options).addTo(mymap);

/*MAPBOX TILE LAYER
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.mapbox-traffic-v1',
    accessToken: mapbox_access_token
  }).addTo(mymap);
*/
L.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{}).addTo(mymap);

var firstWonder = L.marker([27.174961, 78.042385]).addTo(mymap);
var secWonder = L.marker([40.334245, 116.477652]).addTo(mymap);
var thirdWonder = L.marker([30.328611, 35.441944]).addTo(mymap);
var fourthWonder = L.marker([-22.951389, -43.2108334]).addTo(mymap);
var fifthWonder = L.marker([-13.163056, -72.545556]).addTo(mymap);
var sixthWonder = L.marker([20.682778, -88.569167]).addTo(mymap);
var seventhWonder = L.marker([41.890169, 12.492269]).addTo(mymap);

firstWonder.bindPopup("<b>India's Taj Mahal").openPopup();
secWonder.bindPopup("<b>Great Wall of China").openPopup();
thirdWonder.bindPopup("<b>Petra in Jordan").openPopup();
fourthWonder.bindPopup("<b>Brazil's statue of Christ the Redeemer").openPopup();
fifthWonder.bindPopup("<b>Peru's Machu Picchu").openPopup();
sixthWonder.bindPopup("<b>Mexico's Chichen Itza pyramid").openPopup();
seventhWonder.bindPopup("<b>The Colosseum in Rome").openPopup();

/*
var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);

var polyline = L.polyline([
[51.506, -0.08],
[51.502, -0.06],
[51.507, -0.047]
]).addTo(mymap);



circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

marker.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

circle.on('click', function(e){
  mymap.setView(e.latlng, 13);
});

polygon.on('click', function(e){
  mymap.setView(e.latlng,13);
});
*/
var ZoomViewer = L.Control.extend({
  onAdd: function(){
    var gauge = L.DomUtil.create('div');
    gauge.style.width = '200px';
    gauge.style.background = 'rgba(255,255,255,0.5)';
    gauge.style.textAlign = 'left';
    mymap.on('zoomstart zoom zoomend', function(ev){
      gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
    })
    return gauge;
  }
});
(new ZoomViewer).addTo(mymap);

mymap.setView([0,0],1);
}
