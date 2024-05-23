import Menu from '../../components/Menu.jsx';
import FoodItem from '../../components/FoodItem.jsx';
import Pica from "../../assets/img/pica.avif";
import Tosta from "../../assets/img/tosta.avif"
import Choclo from "../../assets/img/choclo.avif"
import Hamburg from "../../assets/img/hamburg.avif"
import Taco1 from "../../assets/img/taco1.avif"
import Taco2 from "../../assets/img/taco2.avif"
import Taco3 from "../../assets/img/taco4.avif"
import menuData from "../../pages/data/productos.json"

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
          case "./assets/img/taco1.avif":
            return Taco1;
          case "./assets/img/taco2.avif":
            return Taco2;
          case "./assets/img/taco3.avif":
            return Taco3;
            
          default:
            return null;
        }
      };

function FoodMenu(){
    return(
        <>
        <Menu/>
        <div className="carta">
            <h1><i className='bx bx-happy-beaming'></i> FAVORITOS </h1>
            <div className="favorito">
                {menuData.favoritos.map((item, index) => (
                    <FoodItem 
                        key={index}
                        foodName={item.foodName}
                        foodDescription={item.foodDescription}
                        foodPrice={item.foodPrice}
                        foodImg={importarImagen(item.foodImg)}
                    />
                ))}
            </div>
            <h1><i className='bx bxs-wink-smile'></i> TACOS & FAJITAS </h1>
            <div className="taco">
                {menuData.tacosFajitas.map((item, index) => (
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
    </>
    );
}

export default FoodMenu;