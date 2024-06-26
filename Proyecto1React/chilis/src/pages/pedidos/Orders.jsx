import React from "react";
import Menu from "../../components/Menu";
import {
  useOrderContext,
  useRemoveOrderContext,
  useClearOrderContext,
} from "../../OrderProvider";
import Pica from "../../assets/img/pica.avif";
import Tosta from "../../assets/img/tosta.avif";
import Choclo from "../../assets/img/choclo.avif";
import Hamburg from "../../assets/img/hamburg.avif";
import Taco1 from "../../assets/img/taco1.avif";
import Taco2 from "../../assets/img/taco2.avif";
import Taco3 from "../../assets/img/taco4.avif";
import Swal from "sweetalert2";

function Orders() {
  const orders = useOrderContext();
  const removeItem = useRemoveOrderContext();
  const clearOrders = useClearOrderContext();

  const importarImagen = (ruta) => {
    switch (ruta) {
      case "/src/assets/img/pica.avif":
        return Pica;
      case "/src/assets/img/tosta.avif":
        return Tosta;
      case "/src/assets/img/choclo.avif":
        return Choclo;
      case "/src/assets/img/hamburg.avif":
        return Hamburg;
      case "/src/assets/img/taco1.avif":
        return Taco1;
      case "/src/assets/img/taco2.avif":
        return Taco2;
      case "/src/assets/img/taco3.avif":
        return Taco3;
      default:
        return null;
    }
  };

  const calcularTotal = () => {
    if (!Array.isArray(orders[0])) return 0;
    return orders[0]
      .reduce((total, item) => {
        const price = parseFloat(item.foodPrice);
        return total + (isNaN(price) ? 0 : price);
      }, 0)
      .toFixed(2);
  };

  const IGV = 0.18; // 18% IGV
  const total = calcularTotal();
  const igvTotal = (total * IGV).toFixed(2);
  const totalConIgv = (parseFloat(total) + parseFloat(igvTotal)).toFixed(2);

  const handleEliminarProducto = (index) => {
    removeItem(index); // Llama a la función para eliminar el producto del contexto
  };

  const registrarVenta = async () => {
    const ventaData = {
      subtotal: total,
      igv: igvTotal,
      total: totalConIgv,
      detalle: orders[0].map((item) => ({
        idProducto: item.id, 
        cantidad: 1, 
        precioUnitario: item.foodPrice,
      })),
    };

    try {
      const response = await fetch(
        "http://localhost:8022/registrarVentaDetalle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ventaData),
        }
      );

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.error || "Error al registrar la venta");
      }

      const result = await response.json();
      console.log("Venta registrada con éxito:", result);

      // Mostrar alerta de éxito usando SweetAlert
      Swal.fire({
        title: "¡Venta registrada!",
        text: "La venta ha sido registrada exitosamente.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Limpiar el carrito
        clearOrders();
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <Menu />
      <div className="menuchilis">
        <div className="orders-container">
          {Array.isArray(orders[0]) && orders[0].length > 0 ? (
            <>
              <div>
                <h2>Tus pedidos</h2>
                <div className="tablaModel card">
                  <table className="orders-table ">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders[0].map((order, index) => (
                        <tr key={index}>
                          <td>
                            <img
                              className="card-img-top"
                              src={importarImagen(order.foodImg)}
                              alt={order.foodName}
                            />
                          </td>
                          <td>{order.foodName}</td>
                          <td>{order.foodDescription}</td>
                          <td>S/. {order.foodPrice}</td>
                          <td>
                            <button
                              onClick={() => handleEliminarProducto(index)}
                              className="btn eliminar"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="total-container">
                    <div className="total">
                      <h3>Subtotal: S/. {total}</h3>
                      <h3>IGV (18%): S/. {igvTotal}</h3>
                      <h3>Total: S/. {totalConIgv}</h3>
                    </div>
                    <button
                      onClick={registrarVenta}
                      className="btn btn-primary"
                    >
                      Registrar Venta
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <div>
                <h2>
                  ¡Tu carrito está vacío! <br /> Ingresa a nuestra carta y
                  agrega productos a tu pedido.
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Orders;
