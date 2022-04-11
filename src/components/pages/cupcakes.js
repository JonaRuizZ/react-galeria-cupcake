import { useEffect, useState } from "react";
import Cupcake from "../cards/Cupcake";

const Cupcakes = () => {
    const [cupcakes, setCupcakes] = useState()

    // Cada vez que ponga la página cupcakes traeme todo los cupcakes que tengas en la API usando fetch:
    useEffect(() => {
        fetch("http://localhost:3001/cupcakes")
        .then(response => response.json())
        .then(data => setCupcakes(data)) // Estamos diciendo que cupcakes tenga el valor de data
    }, [])

    return(
        <div className="ed-grid">
            <h1>En esta sección venderémos cupcakes</h1>
            {
            // Loader ternario: Hay cupcakes? entonces almacenalos en el array y me los muestras en un nuevo array (.map)
            cupcakes ? (
                <section>
                    {
                        //cupcakes.map(c => <Cupcake />)
                        cupcakes.map(({imagen, sabor, descripcion, color, precio}) => (
                            <Cupcake 
                                imagen={imagen}
                                sabor={sabor}
                                descripcion={descripcion}
                                color={color}
                                precio={precio}
                            />
                        ))

                    }
                </section>
                // Mientras se recepcionan los datos de la fake API, nos mostrará un cargando...
            ) : (<span>Cargando...</span>)
            }
        </div>
    )
}

export default Cupcakes;