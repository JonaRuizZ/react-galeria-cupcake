import { useEffect, useState } from "react";
import Cupcake from "../cards/Cupcake";

const Cupcakes = () => {
    const [cupcakes, setCupcakes] = useState()

    // Cada vez que ponga la página cupcakes traeme todo los cupcakes que tengas en la API usando fetch:
    useEffect(() => {
        fetch("http://localhost:3001/cupcakes")
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])

    return(
        <div className="ed-grid">
            <h1>En esta sección venderémos cupcakes</h1>
            <section>
                <Cupcake />
            </section>
        </div>
    )
}

export default Cupcakes;