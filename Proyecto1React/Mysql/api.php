<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

include 'db.php';

// Manejo de preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit();
}

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

    $productos = [
        "favoritos" => [],
        "tacosFajitas" => [],
        "chiliar" => [],
        "promociones" => []
    ];

    while ($fila = $resultado->fetch_assoc()) {
        $categoria = $fila['categoria'];
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

// Función para registrar una venta
function registrarVenta($conexion, $data) {
    $subtotal = $data['subtotal'];
    $igv = $data['igv'];
    $total = $data['total'];
    $detalle = $data['detalle'];

    // Insertar en la tabla ventas
    $stmt = $conexion->prepare("INSERT INTO ventas (subtotal, igv, total) VALUES (?, ?, ?)");
    $stmt->bind_param("ddd", $subtotal, $igv, $total);

    if ($stmt->execute()) {
        $idVenta = $stmt->insert_id;

        // Insertar en la tabla detalle_venta
        $stmt_detalle = $conexion->prepare("INSERT INTO detalle_venta (idVenta, idProducto, cantidad, precioUnitario) VALUES (?, ?, ?, ?)");

        foreach ($detalle as $item) {
            $idProducto = $item['idProducto'];
            $cantidad = $item['cantidad'];
            $precioUnitario = $item['precioUnitario'];
            $stmt_detalle->bind_param("iiid", $idVenta, $idProducto, $cantidad, $precioUnitario);
            $stmt_detalle->execute();
        }

        return ["message" => "Venta registrada exitosamente"];
    } else {
        return ["message" => "Error al registrar la venta"];
    }
}

// Función para obtener todos los locales
function obtenerTodosLosLocales($conexion) {
    $consulta = "SELECT id, localName, localImg, localDescription, localUrl FROM locales";
    $resultado = $conexion->query($consulta);

    $locales = [];
    while ($fila = $resultado->fetch_assoc()) {
        $locales[] = [
            "id" => $fila['id'],
            "localName" => $fila['localName'],
            "localImg" => $fila['localImg'],
            "localDescription" => $fila['localDescription'],
            "localUrl" => $fila['localUrl']
        ];
    }

    return $locales;
}

// Procesar la solicitud
$respuesta = [];
try {
    if ($metodoSolicitud == 'GET') {
        if (empty($segmentosURI[0]) || $segmentosURI[0] == 'productos') {
            // Obtener todos los productos
            $productos = obtenerTodosLosProductos($conexion);
            $locales = obtenerTodosLosLocales($conexion);
            $respuesta = $productos;
            $respuesta["locales"] = $locales;
        } elseif ($segmentosURI[0] == 'categoria' && !empty($segmentosURI[1])) {
            // Obtener productos por categoría
            $categoria = $segmentosURI[1];
            $respuesta[$categoria] = obtenerProductosPorCategoria($conexion, $categoria);
        } elseif ($segmentosURI[0] == 'locales') {
            // Obtener todos los locales
            $respuesta = obtenerTodosLosLocales($conexion);
        } else {
            throw new Exception("Ruta no encontrada");
        }
    } elseif ($metodoSolicitud == 'POST') {
        if ($segmentosURI[0] == 'registrarVentaDetalle') {
            // Registrar venta
            $data = json_decode(file_get_contents('php://input'), true);
            if ($data === null) {
                throw new Exception("Datos JSON inválidos");
            }
            $respuesta = registrarVenta($conexion, $data);
        } else {
            throw new Exception("Ruta no encontrada");
        }
    } else {
        throw new Exception("Método no permitido");
    }
} catch (Exception $e) {
    http_response_code(400);
    $respuesta = ["error" => $e->getMessage()];
}

// Devolver la respuesta en formato JSON
echo json_encode($respuesta);

$conexion->close();
?>
