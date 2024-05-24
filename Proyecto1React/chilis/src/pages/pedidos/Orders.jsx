import Menu from "../../components/Menu";
import { useOrderContext } from "../../OrderProvider";
import OrderItem from "../../components/OrderItem";
import Pica from "../../assets/img/pica.avif";
import Tosta from "../../assets/img/tosta.avif"
import Choclo from "../../assets/img/choclo.avif"
import Hamburg from "../../assets/img/hamburg.avif"
import Taco1 from "../../assets/img/taco1.avif"
import Taco2 from "../../assets/img/taco2.avif"
import Taco3 from "../../assets/img/taco4.avif"


function Orders(){
    const orders = useOrderContext();

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
            case "/src/assets/img/pica.avif":
                return Pica;
            case "/src/assets/img/tosta.avif":
                return Tosta;
            case "/src/assets/img/choclo.avif":
                return Choclo;
            case "/src/assets/img/hamburg.avif":
                return Hamburg;

            default:
                return null;
        }
    };

    return(
        <>
        <Menu/>
        <div className="carta">
                {orders[0].map((item, index) =>{
                    console.log(item);
                    return (
                        <OrderItem 
                            key={index}
                            foodName={item.foodName}
                            foodDescription={item.foodDescription}
                            foodPrice={item.foodPrice}
                            foodImg={importarImagen(item.foodImg)}
                        />
                    )
                })}
        </div>  
        
        </>
    );
}

export default Orders;