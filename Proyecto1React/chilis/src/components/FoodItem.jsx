import { useAddOrderContext, useOrderContext } from "../OrderProvider";

function FoodItem({foodName = "", foodImg = "", foodDescription = "", foodPrice = ""}) {
    
    const addOrder = useAddOrderContext();
    const orders = useOrderContext();
    const foodItem =  {foodName, foodImg, foodDescription,foodPrice}
    
    const handleOnClick = () =>{
        addOrder(foodItem);
        alert(`Se ha añadido ${foodName} a tus pedidos`);
        console.log(orders)
    }
    
    return (
        <>
            <div>
                <img src={foodImg} alt />
                <h3>{foodName}</h3>
                <p>{foodDescription}</p>
                <p>S/ {foodPrice}</p>
                <button onClick={() => handleOnClick()}>Agregar</button>
            </div>
        </>
    );
}

export default FoodItem;