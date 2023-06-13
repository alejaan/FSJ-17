/**Importante el css */
import "./assets/css/Style.css"
/**Importando un componente */
import Menu from "./Menu"
import Footer from "./footer"
import Lista from "./components/Lista"

function App() {
  const nombre = "Ale Linares"
  return (
    <>
        <Menu />
        <h1>Bienvenidos {nombre} a mi primera practica </h1>
        <p className="parrafo" > Estamos trabajando con React</p> 

        <div>
        <Lista />
        </div>
        
        <Footer /> 
    </>

  )
}

export default App
