import FoodItem from "../../components/FoodItem";
import Menu from "../../components/Menu";
function Promotions() {
    return (
        <>
             <Menu/>
            <div class="menuchilis">
                <div class="carta">
                    <h1><i class='bx bx-happy-beaming'></i>A CHILIAR</h1>
                    <div class="favorito">
                        <FoodItem 
                        foodName = "TRIPLE DIPPER" 
                        foodDescription='Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.'
                        foodPrice='49.00'
                        foodImg="../img/pica.avif"
                        />
                        <FoodItem 
                        foodName = "TRIPLE DIPPER" 
                        foodDescription='Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.'
                        foodPrice='49.00'
                        foodImg="../img/pica.avif"
                        />
                        <FoodItem 
                        foodName = "TRIPLE DIPPER" 
                        foodDescription='Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.'
                        foodPrice='49.00'
                        foodImg="../img/pica.avif"
                        />
                    </div>
                    <h1><i class='bx bxs-wink-smile'></i>PROMOCIONES SANDWICHES</h1>
                    <div class="taco">
                    <FoodItem 
                        foodName = "TRIPLE DIPPER" 
                        foodDescription='Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.'
                        foodPrice='49.00'
                        foodImg="../img/pica.avif"
                        />
                        <FoodItem 
                        foodName = "TRIPLE DIPPER" 
                        foodDescription='Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.'
                        foodPrice='49.00'
                        foodImg="../img/pica.avif"
                        />
                        <FoodItem 
                        foodName = "TRIPLE DIPPER" 
                        foodDescription='Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.'
                        foodPrice='49.00'
                        foodImg="../img/pica.avif"
                        />
                        <FoodItem 
                        foodName = "TRIPLE DIPPER" 
                        foodDescription='Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.'
                        foodPrice='49.00'
                        foodImg="../img/pica.avif"
                        />
                    </div>
                </div>
            
            </div>
        </> 
    )
}

export default Promotions;