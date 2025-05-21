var map = L.map('map').setView([4.667658766670203, -74.12272803489356], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 var puntosPoligono = [
    [4.660006292237558, -74.12358791050606],  // Coordenada 1
    [4.662065301482043, -74.12147143592206],  // Coordenada 2
    [4.660001030704979, -74.11917546102086],  // Coordenada 3
    [4.657777345784757, -74.1214065174826],  // Coordenada 4
    [4.660006292237558, -74.12358791050606]   // Coordenada 5 (debe ser igual a la primera para cerrar el polígono)
];

// Crear el polígono y añadirlo al mapa
var poligono = L.polygon(puntosPoligono, {
    color: 'blue',        // Color del borde
    fillColor: 'lightblue', // Color de relleno
    fillOpacity: 0.4      // Opacidad del relleno
}).addTo(map);

// Agregar un popup al polígono
poligono.bindPopup("Zona del polígono en La felicidad").openPopup();