function obtenerClima(location) {
    location = location.replace(' ','%20');
    // Hacer una solicitud a la API de clima (sustituye 'API_KEY' con tu propia clave)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0f74f5f77543aa793dec16603ef48b81&lang=es&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Mostrar la información del clima en el div 'clima-info'
            document.getElementById('clima-info').innerHTML = `
                <p><i class="fas fa-temperature-high"></i><span class="temperature"> Sensación Térmica: ${data.main.feels_like}°C</span></p>
                <p><i class="fas fa-wind"></i>Viento: ${data.wind.speed} m/s</p>
                <p><i class="fas fa-cloud"></i>Tiempo Ahora: ${data.weather[0].description}</p>
                <p><i class="fas fa-tint"></i>Humedad: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => console.log('Error al obtener el clima', error));
}

// Cargar el clima cuando la página se cargue
window.onload = function() {
    obtenerClima();
};
