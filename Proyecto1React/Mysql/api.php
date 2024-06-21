<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');

include 'db.php';

// Obtener el método de solicitud y los segmentos de la URI
$metodoSolicitud = $_SERVER['REQUEST_METHOD'];
$segmentosURI = explode('/', trim($_SERVER['PATH_INFO'], '/'));

$respuesta = [];

// Seleccionar el controlador según el método de solicitud
switch ($metodoSolicitud) {
    case 'GET':
        manejarSolicitudGet($conn, $segmentosURI);
        break;
    case 'POST':
        manejarSolicitudPost($conn, $segmentosURI);
        break;
    case 'PUT':
        manejarSolicitudPut($conn, $segmentosURI);
        break;
    case 'DELETE':
        manejarSolicitudDelete($conn, $segmentosURI);
        break;
    default:
        $respuesta = ['status' => 405, 'message' => 'Método no permitido'];
        echo json_encode($respuesta);
        break;
}

$conn->close();

// Manejar solicitudes GET
function manejarSolicitudGet($conn, $segmentosURI) {
    global $respuesta;

    if (count($segmentosURI) == 2 && $segmentosURI[0] == 'categoria') {
        $categoria = $segmentosURI[1];
        if (esCategoriaValida($categoria)) {
            $respuesta = obtenerRegistros($conn, $categoria);
        } else {
            $respuesta = ['status' => 404, 'message' => 'Categoría no encontrada'];
        }
    } elseif (count($segmentosURI) == 1 && $segmentosURI[0] == 'productos') {
        $respuesta = obtenerTodosLosProductos($conn);
    } elseif (count($segmentosURI) == 2 && $segmentosURI[0] == 'producto') {
        $productoId = urldecode($segmentosURI[1]);
        $respuesta = obtenerProductoPorId($conn, $productoId);
    } else {
        $respuesta = ['status' => 404, 'message' => 'Ruta no encontrada'];
    }

    echo json_encode($respuesta);
}

// Obtener todos los registros de una tabla específica
function obtenerRegistros($conn, $tabla) {
    $sql = "SELECT * FROM $tabla";
    $result = $conn->query($sql);

    $registros = [];
    while ($row = $result->fetch_assoc()) {
        $registros[] = $row;
    }
    return $registros;
}

// Obtener todos los productos de todas las tablas relevantes
function obtenerTodosLosProductos($conn) {
    $tablas = ['favoritos', 'tacosFajitas', 'locales', 'chiliar', 'promociones'];
    $todosLosProductos = [];

    foreach ($tablas as $tabla) {
        $todosLosProductos[$tabla] = obtenerRegistros($conn, $tabla);
    }

    return $todosLosProductos;
}

// Obtener un producto por su ID
function obtenerProductoPorId($conn, $id) {
    $tablas = ['favoritos', 'tacosFajitas', 'locales', 'chiliar', 'promociones'];

    foreach ($tablas as $tabla) {
        $sql = "SELECT * FROM $tabla WHERE id = $id";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            return $result->fetch_assoc();
        }
    }

    return ['status' => 404, 'message' => 'Producto no encontrado'];
}

// Verificar si la categoría es válida
function esCategoriaValida($categoria) {
    $categoriasValidas = ['favoritos', 'tacosFajitas', 'locales', 'chiliar', 'promociones'];
    return in_array($categoria, $categoriasValidas);
}

// Manejar solicitudes POST
function manejarSolicitudPost($conn, $segmentosURI) {
    global $respuesta;

    if (count($segmentosURI) == 1) {
        $tabla = $segmentosURI[0];
        if (esCategoriaValida($tabla)) {
            $datos = json_decode(file_get_contents("php://input"), true);
            if ($datos) {
                $columnas = implode(", ", array_keys($datos));
                $valores = implode(", ", array_map(function($valor) use ($conn) {
                    return "'" . $conn->real_escape_string($valor) . "'";
                }, array_values($datos)));

                $sql = "INSERT INTO $tabla ($columnas) VALUES ($valores)";
                if ($conn->query($sql) === TRUE) {
                    $respuesta = ['status' => 201, 'message' => 'Registro agregado con éxito'];
                } else {
                    $respuesta = ['status' => 500, 'message' => 'Error: ' . $conn->error];
                }
            } else {
                $respuesta = ['status' => 400, 'message' => 'Entrada inválida'];
            }
        } else {
            $respuesta = ['status' => 404, 'message' => 'Tabla no encontrada'];
        }
    } else {
        $respuesta = ['status' => 400, 'message' => 'Solicitud inválida'];
    }

    echo json_encode($respuesta);
}

// Manejar solicitudes PUT
function manejarSolicitudPut($conn, $segmentosURI) {
    global $respuesta;

    if (count($segmentosURI) == 2) {
        $tabla = $segmentosURI[0];
        $id = intval($segmentosURI[1]);

        if (esCategoriaValida($tabla)) {
            $datos = json_decode(file_get_contents("php://input"), true);
            if ($datos) {
                $sets = [];
                foreach ($datos as $columna => $valor) {
                    $sets[] = "$columna = '" . $conn->real_escape_string($valor) . "'";
                }
                $sql = "UPDATE $tabla SET " . implode(", ", $sets) . " WHERE id = $id";
                if ($conn->query($sql) === TRUE) {
                    if ($conn->affected_rows > 0) {
                        $respuesta = ['status' => 200, 'message' => 'Registro actualizado con éxito'];
                    } else {
                        $respuesta = ['status' => 404, 'message' => 'Registro no encontrado'];
                    }
                } else {
                    $respuesta = ['status' => 500, 'message' => 'Error: ' . $conn->error];
                }
            } else {
                $respuesta = ['status' => 400, 'message' => 'Entrada inválida'];
            }
        } else {
            $respuesta = ['status' => 404, 'message' => 'Tabla no encontrada'];
        }
    } else {
        $respuesta = ['status' => 400, 'message' => 'Solicitud inválida'];
    }

    echo json_encode($respuesta);
}

// Manejar solicitudes DELETE
function manejarSolicitudDelete($conn, $segmentosURI) {
    global $respuesta;

    if (count($segmentosURI) == 2) {
        $tabla = $segmentosURI[0];
        $id = intval($segmentosURI[1]);

        if (esCategoriaValida($tabla)) {
            $sql = "DELETE FROM $tabla WHERE id = $id";
            if ($conn->query($sql) === TRUE) {
                if ($conn->affected_rows > 0) {
                    $respuesta = ['status' => 200, 'message' => 'Registro eliminado con éxito'];
                } else {
                    $respuesta = ['status' => 404, 'message' => 'Registro no encontrado'];
                }
            } else {
                $respuesta = ['status' => 500, 'message' => 'Error: ' . $conn->error];
            }
        } else {
            $respuesta = ['status' => 404, 'message' => 'Tabla no encontrada'];
        }
    } else {
        $respuesta = ['status' => 400, 'message' => 'Solicitud inválida'];
    }

    echo json_encode($respuesta);
}
?>
