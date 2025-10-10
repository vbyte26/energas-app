function initMap() {
  const coords = { lat: -12.0235750, lng: -77.008750 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: coords,
    styles: [{ elementType: "geometry", stylers: [{ color: "#1d1630" }] }]
  });
  new google.maps.Marker({ position: coords, map });
}
