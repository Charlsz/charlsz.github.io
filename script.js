// Función para mostrar u ocultar los detalles de un servicio
function toggleDetails(serviceId) {
    var details = document.getElementById(serviceId);
    
    // Verifica si los detalles están ocultos o visibles
    if (details.style.maxHeight) {
        details.style.maxHeight = null; // Oculta los detalles
    } else {
        details.style.maxHeight = details.scrollHeight + "px"; // Muestra los detalles
    }
}
