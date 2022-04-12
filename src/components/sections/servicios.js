import useFetch from "../../hooks/useFetch";

const Servicios = ({ peticion }) => {
/*     const [servicios, setServicios] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
        .then(response => response.json())
        .then(data => setServicios(data)) // Estamos diciendo que cupcakes tenga el valor de data
        .catch(e => console.log(e))
    }, [peticion])
 */

    const [servicios, error] = useFetch(peticion)

    if(error){
        return <span>{JSON.stringify(error)}</span> // error es un objeto, para mostrarlo tenemos que pasarlo a JSON
    }

    if(!servicios || servicios.length === 0){
        return <span>No hay servicios disponibles</span>
    }

    return(
        <div className="ed-grid">
            {
                servicios.map(s => (
                    <div key={s.id}>
                        <h2>{s.nombre}</h2>
                        <p>{s.descripcion}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Servicios;