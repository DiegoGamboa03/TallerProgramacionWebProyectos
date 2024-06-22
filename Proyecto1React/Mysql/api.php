<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');

include 'db.php';

// Obtener el método de solicitud y los segmentos de la URI
$metodoSolicitud = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$segmentosURI = explode('/', trim(parse_url($uri, PHP_URL_PATH), '/'));

// Función para obtener todos los productos
function obtenerTodosLosProductos($conexion) {
    $consulta = "SELECT p.id, p.foodName, p.foodDescription, p.foodPrice, p.foodImg, c.nombre as categoria
                 FROM productos p
                 JOIN categorias c ON p.idCategoria = c.idCategoria";
    $resultado = $conexion->query($consulta);

    $productos = [];
    while ($fila = $resultado->fetch_assoc()) {
        $categoria = $fila['categoria'];
        if (!isset($productos[$categoria])) {
            $productos[$categoria] = [];
        }
        $productos[$categoria][] = [
            "id" => $fila['id'],
            "foodName" => $fila['foodName'],
            "foodDescription" => $fila['foodDescription'],
            "foodPrice" => $fila['foodPrice'],
            "foodImg" => $fila['foodImg']
        ];
    }
    return $productos;
}

// Función para obtener productos por categoría
function obtenerProductosPorCategoria($conexion, $categoria) {
    $consulta = $conexion->prepare("SELECT p.id, p.foodName, p.foodDescription, p.foodPrice, p.foodImg, c.nombre as categoria
                                    FROM productos p
                                    JOIN categorias c ON p.idCategoria = c.idCategoria
                                    WHERE c.nombre = ?");
    $consulta->bind_param("s", $categoria);
    $consulta->execute();
    $resultado = $consulta->get_result();

    $productos = [];
    while ($fila = $resultado->fetch_assoc()) {
        $productos[] = [
            "id" => $fila['id'],
            "foodName" => $fila['foodName'],
            "foodDescription" => $fila['foodDescription'],
            "foodPrice" => $fila['foodPrice'],
            "foodImg" => $fila['foodImg']
        ];
    }
    return $productos;
}

// Procesar la solicitud
$respuesta = [];
if ($metodoSolicitud == 'GET') {
    if (empty($segmentosURI[0]) || $segmentosURI[0] == 'productos') {
        // Obtener todos los productos
        $respuesta = obtenerTodosLosProductos($conexion);
    } elseif ($segmentosURI[0] == 'categoria' && !empty($segmentosURI[1])) {
        // Obtener productos por categoría
        $categoria = $segmentosURI[1];
        $respuesta[$categoria] = obtenerProductosPorCategoria($conexion, $categoria);
    } else {
        $respuesta = ["error" => "Ruta no encontrada"];
    }
} else {
    $respuesta = ["error" => "Método no permitido"];
}

// Devolver la respuesta en formato JSON
echo json_encode($respuesta);
?>
