import Menu from "../../components/Menu";
import { useOrderContext, useRemoveOrderContext } from "../../OrderProvider";
import Pica from "../../assets/img/pica.avif";
import Tosta from "../../assets/img/tosta.avif";
import Choclo from "../../assets/img/choclo.avif";
import Hamburg from "../../assets/img/hamburg.avif";
import Taco1 from "../../assets/img/taco1.avif";
import Taco2 from "../../assets/img/taco2.avif";
import Taco3 from "../../assets/img/taco4.avif";

function Orders() {
  const orders = useOrderContext();
  const removeItem = useRemoveOrderContext();

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
                      {orders[0].map((item, index) => (
                        <tr key={index}>
                          <td>
                            <img
                              id="imagenProducto"
                              src={importarImagen(item.foodImg)}
                              alt={item.foodName}
                              width="50%"
                            />
                          </td>
                          <td>{item.foodName}</td>
                          <td>{item.foodDescription}</td>
                          <td>{item.foodPrice}</td>
                          <td>
                            <button
                              className="eliminar"
                              onClick={() => handleEliminarProducto(index)}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="resumenVenta card">
                <div className="contenidoResumen">
                  <h3>Resumen de la venta</h3>
                  <p>Subtotal: S/. {total}</p>
                  <p>IGV (18%): S/. {igvTotal}</p>
                  <p>Total: S/. {totalConIgv}</p>
                  <div className="crearVenta">
                    <button>Registrar venta</button>
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
