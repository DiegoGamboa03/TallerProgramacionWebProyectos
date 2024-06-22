<?php
// Enrutador para redirigir todas las solicitudes a api.php
if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js|html)$/', $_SERVER["REQUEST_URI"])) {
    return false; // Permite que el servidor web maneje solicitudes para archivos estáticos
} else {
    include 'api.php'; // Incluye el archivo api.php para todas las demás solicitudes
}
?>
