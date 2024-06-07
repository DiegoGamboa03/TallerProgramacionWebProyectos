import FoodItem from "../../components/FoodItem";
import Menu from "../../components/Menu";
import data from "../../pages/data/productos.json"
import Pica from "../../assets/img/pica.avif";
import Tosta from "../../assets/img/tosta.avif"
import Choclo from "../../assets/img/choclo.avif"
import Hamburg from "../../assets/img/hamburg.avif"
import { useApiContext } from "../../ApiContext";

const importarImagen = (ruta) => {
    switch (ruta) {
      case "./assets/img/pica.avif":
        return Pica;
      case "./assets/img/tosta.avif":
        return Tosta;
      case "./assets/img/choclo.avif":
        return Choclo;
      case "./assets/img/hamburg.avif":
        return Hamburg;
      default:
        return null;
    }
  };

function Promotions() {

  const { chiliar, promociones ,loading, error } = useApiContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Menu />
      <div class="menuchilis">
        <div class="carta">
          <h1>
            <i class="bx bx-happy-beaming"></i>A CHILIAR
          </h1>
          <div class="favorito">
            {chiliar.map((item, index) => (
              <FoodItem
                key={index}
                foodName={item.foodName}
                foodDescription={item.foodDescription}
                foodPrice={item.foodPrice}
                foodImg={importarImagen(item.foodImg)}
              />
            ))}
          </div>
          <h1>
            <i class="bx bxs-wink-smile"></i>PROMOCIONES SANDWICHES
          </h1>
          <div class="taco">
            {promociones.map((item, index) => (
              <FoodItem
                key={index}
                foodName={item.foodName}
                foodDescription={item.foodDescription}
                foodPrice={item.foodPrice}
                foodImg={importarImagen(item.foodImg)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Promotions;
