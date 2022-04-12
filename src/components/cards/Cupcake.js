import PropTypes from "prop-types"

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

Cupcake.propTypes = { // Acá es con minuscula
    precio: PropTypes.number, // Acá con mayuscula, porque estamos haciendo referencia a lo que importamos
    imagen: PropTypes.string,
    sabor: PropTypes.string.isRequired, // .isRequired si en el archivo JSON no ponemos el sabor, o lo borramos, no rompe el código, pero me aparece en consola que hay error
    descripcion: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
    // id: PropTypes.number *El id no lo estamos recibiendo acá en los props de Cupcake, entonces no lo ponemos*
}

// Lo que decimos acá es que si la imagén de algun cupcake se rompe, utilzar esta. Esto se usa mucho con las fotos de perfiles de los usuarios, porque hay gente que no le gusta tener foto de perfil, entoncecs le dejan una por defecto en gris como en facebook
Cupcake.defaultProps = {
    imagen: "https://images.vexels.com/media/users/3/129954/isolated/lists/aba020726fca64655bfe36550b716f78-icono-de-taza-de-helado.png",
    precio: 0
}

export default Cupcake;