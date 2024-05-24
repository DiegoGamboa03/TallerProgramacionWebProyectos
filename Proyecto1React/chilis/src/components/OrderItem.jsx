function OrderItem({foodName = "", foodImg = "", foodDescription = "", foodPrice = ""}){
    return (
        <>
            <div className="order-item">
                <img src={foodImg} alt />
                <h3>{foodName}</h3>
                <p>{foodDescription}</p>
                <p>S/ {foodPrice}</p>
            </div>
        </>
    );
}

export default OrderItem;