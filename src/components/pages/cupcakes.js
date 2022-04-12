import useFetch from "../../hooks/useFetch";
import Cupcake from "../cards/Cupcake";

const Cupcakes = ( {peticion, title} ) => {
/*     const [cupcakes, setCupcakes] = useState()

    // Cada vez que ponga la página cupcakes traeme todo los cupcakes que tengas en la API usando fetch:
    useEffect(() => {
        // URL con variable de entorno
        // fetch("http://localhost:3001/cupcakes")
        // fetch(`${process.env.REACT_APP_URL_API}cupcakes`) nos muestra solo los cupcakes
        // fetch(`${process.env.REACT_APP_URL_API}cupcakes?descripcion_like=chocolate`) Mostrar los que contengan en la descripcion la palabra chocolate
        fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
        .then(response => response.json())
        .then(data => setCupcakes(data)) // Estamos diciendo que cupcakes tenga el valor de data
        .catch(e => console.log(e))
    }, [peticion]) */

    const [cupcakes] = useFetch(peticion) // Como useFetch retorna 2 valores en un array, nosotros decidimos si queremos mostrar uno o los 2, en servicios por ejemplo estamos devolviendo 2 valores, servicios y error, pero acá podemos solo devolver uno, el error no lo queremos mostrar, PERO, debemos declarar el valor como un arreglo [cupcakes]

    return(
        <div className="ed-grid">
            { title && <h1>En esta sección venderémos cupcakes</h1> }
            {
            // Loader ternario: Hay cupcakes? entonces almacenalos en el array y me los muestras en un nuevo array (.map)
            cupcakes ? (
                <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                    {
                        //cupcakes.map(c => <Cupcake />)
                        cupcakes.map(({id, imagen, sabor, descripcion, color, precio}) => (
                            <Cupcake
                                key={id} 
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