import LocationItem from "../../components/LocationItem"
import Menu from "../../components/Menu"

function Location() {
    return (
        <>
            <Menu />
            <div class="menuchilis">
                <h1><i class='bx bx-home'></i> Locales ubicación</h1>
                <div class="local">
                    <LocationItem 
                    localName= "CHILI'S - BENAVIDES" 
                    localImg ="../img/local1.jpg" 
                    localDescription="Cadena apta para familias que ofrece alimentos
                    estadounidenses y tex-mex en un ambiente sureño. <br>
                    Opciones de servicio: <br>
                    - Tiene asientos al aire libre·<br>
                    - Tiene menú para niños"
                    localUrl="https://www.google.com/maps/place/Chili%E2%80%99s+Benavides/@-12.1270139,-77.0141709,17z/data=!4m14!1m7!3m6!1s0x9105c801a420fc79:0xed53d9e2a5c6967d!2sChili%E2%80%99s+Benavides!8m2!3d-12.1270139!4d-77.0141709!16s%2Fg%2F1tvr_sqt!3m5!1s0x9105c801a420fc79:0xed53d9e2a5c6967d!8m2!3d-12.1270139!4d-77.0141709!16s%2Fg%2F1tvr_sqt?entry=ttu"
                    />
                    <LocationItem 
                    localName= "CHILI'S - MEGA PLAZA" 
                    localImg ="../img/local2.jpg" 
                    localDescription="Cadena apta para familias que ofrece alimentos
                    estadounidenses y tex-mex en un ambiente sureño. <br>
                    Opciones de servicio: <br>
                    - Tiene asientos al aire libre·<br>
                    - Tiene menú para niños"
                    localUrl='https://www.google.com/maps/place/MegaPlaza/@-11.994456,-77.0628781,18z/data=!3m1!4b1!4m6!3m5!1s0x9105ce543477f8d9:0x9d64f6794789376b!8m2!3d-11.994456!4d-77.0619391!16s%2Fg%2F1td_crhq?entry=ttu'
                    />
                    <LocationItem 
                    localName= "CHILI'S - MEGA PLAZA" 
                    localImg ="../img/local3.jpg" 
                    localDescription="Cadena apta para familias que ofrece alimentos
                    estadounidenses y tex-mex en un ambiente sureño. <br>
                    Opciones de servicio: <br>
                    - Tiene asientos al aire libre·<br>
                    - Tiene menú para niños"
                    localUrl='https://www.google.com/maps/place/Chili%E2%80%99s+%C3%93valo+Monitor/@-12.0828117,-76.9699432,20.29z/data=!4m6!3m5!1s0x9105c654aae1a517:0xe0a92f40985a09d5!8m2!3d-12.0824514!4d-76.9701022!16s%2Fg%2F113h9w7g5?entry=ttu'
                    />
                </div>
            </div>
        </>
    )

}

export default Location