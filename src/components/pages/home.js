import Banner from "../sections/banner";
import Servicios from "../sections/servicios";
import Cupcakes from "./cupcakes";

const Home = () => {
    return(
        <>
            <Banner />
            <Cupcakes peticion="cupcakes?descripcion_like=cubierto"/>
            <Servicios peticion="servicios" />
        </>
    )
}

export default Home;