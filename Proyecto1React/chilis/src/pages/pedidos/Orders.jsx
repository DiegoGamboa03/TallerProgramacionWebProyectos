import Menu from "../../components/Menu";
import modeloComida from "../../assets/img/modeloComida.webp"

function Orders(){
    return(
        <>
        <Menu/>
        <img id="logoInicio" src={modeloComida} alt/>
        <div class="container">
            <h1>¿Por que deberias<br/>ordenar<br/>con nosotros?</h1>
            <h4>¡Prepárate para una experiencia culinaria extraordinaria en Chili's, tu destino supremo para una comida<br/>
                rápida que redefine el sabor y la satisfacción! Sumérgete en un universo de sabores exquisitos con<br/>
                nuestra impresionante y extensa variedad de platos que van desde nuestras icónicas costillas con un<br/> 
                sabor que te dejará sin aliento, hasta nuestras hamburguesas jugosas, y una amplia selección de<br/>
                aperitivos irresistibles que te harán agua la boca. En Chili's, la calidad es nuestra firma, con ingredientes<br/> 
                frescos y seleccionados cuidadosamente para asegurar una experiencia gastronómica inigualable en cada visita.

                Pero no es solo la comida lo que hace que Chili's sea único; nuestro ambiente acogedor te envuelve<br/> 
                en una atmósfera de comodidad y calidez, mientras nuestro equipo dedicado se esfuerza por brindarte un<br/> 
                servicio excepcional que supera tus expectativas. Desde el momento en que entras hasta el último<br/> 
                bocado, cada momento en Chili's está diseñado para deleitar tus sentidos y crear recuerdos inolvidables.
                
                Así que ven y únete a nosotros en Chili's, donde la comida rápida alcanza nuevas alturas de excelencia y<br/> 
                la satisfacción del cliente es nuestra máxima prioridad. Descubre por qué Chili's no es solo<br/> 
                un restaurante, ¡es una experiencia culinaria que merece ser celebrada una y otra vez!</h4><br/><br/><br/>

                <a href="https://www.chilis.pe" style={{textDecoration: "none", color:"rgb(30, 235, 64)", fontSize: "25px"}}>Disfruta Nuestra deliciosa comida dando click aquí</a>
        </div>  
        
        </>
    );
}

export default Orders;