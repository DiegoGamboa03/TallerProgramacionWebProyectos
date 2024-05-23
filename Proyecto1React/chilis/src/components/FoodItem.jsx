function FoodItem({foodName = "", foodImg = "", foodDescription = "", foodPrice = ""}) {
    return (
        <>
            <div>
                <img src={foodImg} alt />
                <h3>{foodName}</h3>
                <p>{foodDescription}</p>
                <p>S/ {foodPrice}</p>
                <button>Agregar</button>
            </div>
        </>
    );
}

export default FoodItem;