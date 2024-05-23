import Menu from "./components/Menu"
import modeloComida from "./assets/img/modeloComida.webp";
function App() {

  return (
    <>
      <Menu></Menu>
      
      <img id="logoInicio"  src={modeloComida} alt="Modelo de Comida" />
        <div class="container">
            <h1>¿Quiénes somos?</h1>
            <h4>¡Bienvenidos a Chilis! Desde nuestra fundación en 1975, nos
                hemos dedicado a ofrecer deliciosas opciones de comida rápida
                con un toque especial. Nuestro compromiso es brindar sabores
                auténticos y experiencias memorables a todos nuestros clientes.
                En Chilis, creemos en la calidad y en la frescura de nuestros
                ingredientes, seleccionando cuidadosamente cada producto para
                asegurar que cada mordida sea tan buena como la primera. Nuestro
                menú está diseñado para satisfacer todos los gustos, con una
                variedad de hamburguesas, tacos, ensaladas y postres que te
                dejarán queriendo más. Más que una cadena de comida rápida,
                Chilis es una comunidad. Valoramos a cada uno de nuestros
                clientes y nos esforzamos por crear un ambiente acogedor donde
                las familias y amigos puedan reunirse para disfrutar de una
                comida excelente en buena compañía. Nos enorgullece ser una
                empresa que apoya a la comunidad local, trabajando con
                proveedores regionales y participando en iniciativas que
                benefician a nuestro entorno. En Chilis, no solo te alimentamos,
                también nos comprometemos con el bienestar de la comunidad que
                nos rodea. Visítanos y experimenta el sabor único de Chilis,
                donde la calidad se encuentra con la rapidez y donde cada visita
                se siente como volver a casa.</h4>
        </div>
    </>
  )
}

export default App
