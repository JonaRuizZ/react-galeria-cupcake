import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="main-banner img-container dark-color">
            <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img 
                className="main-banner__img" 
                src="https://www.lussocake.com/wp-content/uploads/2020/12/cupcakes-granada4.jpg"
                alt="Foto banner cupcake"
                />
                    <div className="main-banner__data s-center">
                        <p className="s-mb-0 t2">Bienvenido a "La cupcake de tu madre"</p>
                        <p>Un sabor único, como tu madre.</p>
                        <Link className="button light-color" to="/cupcakes">Ver cupcakes</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;