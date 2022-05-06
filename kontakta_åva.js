let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("iframe"), {
    center: { lat: 59.44009, lng: 18.06311 },
    zoom: 8,
  });
}

window.initMap = initMap;