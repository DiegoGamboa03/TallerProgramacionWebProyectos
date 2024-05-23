function LocationItem({localName = "", localImg = "",localDescription = "", localUrl = ""}){
    
    
    const handleOnClick = () => {
        window.open(localUrl ,'_blank');
    }

    return(
    <div>
        <img className="localIMg" src={localImg} alt/>
        <h3>{localName}</h3>
        <p><i className='bx bxs-star'></i> <i class='bx bxs-star'></i>
            <i className='bx bxs-star'></i> <i class='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
        </p>
        <div dangerouslySetInnerHTML={{ __html: localDescription }} /> 
        <p>Horario: 08:00 Cierra a las 23:00</p>
        <p>Teléfono: (01) 6100010</p>
       
       <button onClick = {() => handleOnClick()}>
        <i className="bx bx-map"></i> UBICACIÓN 
       </button> 
    </div>
    )
}

export default LocationItem