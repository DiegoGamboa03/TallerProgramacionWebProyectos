import { Link } from "react-router-dom";
import logoIni from "../assets/img/logo.png"

function Menu() {
    return (<>
        <nav id="navbar" className="navbar">
            <ul>
                <li><Link to="/"><i
                    className="bx bx-home"></i>
                    <span>Inicio</span></Link></li>
                <li><Link to="/Menu"><i
                    className='bx bx-news'></i>
                    <span>Menu</span></Link></li>
                <li><Link to="/Localizacion"><i className='bx bx-map'></i>
                    <span>Localización</span></Link></li>
                <li><Link to="/Promociones"><i className='bx bx-store-alt'></i>
                    <span>Promociones</span></Link></li>
                <li><Link to="/Pedidos"><i className='bx bx-cart-alt'></i>
                    <span>Pedidos</span></Link></li>
            </ul>
        </nav>
        <img id="logoFondo" src={logoIni} alt></img>
    </>)
}
export default Menu;