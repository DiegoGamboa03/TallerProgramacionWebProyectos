import LocationItem from "../../components/LocationItem"
import Menu from "../../components/Menu"
import localesData from "../../pages/data/productos.json"
import Local1 from "../../assets/img/local1.jpg"
import Local2 from "../../assets/img/local2.jpg"
import Local3 from "../../assets/img/local3.jpg"

const importarImagen = (ruta) => {
    switch (ruta) {
      case "./assets/img/local1.jpg":
        return Local1;
      case "./assets/img/local2.jpg":
        return Local2;
      case "./assets/img/local3.jpg":
        return Local3;
      default:
        return null;
    }
  };


function Location() {
    return (
        <>
        <Menu />
        <div className="menuchilis">
            <h1><i className='bx bx-home'></i> Locales ubicación</h1>
            <div className="local">
                {localesData.locales.map((local, index) => (
                    <LocationItem 
                        key={index}
                        localName={local.localName}
                        localImg={importarImagen(local.localImg)}
                        localDescription={local.localDescription}
                        localUrl={local.localUrl}
                    />
                ))}
            </div>
        </div>
    </>
    )

}

export default Location