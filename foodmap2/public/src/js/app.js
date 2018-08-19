const preload = document.getElementById('splash');
setTimeout(() => {
  preload.style.display = 'none';
}, 2000);

/*
var platform = new H.service.Platform({
  'app_id': 'NYpjwTbHuYzYMLHYfMHh',
  'app_code': 'Ytmss8B2kYLdckYcEp2Ptg'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map,
  {
    zoom: 10,
    center: { lat: -33.43727, lng: -70.65056 }
  });

// Obtain an Explore object through which to submit search requests:
var explore = new H.places.Explore(platform.getPlacesService()), exploreResult, error;

// Define search parameters:
var params = {
  // Look for places matching the category "eat and drink":
  'cat': 'eat-drink',
  // Search in the Chinatown district in San Francisco:
  'in': '37.7942,-122.4070'
};

// Run a search request with parameters, headers (empty), and callback functions:
explore.request(params, {}, onResult, onError);

// Define a callback function to handle data on success:
function onResult(data) {
  exploreResult = data;
}

// Define a callback function to handle errors:
function onError(data) {
  error = data;
}

// Run a search request with parameters, headers (empty), and callback functions:
explore.request(params, {}, onResult, onError);
*/      

let map;
let infowindow;
var markers = []

function initMap()
{
// Creamos un mapa con las coordenadas actuales
   navigator.geolocation.getCurrentPosition(function(pos) {

   lat = pos.coords.latitude;
   lon = pos.coords.longitude;

   let myLatlng = new google.maps.LatLng(lat, lon);

   let mapOptions = {
     center: myLatlng,
     zoom: 14,
     mapTypeId: google.maps.MapTypeId.MAP
   };

   map = new google.maps.Map(document.getElementById("mapa"),  mapOptions);

   // Creamos el infowindow
   infowindow = new google.maps.InfoWindow();

   // Especificamos la localización, el radio y el tipo de lugares que queremos obtener
   let request = {
     location: myLatlng,
     radius: 5000,
     types: ['restaurant']
   };

   // Creamos el servicio PlaceService y enviamos la petición.
   let service = new google.maps.places.PlacesService(map);

   service.nearbySearch(request, function(results, status) {
     if (status === google.maps.places.PlacesServiceStatus.OK) {
       for (var i = 0; i < results.length; i++) {
         crearMarcador(results[i]);
       }
     }
   });
 });
}

function searchMap(){
  
}

function crearMarcador(place){
   // Creamos un marcador
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

 // Asignamos el evento click del marcador
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
    });
  }


   

  