import Menu from '../../components/Menu.jsx';
import FoodItem from '../../components/FoodItem.jsx';

function FoodMenu(){
    return(
        <>
        <Menu/>
        <div class="carta">
                <h1><i className='bx bx-happy-beaming'></i>
                        FAVORITOS </h1>
                <div className="favorito">
                        <FoodItem 
                        foodName = "TRIPLE DIPPER" 
                        foodDescription='Una combinación de tres de nuestras entradas favoritas Chicken Crispers®, Wings OverBuffalo y Quesadillas.'
                        foodPrice='49.00'
                        foodImg="../img/pica.avif"
                        />
                         <FoodItem 
                        foodName = "TOSTADA DIPPER" 
                        foodDescription='Una combinación de tres de nuestras entradas favoritas; Chicken Crispers®, Wings Over Buffalo y Quesadillas.'
                        foodPrice='49.00'
                        foodImg="../img/tosta.avif"
                        />
                         <FoodItem 
                        foodName = "CHICKEN CRISPERS" 
                        foodDescription='Filetitos de pechuga de polloarrebozados y fritos. Servidos con choclo y papas fritas caseras.'
                        foodPrice='42.00'
                        foodImg="../img/choclo.avif"
                        />
                         <FoodItem 
                        foodName = "ALEX´S SANTA FE BURGER" 
                        foodDescription='Hamburguesa (220 gr), queso gouda, palta, cebolla roja, pickles, tomates, culantro y nuestra salsa santa fe. Servida con papas fritas. Servimos todas nuestras hamburguesas en termino 3/4.'
                        foodPrice='40.00'
                        foodImg="../img/hamburg.avif"
                        />
                </div>
                <h1><i className='bx bxs-wink-smile'></i> TACOS &
                        FAJITAS
                </h1>
                <div className="taco">
                        <FoodItem 
                        foodName = "RANCHERO CHICKEN TACOS" 
                        foodDescription='Tres tortillas de harina con nuestros filetitos de pollo al estilo ranchero, acompañados de queso mozzarella, palta, pico de gallo* y culantro. Servido  frejoles negros y arroz con choclo.'
                        foodPrice='41.00'
                        foodImg="../img/taco1.avif"
                        />
                         <FoodItem 
                        foodName = "TACOS CHICKEN" 
                        foodDescription='Tres tortillas de harina con
                        nuestros
                        filetitos de pollo al
                        estilo
                        ranchero, acompañados de
                        queso
                        mozzarella, palta, pico
                        de
                        gallo* y culantro.
                        Servido con
                        frejoles negros y arroz
                        con
                        choclo.'
                        foodPrice='41.00'
                        foodImg="../img/taco1.avif"
                        />
                         <FoodItem 
                        foodName = "CRISPY CHICKEN TACOS" 
                        foodDescription='3 Tortillas con filetes
                        crujientes de
                        pollo, tocino, pico de
                        gallo,
                        quesos, lechuga, ranch y
                        honey
                        chipotle. Servidos con
                        frijoles
                        negros y arroz.'
                        foodPrice='40.00'
                        foodImg="../img/taco2.avif"
                        />
                         <FoodItem 
                        foodName = "FAJITAS MIXTAS" 
                        foodDescription='Pollo y carne a la parrilla
                        servidos
                        sobre cebollas y
                        pimientos
                        salteados. acompañado de
                        tortillas, guacamole,
                        sour
                        cream, quesos y pico de
                        gallo'
                        foodPrice='53.00'
                        foodImg="../img/taco4.avif"
                        />
                </div>

</div>    
        </>
    );
}

export default FoodMenu;