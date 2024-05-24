import Menu from "../../components/Menu";
import modeloComida from "../../assets/img/modeloComida.webp"
import { useOrderContext } from "../../OrderProvider";
import OrderItem from "../../components/OrderItem";


function Orders(){
    const orders = useOrderContext();

    const importarImagen = (ruta) => {
        switch (ruta) {
            case "../assets/img/pica.avif":
                return Pica;
            case "../assets/img/tosta.avif":
                return Tosta;
            case "../assets/img/choclo.avif":
                return Choclo;
            case "../assets/img/hamburg.avif":
                return Hamburg;
            case "../assets/img/taco1.avif":
                return Taco1;
            case "../assets/img/taco2.avif":
                return Taco2;
            case "../assets/img/taco3.avif":
                return Taco3;
            case "../assets/img/pica.avif":
                return Pica;
            case "../assets/img/tosta.avif":
                return Tosta;
            case "../assets/img/choclo.avif":
                return Choclo;
            case "../assets/img/hamburg.avif":
                return Hamburg;

            default:
                return null;
        }
    };

    return(
        <>
        <Menu/>
        <div className="carta">
                {orders[0].map((item, index) => (
                    <OrderItem 
                        key={index}
                        foodName={item.foodName}
                        foodDescription={item.foodDescription}
                        foodPrice={item.foodPrice}
                        foodImg={importarImagen(item.foodImg)}
                    />
                ))}
        </div>  
        
        </>
    );
}

export default Orders;