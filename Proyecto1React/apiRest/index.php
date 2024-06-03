<?php

// Lee el contenido del archivo JSON
$data = file_get_contents(__DIR__ . "/productos.json");

// Decodifica el JSON
$productos = json_decode($data, true);

// Obtener la URI de la solicitud
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Quitar cualquier consulta de la URI
$requestUri = parse_url($requestUri, PHP_URL_PATH);

// Divide la URI en segmentos
$uriSegments = explode('/', trim($requestUri, '/'));

// Inicializar respuesta
$response = [
    'status' => 404,
    'message' => 'Not Found'
];

// Función para buscar un producto específico
function buscarProducto($productos, $productoId) {
    foreach ($productos as $categoria => $items) {
        foreach ($items as $item) {
            if ($item['foodName'] == $productoId) {
                return $item;
            }
        }
    }
    return null;
}

// Maneja las solicitudes
if ($requestMethod === 'GET') {
    if (count($uriSegments) == 2 && $uriSegments[0] == 'categoria') {
        $categoria = $uriSegments[1];
        if (array_key_exists($categoria, $productos)) {
            // Retorna todos los productos de una categoría específica
            $response = $productos[$categoria];
        } else {
            $response = [
                'status' => 404,
                'message' => 'Categoría no encontrada'
            ];
        }
    } elseif (count($uriSegments) == 1 && $uriSegments[0] == 'productos') {
        // Retorna todos los productos
        $response = $productos;
    } elseif (count($uriSegments) == 2 && $uriSegments[0] == 'producto') {
        // Retorna detalles de un producto específico
        $productoId = urldecode($uriSegments[1]);
        $producto = buscarProducto($productos, $productoId);
        if ($producto) {
            $response = $producto;
        } else {
            $response = [
                'status' => 404,
                'message' => 'Producto no encontrado'
            ];
        }
    } else {
        // Ruta no encontrada
        $response = [
            'status' => 404,
            'message' => 'Ruta no encontrada'
        ];
    }
} else {
    // Método no permitido
    $response = [
        'status' => 405,
        'message' => 'Método no permitido'
    ];
}

// Retorna la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
