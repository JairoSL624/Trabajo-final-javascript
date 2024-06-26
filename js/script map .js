document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([39.46599, -0.38158], 19);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([39.46599, -0.38158]).addTo(map)
        .bindPopup('Aquí está Mi Empresa')
        .openPopup();

    L.Routing.control({
        waypoints: [
            L.latLng(39.46599, -0.38158),
            L.latLng(39.466553, -0.380095)
        ]
    }).addTo(map);
});
