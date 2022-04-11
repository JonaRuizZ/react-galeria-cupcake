const Cupcake = ({imagen, sabor, descripcion, color, precio}) => {
    return(
        <div className="s-radius-2 s-shadow-bottom s-shadow-card-micro white-color s-pxy-3">
            <img src={imagen} alt={sabor} />
            <p>{descripcion}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}

export default Cupcake;