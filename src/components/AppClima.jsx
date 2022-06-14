import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Spinner from "./Spinner"



const AppClima = () => {

  const { resultado, cargando, noResultado } = useClima()

  return (
    <>
      <main className="dos-columnas">
        <Formulario/>
        {

          cargando ? <Spinner/> : 

          // opcional chaining: detecta si hay un objeto vacio y si es llenaod genera una respuesta
          resultado?.name ? <Resultado /> :
          noResultado ? <p>{noResultado}</p> : 'Selecciona una ubicación Válida'
        }
        
      </main>
    </>
  )
}

export default AppClima